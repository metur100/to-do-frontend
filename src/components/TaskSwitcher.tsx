import React from 'react';
import './TaskSwitcher.css';

interface TaskSwitcherProps {
  onListSwitch: (list: string) => void;
}

const TaskSwitcher: React.FC<TaskSwitcherProps> = ({ onListSwitch }) => {
  return (
    <div className="switcher-container">
      <button className="switcher-button" onClick={() => onListSwitch('all')}>All</button>
      <button className="switcher-button" onClick={() => onListSwitch('active')}>Active</button>
      <button className="switcher-button" onClick={() => onListSwitch('completed')}>Completed</button>
    </div>
  );
};

export default TaskSwitcher;
