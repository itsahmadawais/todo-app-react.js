import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'

export default function EditModal({taskTitle, index, editHandler}) {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState(taskTitle);
    const handler = () => {
        setShow(!show);
        
    }
    const formHandler = () => {
        if(task != ''){
            editHandler(task, index);
            setShow(!show);
        }
    }
    return (
        <div className='edit-modal'>
            <button className='btn btn-success me-2' onClick={handler}>Edit</button>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} className='form-control' placeholder='Type Task'/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-dark' onClick={handler}>Close</button>
                    <button className='btn btn-success' onClick={formHandler}>Update Task</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
