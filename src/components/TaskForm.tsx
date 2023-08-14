import React, { useState } from 'react';
import api from './api';
import Task from './Task';
import './TaskForm.css';

interface TaskFormProps {
  onTaskCreated: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('tasks/create', { title, isCompleted: false });
      onTaskCreated(response.data);
      setTitle('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TaskForm;
