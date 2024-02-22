import React from 'react'

const TodoList = ({tasksArray, setTasksArray, setTask, setEditId, inputRef, editId}) => {
  let handleDelete = (id) => {
    if(!window.confirm("Do you want to delete the task ?")) return;
    setTasksArray(prev => prev.filter((el) => el.id !== id))
  }

  let hanldeEdit = (id) => {
    let editTask = tasksArray.find(t => t.id === id);
    // console.log(editTask);
    setTask(editTask.taskBody);
    setEditId(id);
    inputRef.current.focus();
  }

  let onCompleteHandler = (id) => {
    console.log("clicked")
    if(editId) return;
    const temp = tasksArray.map(t => {
      if(t.id === id) t.completed = !t.completed;
      return t;
    })
    setTasksArray(temp)
  } 
  return (
    <>
        <ul>
            {tasksArray.map((task) => {
                return (
                    <li key={task.id} className={"my-2 " + (task.completed ? "bg-green" : "")}>
                      <span onClick={() => onCompleteHandler(task.id)} className={task.completed ? "checked" : ""}>{task.taskBody}</span>
                      {task.isEdited ? <span className='edited'>(Edited)</span> : null}
                      {!editId ? <button className='btn-del btn btn-danger btn-sm' onClick={() => handleDelete(task.id)}>Delete</button> : null}
                      {!task.completed ?  
                      <button className='btn-edit btn btn-secondary btn-sm' onClick={() => hanldeEdit(task.id)}>Edit</button>
                        : null }
                    </li>    
                )
            })}
        </ul>
    </>
  )
}

export default TodoList