import React from 'react'

const Footer = ({tasksArray}) => {

  let remainingTasks = tasksArray.length;
  let completedTasks = 0;

  tasksArray.forEach(t => {
    if(t.completed)
    {
        remainingTasks--;
        completedTasks++;
    }
  })
  return (
    <div className='footer'>
        <p>Tasks Completed : {completedTasks}</p>
        <p>Tasks Pending : {remainingTasks}</p>
    </div>
  )
}

export default Footer