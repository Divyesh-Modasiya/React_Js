import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, editData } from './Redux/Action'; // Import actions

function Home() {
  const [data, setData] = useState('');  // State for input field
  const [editId, setEditId] = useState(null);  // Tracks the task being edited

  const Collection = useSelector((state) => state.task);  // Get tasks from Redux state
  const dispatch = useDispatch();

  // Submit new task or update existing task
  const handleSubmit = () => {
    if (data) {
      if (editId) {
        // If editing, dispatch edit action
        dispatch(editData(editId, data));
        setEditId(null);  // Clear edit mode after updating
      } else {
        // If not editing, dispatch add action
        dispatch(addData({ id: Date.now(), name: data }));
      }
    }
    setData('');  // Clear input field after submission
  };

  // Start editing a task
  const todoEdit = (el) => {
    setEditId(el.id);  // Set task ID to edit
    setData(el.name);  // Pre-fill the input with the task's name
  };

  // Delete a task
  const todoDelete = (id) => {
    dispatch(deleteData(id));  // Dispatch delete action
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={data}
          onChange={(e) => setData(e.target.value)}  // Update input value
        />
        <button onClick={handleSubmit}>
          {editId ? 'Update' : 'Submit'}  {/* Change button text based on mode */}
        </button>

        <div>
          {Collection.map((el) => (
            <div key={el.id}>
              <li>{el.name}</li>
              <button onClick={() => todoEdit(el)}>Edit</button>  {/* Edit task */}
              <button onClick={() => todoDelete(el.id)}>Delete</button>  {/* Delete task */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
