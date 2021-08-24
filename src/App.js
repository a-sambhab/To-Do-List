import React, {useState} from 'react';
import './App.css'
import Button from '@material-ui/core/Button';
import Todolist from './Todolist';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
const StyledButton = withStyles({
  root: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
  },
}})(Button);

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItem((oldItems) =>{
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  const deleteItem = (id) => {
    console.log('deleted');
    setItem((oldItems) => {
      return oldItems.filter((arrayElem, index)=>{
        return index!==id;
      })
    })
  }
  return(
    <>
      <div className="main_div">
        <div className="class_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
          <StyledButton style={{backgroundColor:"#8566aa", color:"white", margin:"10px"}} className="add" onClick={listOfItems}> <AddIcon /> </StyledButton>

          <ol>
            {Item.map((item, index) => {
              return(
                <>
                  <Todolist key={index} id={index} onSelect={deleteItem} text={item}/>
                </>
              );
            })}
          </ol>

        </div>
      </div>
    </>
  );
}

export default App;