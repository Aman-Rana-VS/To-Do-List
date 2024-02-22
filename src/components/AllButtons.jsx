import React from 'react'

const AllButtons = ({tasksArray, setTasksArray}) => {
  function handleMarkAll() {
    if(!window.confirm("Do you want to mark all as completed ?")) return;
    setTasksArray(prev => prev.map(t => {
        t.completed = true;
        return t;
    }))
  }

  function handleDeleteAll() {
    if(!window.confirm("Do you want to delete all the tasks ?")) return;
    setTasksArray([]);
  }
  return (
    <div className='my-2'>
        <button type="button" class="btn btn-success me-2" onClick={handleMarkAll}>Mark All</button>
        <button type="button" class="btn btn-danger" onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}

export default AllButtons