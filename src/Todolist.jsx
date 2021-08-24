import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Todolist = (props) => {
    const [state, setstate] = useState(false);
    const Cutit = () => {
        setstate(true);
    };
    return(
        <>
        <div className="todo-list">
        <button className="delete" onClick={Cutit}><DeleteIcon/></button>
        <li style={{textDecoration: state ? "line-through" : "none"}}>{props.text}</li>
        </div>
    </>
    );
}

export default Todolist;