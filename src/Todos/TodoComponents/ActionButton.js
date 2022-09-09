import { useState } from "react";

import Modal from "react-modal";

import "./ActionForm.css";

Modal.setAppElement("#root");

export const ActionButton = (props) => {
  const todo = props.todo;
  const priorities = ["LOW", "MEDIUM", "HIGH"];

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(todo.name);
  const [priority, setPriority] = useState(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);

  const editModal = () => {
    setIsOpen((prevOpen) => !prevOpen);
    console.log(todo);
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const priorityChange = (event) => {
    setPriority(event.target.value);
  };

  const dueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    editModal();
    const newTodo = {
      ...todo,
      name: name,
      priority: priority,
      dueDate: dueDate,
    };

    props.updateTodo(newTodo);
  };

  return (
    <div>
      <button onClick={editModal}>Edit</button>
      <button onClick={props.deleteTodo}>Delete</button>

      <Modal className="action-form" isOpen={isOpen} onRequestClose={editModal}>
        <form onSubmit={submitHandler} className="action-input">
          <h1>Edit To-do</h1>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={nameChange} />
          </div>
          <div>
            <label>Priority</label>
            <select value={priority} onChange={priorityChange}>
              <option value={priorities[0]}>LOW</option>
              <option value={priorities[1]}>MEDIUM</option>
              <option value={priorities[2]}>HIGH</option>
            </select>
          </div>

          <div>
            <label>Due Date</label>
            <input type="date" value={dueDate} onChange={dueDateChange} />
          </div>

          <button onClick={editModal}>Cancel</button>
          <button type="submit">Accept</button>
        </form>
      </Modal>
    </div>
  );
};
