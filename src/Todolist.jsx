import React from 'react';

const Todolist = (props) => {
    
    return(
        <>
        <div className="todo-list">
        <button className="delete" onClick={() => {
            props.onSelect(props.id);
        }}> x </button>
        <li>{props.text}</li>
        </div>
    </>
    );
}

export default Todolist;