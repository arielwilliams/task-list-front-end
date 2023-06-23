import React, { useState, useEffect }  from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from "./components/NewTaskForm";
import './App.css';
import axios from 'axios';

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


    const loadTasks= () => {
      axios
        .get("https://task-list-api-c17.onrender.com/tasks")
        .then((response) => {
          const initialTaskData = [];
          response.data.forEach((task) => {
            initialTaskData.push(task);
          });
          setTasks(initialTaskData);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  
    useEffect( () => {
      loadTasks();
    }, []);


  // old name: const updateTaskStatus = (taskId) => {
    const toggleCompleteTask = (taskId) => {

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


  // old name: const updateDelete = (taskId) => {
    const deleteTask = (taskId) => {
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

  const createNewTask = (newTaskInfo) => {
    console.log(newTaskInfo)
    axios
      .post("https://task-list-api-c17.onrender.com/tasks", newTaskInfo)
      .then(() => {
        // TWO OPTIONS:
        //  make another GET request to refresh the page <-- DO THIS! 
        // loadTasks();

        // update the tasks state to refresh the page
        const newTasksArray = [...tasks];
        newTasksArray.push(newTaskInfo);
        setTasks(newTasksArray)

      })
      .catch((error) => {
        console.log(error);
      });
  } 
  // pick up here, refer to this: https://github.com/Ada-C19/sapphire-flasky-frontend/commit/1e41a759daa93e96aa69219e6037c9d7933b1e83
  return (
    <div className="App">
    <header className="App-header">
      <h1>Ada&apos;s Task List</h1>
      <NewTaskForm createNewTask={createNewTask}/>
    </header>
    <main>
      <div>
        <TaskList 
        tasks={tasks} 
        updateComplete={toggleCompleteTask}
        updateDelete={deleteTask}/>
      </div>
    </main>
  </div>
  );
}

export default App;


// JSX was this
// {<TaskList 
//   tasks={tasks} 
//   onUpdateTaskStatus={toggleCompleteTask}
//   onDelete={deleteTask}/>}