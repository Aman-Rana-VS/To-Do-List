import React, { useEffect, useState } from 'react'
import List from './List';

const Home = () => {
  let [task, setTask] = useState("");
  let [tasksArray, setTasksArray] = useState([]);
  let [completedTask, setCompletedTasks] = useState([]);
  let onInputChangeHandler = (e) => {
    setTask(e.target.value);
  }

  let onSubmitHandler = () => {
    setTasksArray(prev => [...prev, task]);
  }

  let onCompleteHandler = (ind) => {
    if(completedTask.includes(ind))
    {
        console.log("offClickHandler")
        setCompletedTasks(prev => {
            return prev.filter((el, index) => index !== ind);
        });
    }
    else 
    {
        console.log("onClickHandler")
        setCompletedTasks(prev => {
            return [...prev, ind];
        })
    }
  } 

  let handleDelete = (ind) => {
    setTasksArray(prev => prev.filter((el, index) => index !== ind))
    setCompletedTasks(prev => prev.filter((el, index) => index !== ind));
  }
  useEffect(()=>{
    // console.log(1);
  },[setTasksArray])

  return (
    <div className="container">
        <div className="mainDiv mx-auto">
            <h2 className="my-4 ps-4"> To-Do List ✏️</h2>
            <form className="my-2" id="my-form">
                <input id="todoItem" type="text" name="todoItem" placeholder="Enter task" value={task} onChange={onInputChangeHandler} />
                <button type="button" onClick={onSubmitHandler}>Add Task</button>
            </form>
            <ul>
                {tasksArray.map((task, ind) => {
                    return (
                          <li key={ind} className="my-2">
                              <span className={completedTask.includes(ind) ? "checked" : ""} onClick={() => onCompleteHandler(ind)}>{task}</span>
                              <button className='btn-del' onClick={() => handleDelete(ind)}>delete</button>
                          </li>    
                    )
                })}
            </ul>
        </div>
    </div>
    
  )
}

export default Home;