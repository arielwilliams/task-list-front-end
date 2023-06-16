import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete }) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
// const { id, title, isComplete } = props
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;


// return (
//   <section>
//     <h1>The Sapphire Animal Adoption Agency</h1>
//     <AnimalList 
//       listOfAnimals={animals} 
//       updateBookmark={updateBookmark} 
//       updateDelete={updateDelete}
//     ></AnimalList>
//   </section>
// );
// }