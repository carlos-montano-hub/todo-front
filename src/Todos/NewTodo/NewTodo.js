import "./NewTodo.css";

import Modal from "react-modal";
import { useContext, useState } from "react";

import { TodoListContext } from "../TodoListProvider";

Modal.setAppElement("#root");

export const NewTodo = () => {
  const { priorities, postTodo } = useContext(TodoListContext);

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("LOW");
  const [dueDate, setDueDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const newTodoModal = () => {
    setIsOpen((prevOpen) => !prevOpen);
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

    if (name === "") return;

    newTodoModal();

    const newTodo = {
      id: null,
      name: name,
      priority: priority,
      dueDate: dueDate,
      done: false,
      createDate: null,
      doneDate: null,
      timeToComplete: null,
    };
    console.log(newTodo);

    postTodo(newTodo);
  };

  return (
    <div className="new-todo">
      <button onClick={newTodoModal}>+ New Todo</button>

      <Modal
        className="new-todo__Modal"
        isOpen={isOpen}
        onRequestClose={newTodoModal}
      >
        <form onSubmit={submitHandler}>
          <h1>New To-do</h1>
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

          <button onClick={newTodoModal}>Cancel</button>
          <button type="submit">Accept</button>
        </form>
      </Modal>
    </div>
  );
};
