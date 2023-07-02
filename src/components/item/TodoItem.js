import './TodoItem.css'

function TodoItem ({todo, onChange, onDelete}) {
	return (
		<div className='childTodos'>
			<label>
				<input type="checkbox" className="checkbox" checked={todo.isCompleted} onChange={(e) => {
					onChange({
						...todo,
						isCompleted: e.target.checked
					})
				}} />
				{todo.text}
				<button className='todoBtn' onClick={() => {
					onDelete(todo);
				}}>Delete</button>
			</label>
		</div>
	)
}	

export default TodoItem;