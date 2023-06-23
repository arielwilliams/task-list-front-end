import React, { useState }  from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

// WHAT WE NEED TO DO 
// iterate through tasks, grab the task by id, and then update whether the task is complete or not
// link for the funcs from animal we can follow: https://github.com/Ada-C19/sapphire-flasky-frontend/blob/main/src/App.js#L23


// find specific task that needs to be updated and update it's field to true or false (or animals it was bookmarked, but on app we used ..)
// use key like animal (in our case it will be id)


  function App() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        title: 'Mow the lawn',
        isComplete: false
      },
      {
        id: 2,
        title: 'Cook Pasta',
        isComplete: true,
      }
    ]);

  const updateTaskStatus = (taskId) => {

    // create a new list of tasks with toggle complete value
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const updateDelete = (taskId) => {
    const updatedTasks= tasks.map((task) => {
      if (task.id !== taskId) {
        return { ...task};
      }
    });


    // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
    const filteredUpdatedData = updatedTasks.filter(function (element) {
      return element !== undefined;
    });

    setTasks(filteredUpdatedData);
  };

  // pick up here, refer to this: https://github.com/Ada-C19/sapphire-flasky-frontend/commit/1e41a759daa93e96aa69219e6037c9d7933b1e83
  return (
    <div className="App">
    <header className="App-header">
      <h1>Ada&apos;s Task List</h1>
    </header>
    <main>
      <div>
        {<TaskList 
        tasks={tasks} 
        onUpdateTaskStatus={updateTaskStatus}
        onDelete={updateDelete}/>}
      </div>
    </main>
  </div>
  );
}

export default App;

