import React from 'react'
import EditModal from './EditModal'

export default function TasksList({ tasks, deleteHandler, editHandler }) {
    return (
        <div className='row'>
            <div className='col-md-8 mx-auto'>
                <h2 className='fs-5'>Tasks:</h2>
                {
                    tasks.map((task, i) => {
                        return (
                            <div key={i} className='card mb-2'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                           {task}
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='d-flex justify-content-end'>
                                                {/* <button className='btn btn-success me-2'>Edit</button> */}
                                                <EditModal taskTitle={task} index={i} editHandler={editHandler}/>
                                                <button className='btn btn-danger' onClick={() => deleteHandler(i)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
