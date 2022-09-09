import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import "./TodosList.css";

const TodoList = (props) => {
  const deleteTodo = (id) => {};

  return (
    <table className="todos-list">
      <thead>
        <tr>
          <th>Done</th>
          <th>Name</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Actions </th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todoItem) => {
          return (
            <TodoItem
              todo={{ ...todoItem }}
              deleteTodo={deleteTodo}
              key={todoItem.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
