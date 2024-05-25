import {Routes , Route} from "react-router-dom"
import './App.css';
import TaskList from "./components/pages/TaskList";
import CreateTask from "./components/pages/CreateTask";
import  { Toaster } from 'react-hot-toast';
import UpdateTask from "./components/pages/UpdateTask";
import DeleteTask from "./components/pages/DeleteTask";


function App() {
  return (
    <div className="App-container" >
   <Toaster/>
      
     <Routes>
      <Route path="/"  element={<TaskList/>} />
      <Route path="/create-task"  element={<CreateTask/>} />
      <Route path="/update-task/:id"  element={<UpdateTask/>} />
      <Route path="/delete-task/:id"  element={<DeleteTask/>} />
     </Routes>
 
    </div>
  );
}

export default App;
