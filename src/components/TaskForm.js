import React, { useState } from 'react'

export default function TaskForm({addTaskHandler}) {
  const [task, setTask] = useState('');
  const handler = () => {
    if(task != ''){
        addTaskHandler(task);
        setTask('');
    }
  }
  return (
    <div className='row'>
        <div className='col-md-8 mx-auto py-4'>
            <h1>Add Task to the list:</h1>
            <hr/>
            <div className='row'>
                <div className='col-md-10'>
                    <input type='text' value={task} onChange={(e) => setTask(e.target.value)} className='form-control' placeholder='Add Task'/>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-success w-100' onClick={handler}>Add Task</button>
                </div>
            </div>
        </div>
    </div>
  )
}
