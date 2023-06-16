import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];


function App() {
  const [tasks, setTasks] = useState(TASKS);

  const updateTaskStatus = (taskId) => {

    // create a new list of tasks with toggle complete value
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId) {
        task.isComplete = !task.isComplete;
      };
      return {...task}
    });

    setTasks(updatedTasks);
  }

  const updateDelete = (taskId) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id !== taskId) {
          return { ...task };
        }
      });
    }}


// what we initially started with in this file
// THIS IS WHERE WE NEED TO PICK BACK UP, REFER TO LINES 32-42 IN TASK.JS
const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

export default App;
