import React from 'react'
import {v4 as uuidv4} from 'uuid';

const InputForm = ({editId , task, inputRef, setTask, setTasksArray, setEditId, tasksArray}) => {
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
          if(t.taskBody === task) {
            alert("You have entered the same task")
            return t;
          }
          t.taskBody = task;
          t.isEdited = true;
          setEditId("");
          setTask("");
        }
        return t;
      }));
      
      return;
    }

    // Add new task
    setTasksArray([...tasksArray, {id: uuidv4(),taskBody : task, completed:false, isEdited: false}]);
    setTask("");
  }

  function handleEditCancel(e) {
    e.preventDefault();
    setEditId("");
    setTask("");
  }

  return (
    <>
      <h2 className="my-4"> To-Do List ✏️</h2>
      <form className="my-2" id="my-form">
        <input
          id="todoItem"
          type="text"
          name="todoItem"
          placeholder="Enter task"
          value={task}
          onChange={onInputChangeHandler}
          ref={inputRef}
        />
        <button type="button" className='btn btn-success btn-sm mx-2' onClick={onSubmitHandler}>
          {editId ? "Save Change" : "Add Task"}
        </button>
        {editId ? <button className='btn btn-danger btn-sm cancel-btn' onClick={handleEditCancel}>Cancel</button> : null}
      </form>
    </>
  );
}

export default InputForm