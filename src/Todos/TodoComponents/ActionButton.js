import { useState } from "react";

import Modal from "react-modal";

import "./ActionForm.css";

import { useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

Modal.setAppElement("#root");

export const ActionButton = (props) => {
  const { deleteTodoItem, priorities, putTodo } = useContext(TodoListContext);

  const todo = props.todo;

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(todo.name);
  const [priority, setPriority] = useState(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);

  const editModal = () => {
    if (dueDate === null) setDueDate("");

    setIsOpen((prevOpen) => !prevOpen);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setIsOpen(false);
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

  const submitHandler = async (event) => {
    event.preventDefault();
    editModal();

    const newTodo = {
      ...todo,
      name: name,
      priority: priority,
      dueDate: dueDate,
    };

    if (dueDate === "") {
      newTodo.dueDate = null;
    }

    putTodo(newTodo);
  };

  const deleteHandler = () => {
    deleteTodoItem(todo.id);
  };

  return (
    <div>
      <button onClick={editModal} style={{ background: "white" }}>
        Edit
      </button>
      <button onClick={deleteHandler} style={{ background: "white" }}>
        Delete
      </button>

      <Modal
        className="action-modal"
        isOpen={isOpen}
        onRequestClose={editModal}
      >
        <form onSubmit={submitHandler}>
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

          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Accept</button>
        </form>
      </Modal>
    </div>
  );
};
