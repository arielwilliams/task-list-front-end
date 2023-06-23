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
      <button className="tasks__item__remove button" onClick={toggleDelete} data-testid={`delete button ${props.id}`}>
        x
      </button>
    </li>
  );
};

// how I passed test('Runs callbacks when buttons clicked') for wave 2
// needed specific testid and updated props names in tests for updateComplete and updateDelete
// getByTestId is a func in react test library

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  updateComplete: PropTypes.func,
  updateDelete: PropTypes.func
};

export default Task;


// needs { title: titleText, completed_at: (date or null), : description: '' }