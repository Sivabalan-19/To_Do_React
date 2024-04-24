import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addItem = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteItem = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <div className="input">
        <input className="inpt" type="text" value={taskInput} onChange={handleInputChange} placeholder="Enter task"/>
        <button className="inp" onClick={addItem}>ADD</button>
      </div>
      <div className="taskList">
        {tasks.map((task, index) => (
          <div key={index} className="list-item">
            <div>{task}</div>
            <button className="delete-btn" onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
