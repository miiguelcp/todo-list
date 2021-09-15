import React from "react";
import { useState } from "react";
import { Title } from "./title.jsx";
export const List = () => {
	const [task, setTask] = useState([]);

	const deleteToDo = position => {
		const newTask = task.filter((_task, index) => index != position);
		setTask(newTask);
	};

	return (
		<div className="container">
			<Title />
			<div id="idinput" className="row">
				<input
					type="text"
					placeholder="Whats need to be done?"
					onKeyPress={event =>
						event.key === "Enter" &&
						setTask([...task, event.target.value])
					}
					style={{
						marginLeft: "auto",
						marginRight: "auto"
					}}
				/>
			</div>
			<div id="lidiv" className="row">
				<ul
					className="list-group list-group-flush"
					style={{ marginLeft: "auto", marginRight: "auto" }}>
					{task.map((task, index) => {
						return (
							<li
								id="li"
								className="d-flex justify-content-between list-group-item"
								key={index}>
								{task}
								<i
									className=" far fa-trash-alt"
									onClick={event => deleteToDo(index)}></i>
							</li>
						);
					})}
				</ul>
			</div>
			<div id="divrestante" className="row">
				<li
					className="list-group-item"
					id="restante"
					style={{
						marginRight: "auto",
						marginLeft: "auto"
					}}>
					{task.length} Item left
				</li>
			</div>
		</div>
	);
};
