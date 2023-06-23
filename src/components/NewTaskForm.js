import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewTaskForm.css";

// ************************************************* 
// PICKUP HERE: we are passing in this empty data on like 33 
// need the keys to match so the values get updated 
const INITIAL_FORM_DATA = { 
	"title": "", 
	"completed_at": null, 
	"description": "" };

function NewTaskForm(props) {
  const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_DATA);

  const anInputChanged = (evt) => {
    // console.log(evt);

    if (evt.target.name === "age" && evt.target.value < 0) {
      return
    }

    const newTaskFormData = {
      ...taskFormData,
      [evt.target.name]: evt.target.value
    };

    setTaskFormData(newTaskFormData);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.createNewTask(taskFormData);
    setTaskFormData(INITIAL_FORM_DATA);
  }

  return (
    <section className="TaskList">
      <h2>Create New Task</h2>
      <form className="stack" onSubmit={handleFormSubmit}>
        <label htmlFor="taskName">Name:</label>
        <input
          title="taskName"
          id=""
          type="text"
          value={ taskFormData.name }
          onChange={ anInputChanged }
        />
        <label htmlFor="description">Description:</label>
        <input
          title="description"
          id=""
          type="text"
          value={ taskFormData.description }
          onChange={ anInputChanged }
        /> 


        <input type="submit" value="Add new task"></input>
      </form>
    </section>
  )
}

NewTaskForm.propTypes = {
  createNewTask: PropTypes.func.isRequired
}

export default NewTaskForm;











