import React from "react";

const Overview = (props) =>{
    const {tasks} = props;
    let i=1;

    return (
        <ul>
            {tasks.map(task =>{
                return <li>{i++}. {task.text}   <button data-id={task.id}>Edit</button> <button data-id={task.id}>Delete</button></li>
            })}
        </ul>
    );
};

export default Overview;