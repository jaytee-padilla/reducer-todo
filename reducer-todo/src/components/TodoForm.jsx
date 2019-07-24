import React, { useState } from 'react';

export default function TodoForm(props) {
	const [task, setTask] = useState('');

	const onChangeHandler = event => {
		setTask(event.target.value);
	}

	const submitHandler = event => {
		event.preventDefault();

		props.addItem(event, task);
		setTask('');
	}

	return (
		<div className="todo-form">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					style={{width: 400}}
					value={task}
					name="task"
					onChange={onChangeHandler}
				/>
				<button>Add Todo</button>
			</form>

			<button onClick={props.clearCompleted}>Clear Completed</button>
		</div>
	)
}
