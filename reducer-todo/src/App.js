import React, { useReducer } from 'react';
import './App.css';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// reducers
import { reducer, initialState } from './reducers/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addItem = (event) => {
		event.preventDefault();

		console.log("addItem function triggered");
	}

  return (
    <div className="App">
			<h1>Todo List</h1>
			<TodoForm addItem={addItem} />
			<TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
