import React,{useContext} from 'react'
import "./TaskCard.css"
import { TaskContext } from '../../../context/TaskContext'

const TaskCard = ({ id, task, onDragStart, handleShow, setModalType }) => {
    const { setCurrentTask} = useContext(TaskContext);
    return (
        <div className='TaskCard--container rounded border'
            draggable
            onDragStart={(e) => onDragStart(e, id)}
        >
            <div className='payload'>
                <div className='fw-bold'>{task?.title}</div>
                <div>
                    {task?.description}
                </div>
            </div>
            <div className='info'>
                <div>created at: {task?.createdAt}</div>
                <div>
                    <button
                        onClick={() => {
                            handleShow();
                            setModalType("delete-task")
                            setCurrentTask(task)
                        }}
                        className='btn btn-danger btn-sm btn-md'>
                        Delete
                    </button>
                    <button onClick={() => {
                        handleShow();
                        setModalType("edit-task")
                        setCurrentTask(task)
                    }} className="btn btn-info text-white btn-sm btn-md">
                        Edit
                    </button>
                    <button onClick={() => {
                        handleShow();
                        setModalType("view-task")
                        setCurrentTask(task)
                    }} className='btn btn-primary btn-sm btn-md'>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard