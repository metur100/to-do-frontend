import React from 'react';
import Task from './Task';
import './TaskCounter.css';

interface TaskCounterProps {
  tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => !task.isCompleted);

  return <div className="task-counter">
    {activeTasks.length} items left
  </div>;
};

export default TaskCounter;
