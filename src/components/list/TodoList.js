import './TodoList.css'
import TodoItem from "../item/TodoItem";

function TodoList ({todos, onDelete, onChange}) {
	return (
		<div className='todos'>
			{
				todos.map((todo) => {
					return (
						<TodoItem
						 key={todo.id}
						 todo={todo}
						 onChange={onChange}
						 onDelete={onDelete}
						 />
					)
				})
			}
		</div>
	)
}

export default TodoList;