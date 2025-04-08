import React, { useState, useEffect } from 'react';
import './todo.css';
import { ImPencil2, ImCross } from 'react-icons/im'; // Importing the icons
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; // Importing axios
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [Inputs, setInput] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const email = localStorage.getItem("email"); // Assuming email is stored in localStorage

  useEffect(() => {
    fetchTasks(); // Fetch tasks on component mount
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:1000/api/v2/gettasks?email=${email}`);
      setArray(response.data.tasks); // Set the tasks in state
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks.");
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title && Inputs.body) {
      try {
        if (isEditing) {
          const taskId = Array[editIndex]._id; // Get the ID of the task being edited
          const updatedTask = await axios.put(`http://localhost:1000/api/v2/updatetask/${taskId}`, {
            title: Inputs.title,
            body: Inputs.body,
            email
          });
          toast.success(updatedTask.data.message);
          fetchTasks(); // Fetch updated tasks after editing
          setIsEditing(false);
          setEditIndex(null);
        } else {
          const newTask = await axios.post('http://localhost:1000/api/v2/addtask', {
            title: Inputs.title,
            body: Inputs.body,
            email
          });
          toast.success("Task added successfully");
          
          // Save the task ID in localStorage
          const newTaskId = newTask.data.list._id;
          localStorage.setItem(`task_${newTaskId}`, JSON.stringify(newTask.data.list)); // Save the task data

          setArray([...Array, newTask.data.list]); // Update tasks with new task
        }
        setInput({ title: "", body: "" });
      } catch (error) {
        console.error("Error adding/updating task:", error);
        toast.error("Failed to add/update task.");
      }
    }
  };

  const deleteTodo = async (index) => {
    try {
      const taskId = Array[index]._id; // Get the task ID to delete
      await axios.delete(`http://localhost:1000/api/v2/deletetask/${taskId}`, {
        data: { email }
      });
      toast.success("Task deleted successfully");
      localStorage.removeItem(`task_${taskId}`); // Remove the task ID from localStorage
      fetchTasks(); // Fetch tasks after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task.");
    }
  };

  const startEditing = (index) => {
    setInput(Array[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    
    <div className='todo'>
      <ToastContainer />
      <div className='todo-main container d-flex justify-content-center align-items-center my-4 flex-column'>
        <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
          <input
            type='text'
            placeholder='TITLE'
            className='my-2 p-2 todo-inputs'
            name='title'
            value={Inputs.title}
            onChange={change}
          />
          <textarea
            id='textarea'
            placeholder='BODY'
            name='body'
            className='p-2 todo-inputs'
            value={Inputs.body}
            onChange={change}
            style={{ display: 'block' }} // Show textarea
          />
        </div>

        <div className='w-50 d-flex justify-content-end my-3'>
          <button className='home-btn px-2 py-1' onClick={submit}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
      </div>

      {/* Displaying the To-Do list items */}
      <div className='todo-body'>
        <div className='container-fluid'>
          <div className='row'>
            {Array.map((item, index) => (
              <div key={index} className='col-12 col-md-4'> {/* Adjusted for responsive behavior */}
                <TodoCard 
                  title={item.title} 
                  body={item.body} 
                  onDelete={() => deleteTodo(index)} 
                  onEdit={() => startEditing(index)} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Create a TodoCard component to display individual todos
const TodoCard = ({ title, body, onDelete, onEdit }) => {
  return (
    <div className='todo-card my-3 p-3 border container d-flex justify-content-between align-items-center'>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div>
        <button className='icon-btn' onClick={onEdit}>
          <ImPencil2 />
        </button>
        <button className='icon-btn' onClick={onDelete}>
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default Todo;