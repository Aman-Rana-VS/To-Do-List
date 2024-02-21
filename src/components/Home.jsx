import React, { useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const Home = () => {
  let [task, setTask] = useState("");
  let [tasksArray, setTasksArray] = useState([]);
  let [editId, setEditId] = useState("");
  let inputRef = useRef(null);
  let onInputChangeHandler = (e) => {
    setTask(e.target.value);
  }

  let onSubmitHandler = () => {
    if(task.trim() === "")
    {
      alert("Pleae enter a task !");
      return;
    }

    if(editId) {
      setTasksArray(prev => prev.map(t => {
        if(t.id === editId) {
          t.taskBody = task;
        }
        return t;
      }));
      setEditId("");
      setTask("");
      return;
    }
    setTasksArray([...tasksArray, {id: uuidv4(),taskBody : task, completed:false}]);
    setTask("");
  }

  let onCompleteHandler = (id) => {
    console.log("clicked")
    const temp = tasksArray.map(t => {
      if(t.id === id) t.completed = !t.completed;
      return t;
    })
    setTasksArray(temp)
  } 

  let handleDelete = (id) => {
    setTasksArray(prev => prev.filter((el) => el.id !== id))
  }

  let hanldeEdit = (id) => {
    let editTask = tasksArray.find(t => t.id === id);
    console.log(editTask);
    setTask(editTask.taskBody);
    setEditId(id);
    inputRef.current.focus();
  }

  return (
    <div className="container">
        <div className="mainDiv d-flex flex-column mx-auto align-items-center">
            <h2 className="my-4"> To-Do List ✏️</h2>
            <form className="my-2" id="my-form">
                <input id="todoItem" type="text" name="todoItem" placeholder="Enter task" value={task} onChange={onInputChangeHandler} ref={inputRef}/>
                <button type="button" onClick={onSubmitHandler}>{editId ? "Save Change" : "Add Task"}</button>
            </form>
            <ul>
                {tasksArray.map((task) => {
                    return (
                        <li key={task.id} className={"my-2 " + (task.completed ? "bg-green" : "")}>
                          <span onClick={() => onCompleteHandler(task.id)} className={task.completed ? "checked" : ""}>{task.taskBody}</span>
                          <button className='btn-del btn btn-danger btn-sm' onClick={() => handleDelete(task.id)}>Delete</button>
                          <button className='btn-edit btn btn-secondary btn-sm' onClick={() => hanldeEdit(task.id)}>Edit</button>
                        </li>    
                    )
                })}
            </ul>
        </div>
    </div>
    
  )
}

export default Home;