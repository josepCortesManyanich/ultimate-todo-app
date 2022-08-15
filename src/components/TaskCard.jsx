import React from "react";

export default function TaskCard(props) {
    const {task, onDelete} = props

    return(
        <div>
            <div>
                <h1>{task.name}</h1>
                <img src={task.image} alt="" />
                <p>{task.useful_link}</p>
                <p>{task.urgency}</p>
                <p>{task.description}</p>
                <p>{task.done}</p>
            </div>
            <button onClick={() => onDelete(task)}> Delete!</button>
            
        </div>
    )
}