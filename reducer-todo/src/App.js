import React, { useReducer } from 'react';
import './App.css';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// reducers
import {
	reducer,
	initialState,
	ADD_TASK,
	TOGGLE_TASK,
	CLEAR_COMPLETED
} from './reducers/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addItem = (event, task) => {
		event.preventDefault();

		dispatch({ type: ADD_TASK, payload: task});
	}

	const toggleTask = task => {
		dispatch({type: TOGGLE_TASK, payload: task.id});
	}

	const clearCompleted = task => {
		dispatch({type: CLEAR_COMPLETED, payload: task});
	}

  return (
    <div className="App">
			<h1>Todo List</h1>
			<TodoForm addItem={addItem} clearCompleted={clearCompleted} />
			<TodoList tasks={state.tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
