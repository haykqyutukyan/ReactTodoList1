import './TodoForm.css'
import { useState } from "react";

function TodoForm ({onAdd}) {

	const [text, setText] = useState("");

	return (
		<form className="form" onSubmit={(e) => {
			e.preventDefault();
			onAdd(text);
			setText("");
		}}>
			<input type="text" value={text} onChange={(e) => {
				setText(e.target.value);
			}} placeholder='Add Todo' />
			<button className='addBtn'>Add</button>
		</form>
	)
}



export default TodoForm;