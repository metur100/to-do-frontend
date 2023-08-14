import { useState, useEffect } from 'react';
import './App.css';
import api from './components/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSwitcher from './components/TaskSwitcher';
import TaskCounter from './components/TaskCounter';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentList, setCurrentList] = useState<string>('all');

  useEffect(() => {
    fetchTasks();
  }, [currentList]);

  const fetchTasks = async () => {
    try {
      const response = await api.get(`tasks/${currentList}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleTaskCreated = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleListSwitch = (list: string) => {
    setCurrentList(list);
  };

  const handleTaskUpdate = () => {
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>To-Do</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} onUpdate={handleTaskUpdate} />
      <TaskSwitcher onListSwitch={handleListSwitch} />
      <TaskCounter tasks={tasks} />
    </div>
  );
};

export default App;
