import React from 'react';
import './styles.css';

export default function TodoList(props) {
	return (
		<div className="todo-list">
			{props.tasks.map(task => {
				return (
					<div className={task.completed? 'completed' : ''} style={{cursor: "pointer"}} key={task.id} onClick={() => props.toggleTask(task)}>
						<p>{task.item}</p>
						<hr />
					</div>
				)
			})}
		</div>
	)
}
