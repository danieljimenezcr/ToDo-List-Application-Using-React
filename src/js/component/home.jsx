import React, { useState } from "react";

//create your first component
const Home = () => {

	const [toDos, setTodos] = useState([])
	const [inputTask, setInputTask] = useState("")

	function addNewTask(e) {
		if (e.key === "Enter" && inputTask != "") {
			setTodos(toDos.concat([inputTask]));
			setInputTask("");
		}
	}

	function deleteTask(i) {
		setTodos(toDos.filter((i, selectedIndex) => index != selectedIndex))
	}

	function deleteTask(i) {
		let newTodos = [...toDos]
		newTodos.splice(i, 1)
		setTodos(newTodos)
	}

	return (

		<div className="container main-container">
			<div className="todo-container">
				<h1 className="text-center app-title"> <i className="fa-solid fa-circle-check"></i> to-do list</h1>
				<div className="input-container">
					<input
						className="input-task"
						type="text"
						onChange={(e) => setInputTask(e.target.value)}
						value={inputTask}
						onKeyDown={addNewTask}
						placeholder="Add your new task" />

				</div>
				<ul className="task-list">

					{toDos.map((task) => (
						<li className="task-item">
							{task}

							<i onClick={deleteTask} class="fa-regular fa-trash-can trash-icon"> </i>
						</li>

					))}
				</ul>
				
			</div>
		</div>
	);
};

export default Home;
