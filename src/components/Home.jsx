import React, { useRef, useState } from 'react'
import InputForm from './InputForm';
import TodoList from './TodoList';
import Footer from './Footer';
import AllButtons from './AllButtons';

const Home = () => {
  let [task, setTask] = useState("");
  let [tasksArray, setTasksArray] = useState([]);
  let [editId, setEditId] = useState("");
  let inputRef = useRef(null);
  
  return (
    <div>
        <div className="container d-flex flex-column mx-auto align-items-center">
            <InputForm editId={editId} task={task} inputRef={inputRef} setTask={setTask} setTasksArray={setTasksArray} setEditId={setEditId} tasksArray={tasksArray}/>
            {!editId ? <AllButtons tasksArray={tasksArray} setTasksArray={setTasksArray}/> : null}
            <TodoList tasksArray={tasksArray} setTasksArray={setTasksArray} setTask={setTask} setEditId={setEditId} inputRef={inputRef} editId={editId}/>
        </div>
        <Footer tasksArray={tasksArray}/>
    </div>
    
  )
}

export default Home;