import TodoItem from "./TodoItem";
import { useState, useEffect, useContext } from "react";
import "./TodosList.css";
import { TodoListContext } from "./TodoListProvider";

const TodoList = (props) => {
  const { todos, fetchTodoList } = useContext(TodoListContext);

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
        {todos.map((todoItem) => {
          return (
            <TodoItem
              todo={{ ...todoItem }}
              // deleteTodo={null}
              key={todoItem.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
