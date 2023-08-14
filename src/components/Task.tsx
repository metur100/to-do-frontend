import { useState } from 'react';
import api from './api';
import './Task.css'; 

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface Props {
  task: Task;
  onUpdate: () => void;
}

function Task({ task, onUpdate }: Props) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleCheckboxChange = async () => {
    try {
      const updatedTask = { ...task, isCompleted: !isCompleted };
      await api.put(`tasks/${task.id}`, updatedTask);
      onUpdate();
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`tasks/${task.id}`);
      onUpdate();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <div
        className={`checkmark ${isCompleted ? 'checked' : ''}`}
        onClick={handleCheckboxChange}
      />
      <span className={`task-title ${isCompleted ? 'completed' : ''}`}>
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
