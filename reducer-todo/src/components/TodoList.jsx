import React from 'react';

export default function TodoList(props) {
	return (
		<div className="todo-list">
			{props.tasks.map(task => {
				return (
					<div className="todo-list-item" key={task.id}>
						<p>{task.item}</p>
						<hr />
					</div>
				)
			})}
		</div>
	)
}
