import "./TodoItem.css";
import { useState } from "react";
import TodoDate from "./TodoComponents/TodoDate";
import { ActionButton } from "./TodoComponents/ActionButton";
import { useContext } from "react";

import { TodoListContext } from "./TodoListProvider";

const TodoItem = (props) => {
  const [done, setDone] = useState(props.todo.done);
  const name = props.todo.name;
  const priority = props.todo.priority;
  const dueDate = props.todo.dueDate;

  const { sendDone } = useContext(TodoListContext);

  const doneHandler = () => {
    setDone((isDone) => !isDone);
    sendDone(props.todo.id, !done);
  };

  return (
    <tr className="todo-item">
      <td>
        <input type="checkbox" checked={done} onChange={doneHandler}></input>
      </td>
      <td>
        <label>{name}</label>
      </td>
      <td>{priority}</td>
      <td>
        <TodoDate date={dueDate}></TodoDate>
      </td>
      <td>
        <ActionButton
          todo={{ ...props.todo }}
          deleteTodo={props.deleteTodo}
        ></ActionButton>
      </td>
    </tr>
  );
};

export default TodoItem;
