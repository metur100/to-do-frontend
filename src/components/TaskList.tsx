import React from 'react';
import Task from './Task';
import './TaskList.css'; 

interface TaskListProps {
  tasks: Task[];
  onUpdate: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate }) => {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
