import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../style/style.css"

const UpdateTask = () => {

    const [ title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [dueDate, setDueDate] = useState("")
  
    const navigate = useNavigate()
    
    const {id } = useParams()

   
    const getSingleTask = async() => {
         
        const {data} = await axios.get(`/api/v1/task/tasks/${id}`)
      
        if (data?.success) {
             setTitle(data?.task.title)
             setDescription(data.task.description)
             setStatus(data.task.status)
             setDueDate(data.task.dueDate)

        }


    }



  useEffect(()=> {
    getSingleTask()
    // eslint-disable-next-line
  }, [])

  
    const handleSubmit = async(e) => {
      e.preventDefault()
  
      try {
         
        const  {data} = await axios.put(`/api/v1/task/update-tasks/${id}`, {title, description,status, dueDate  })
           
        if (data?.success) {
             toast.success("update successfully")
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
      <h3>update Task</h3>
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
          <button type="submit">update Task</button>
    

    </form>

  </div>
  )
}

export default UpdateTask