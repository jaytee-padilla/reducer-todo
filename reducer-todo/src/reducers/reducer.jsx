export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
	tasks: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589
		},
	]
};

export const reducer = (state, action) => {
	switch(action.type){
		case ADD_TASK:
			const newTask = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state,
				tasks: [...state.tasks, newTask]
			};

			case TOGGLE_TASK:
				return {
					...state,
					tasks: state.tasks.map(task => {
						if(action.payload === task.id) {
							return {
								...task,
								completed: !task.completed
							};
						}
						return task;
					})
				};

				case CLEAR_COMPLETED:
					return {
						...state,
						tasks: state.tasks.filter(task => task.completed === false)
					};

		default:
			return state;
	}
};