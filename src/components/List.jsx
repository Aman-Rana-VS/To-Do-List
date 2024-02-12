import React, { useState } from 'react'

const List = ({tasksArray, setTasksArray}) => {
  let [completedTask, setCompletedTasks] = useState([]);
  let onClickHandler = (ind) => {
    if(completedTask.includes(ind))
    {
        console.log("offClickHandler")
        setCompletedTasks(prev => {
            prev = prev.filter((el, index) => index !== ind);
            return prev;
        });
    }
    else 
    {
        console.log("onClickHandler")
        setCompletedTasks(prev => {
            prev.push(ind);
            return prev;
        })
    }
  } 

  let handleDelete = (ind) => {
    setTasksArray(prev => prev.filter((el, index) => index !== ind))
    setCompletedTasks(prev => prev.filter((el, index) => index !== ind));
  }
  return (
    <ul>
        {tasksArray.map((task, ind) => {
            return (
                   <li key={ind} className="my-2" onClick={() => onClickHandler(ind)}>
                        <span className={completedTask.includes(ind) ? "checked" : ""}>{task}</span>
                        <button className='btn-del' onClick={() => handleDelete(ind)}>delete</button>
                    </li>    
            )
        })}
    </ul>
  )
}

export default List