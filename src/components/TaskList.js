import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
    })
  ),
  toggleCompleteTask:PropTypes.func, 
  deleteTask:PropTypes.func
};

export default TaskList;


// AnimalList.propTypes = {
//   listOfAnimals: PropTypes.arrayOf(
//       PropTypes.shape({
//           name: PropTypes.string,
//           id: PropTypes.number.isRequired,
//           species: PropTypes.string.isRequired,
//           adopted: PropTypes.bool,
//           age: PropTypes.number,
//           photo: PropTypes.string,
//           isBookmarked: PropTypes.bool
//       })
//   ), 
//   updateBookmark: PropTypes.func,
//   updateDelete: PropTypes.func
// }

// export default AnimalList;
