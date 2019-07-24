import React from 'react';

export default function TodoForm(props) {
	return (
		<div className="todo-form">
			<form onSubmit={props.addItem}>
				<input type="text" style={{width: 400}} />
				<button>Add Todo</button>
			</form>
		</div>
	)
}
