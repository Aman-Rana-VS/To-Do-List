import React from 'react'

const AllButtons = ({tasksArray, setTasksArray}) => {
  function handleMarkAll() {
    setTasksArray(prev => prev.map(t => {
        t.completed = true;
        return t;
    }))
  }

  function handleDeleteAll() {
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