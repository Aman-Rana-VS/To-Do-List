import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const Home = () => {
  let [task, setTask] = useState("");
  let [tasksArray, setTasksArray] = useState([]);

  let onInputChangeHandler = (e) => {
    setTask(e.target.value);
  }

  let onSubmitHandler = () => {
    if(task.trim() === "")
    {
      alert("Pleae enter a task !");
      return;
    }
    setTasksArray([...tasksArray, {id: uuidv4(),taskBody : task, completed:false}]);
    setTask("");
  }

  let onCompleteHandler = (id) => {
    console.log("clicked")
    const temp = [...tasksArray];

    let t = temp.find((item) => item.id === id);
    t.completed = !t.completed;
    setTasksArray(temp);
  } 

  let handleDelete = (id) => {
    setTasksArray(prev => prev.filter((el) => el.id !== id))
  }

  return (
    <div className="container">
        <div className="mainDiv mx-auto">
            <h2 className="my-4 ps-4"> To-Do List ✏️</h2>
            <form className="my-2" id="my-form">
                <input id="todoItem" type="text" name="todoItem" placeholder="Enter task" value={task} onChange={onInputChangeHandler} />
                <button type="button" onClick={onSubmitHandler}>Add Task</button>
            </form>
            <ul>
                {tasksArray.map((task) => {
                    return (
                        <li key={task.id} className="my-2">
                          <span onClick={() => onCompleteHandler(task.id)} className={task.completed ? "checked" : ""}>{task.taskBody}</span>
                          <button className='btn-del' onClick={() => handleDelete(task.id)}>delete</button>
                        </li>    
                    )
                })}
            </ul>
        </div>
    </div>
    
  )
}

export default Home;