import React from 'react'

const TaskCard = ({taskName, priority}) => {

const deleteBtn

  return (
    <div>
        <h2>taskName: {taskName}</h2>
        <h2>priority: {priority}</h2>
        <button onClick={deleteBtn}>Delete</button>
    </div>
  )
}

export default TaskCard