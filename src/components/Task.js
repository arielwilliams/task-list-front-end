import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
// const { id, title, isComplete } = props  

  const toggleDelete = () => {
    props.updateDelete(props.id);
  };

  const toggleComplete = () => {
    props.updateComplete(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={toggleDelete}>
        x
      </button>
    </li>
  );
};
 
Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  updateDelete: PropTypes.func.isRequired,
};

export default Task;