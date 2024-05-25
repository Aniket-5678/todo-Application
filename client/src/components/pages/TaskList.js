import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../style/style.css"
import { useNavigate, Link } from 'react-router-dom'

const TaskList = () => {
  
  const [task, setTask] = useState([])
  const navigate = useNavigate()

      

  const getAllTask = async() => {
    try {
        const {data} = await axios.get('/api/v1/task/tasks')
         
        setTask(data?.tasks)

    } catch (error) {
      console.log(error);
    }
  }
   

  useEffect(()=> {
    getAllTask()
  }, [])

  return (
    <div className='task-list-container'  >
      <div className='todo-heading'>
        <Link className='todo-link'  to='/create-task'>Create a To-Do List </Link>
      </div>
        <div className='tasklist-top-main'>
             {task?.map((task) => (
              <div className='taskList-main'> 
                <div className='task-content'>    
                 <h3>Title: {task.title}</h3>
                <p>Description: {task.description}</p>
                <h4>status: {task.status}</h4>
                <h3>DueDate: {task.dueDate}</h3>
                </div>
                <div className='task-btn-main'>
                  <button onClick={() => navigate('/create-task')} className='createTask-btn' >Create New task</button>
                  <button onClick={()=> navigate(`/update-task/${task._id}`)} className='updatetask-btn'>Edit</button>
                  <button onClick={()=> navigate(`/delete-task/${task._id}`)} className='deletetask-btn'>Delete</button>
                </div>
                  
              </div>
             ))}
        </div>
        
    </div>
  )
}

export default TaskList