import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../style/style.css"

const CreateTask = () => {
   
  const [ title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")
  const [dueDate, setDueDate] = useState("")

  const navigate = useNavigate()
 

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
       
      const  {data} = await axios.post('/api/v1/task/create-tasks', {title, description,status, dueDate  })
         
      if (data?.success) {
           toast.success("task created successfully")
           navigate('/')
      }

    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  }


  return (
    <div className='createtask-container'>
      <form className='createtask-main' onSubmit={handleSubmit}>
        <h3>Create New Task</h3>
      <input
                type="text"
                name="title"
                value={title}
              onChange={(e)=> setTitle(e.target.value)}
                placeholder="Title"
            
            />
            <textarea
                name="description"
                value={description}
                onChange= {(e)=> setDescription(e.target.value)}
                placeholder="Description"
            />
            <select
                name="status"
                value={status}
                onChange={(e)=> setStatus(e.target.value)}
             
            >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={(e)=> setDueDate(e.target.value)}
                
            />
            <button type="submit">Create Task</button>
      

      </form>

    </div>
  )
}

export default CreateTask











