import React, { useState } from "react";

function Todo() {

  // stateful  variable
  const [color, setColor] = useState("#FFFFFF");
  const [tasks, setTasks] = useState(["Wake", "Brush teeth", "Hit the streets"]);
  const [newTask, setNewTask] = useState("");

  function handleColorchange(event) {
    setColor(event.target.value);
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") { // ensures empty input value isn't added
      setTasks(t => [...t, newTask]);
      setNewTask(""); // empties input element.
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      // swap array elements
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }

  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      // swap array elements
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }

  }

  return (
    <div className="to-do">
      <h1>To-Do</h1>
      <div>
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="color">
        <label style={{ color: color }}>Click to change colour:</label>
        <input type="color" value={color} onChange={handleColorchange} />
      </div>
      <div className="color-display" style={{ backgroundColor: color }}>
        <ol>
          {tasks.map((task, i) => <li key={i}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(i)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(i)}>⬆</button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>⬇</button>
          </li>)}
        </ol>
      </div>
    </div>);
}

export default Todo