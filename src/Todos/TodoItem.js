import "./TodoItem.css";
import { useState } from "react";
import TodoDate from "./TodoComponents/TodoDate";
import { ActionButton } from "./TodoComponents/ActionButton";

import { useEffect, useContext } from "react";

import { TodoListContext } from "./TodoListProvider";

const TodoItem = (props) => {
  const [done, setDone] = useState(props.todo.done);
  const [name, setName] = useState(props.todo.name);
  const [priority, setPriority] = useState(props.todo.priority);
  const [dueDate, setDueDate] = useState(props.todo.dueDate);

  const { fetchAvgTime, putTodo } = useContext(TodoListContext);

  const doneHandler = () => {
    setDone((prevDone) => {
      if (!prevDone) {
        fetch("http://localhost:9090/todos/" + props.todo.id + "/done", {
          method: "PUT",
        });
      } else {
        fetch("http://localhost:9090/todos/" + props.todo.id + "/undone", {
          method: "PUT",
        });
      }
      return !prevDone;
    });

    fetchAvgTime();
    fetchAvgTime();
  };

  const updateTodo = (newTodo) => {
    console.log(newTodo);
    setName(newTodo.name);
    setPriority(newTodo.priority);
    setDueDate(newTodo.dueDate);
    putTodo(newTodo);
  };

  return (
    <tr className="todo-item">
      <td>
        <input type="checkbox" checked={done} onChange={doneHandler}></input>
      </td>
      <td>{name}</td>
      <td>{priority}</td>
      <td>
        <TodoDate date={dueDate}></TodoDate>
      </td>
      <td>
        <ActionButton
          todo={{ ...props.todo }}
          updateTodo={updateTodo}
          deleteTodo={props.deleteTodo}
        ></ActionButton>
      </td>
    </tr>
  );
};

export default TodoItem;
