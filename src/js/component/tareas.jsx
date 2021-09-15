import React from "react";

export const Tareas = () => {
    return (
        <div className="row">
        <ul className="list-group list-group-flush">
            {task.map((task, i) => {
                return (
                    <li className="list-group-item" key={i}>
                        {task}
                    </li>
                );
            })}
        </ul>
    </div>
    )
}