import TodoItem from "./TodoItem";
import { useState, useContext, useEffect } from "react";
import "./TodosList.css";
import { TodoListContext } from "./TodoListProvider";

const TodoList = (props) => {
  const { todos, modifyParams, parameters } = useContext(TodoListContext);
  const [sortBy, setSortBy] = useState("DEFAULT");
  const [sortByPriority, setSortByPriority] = useState(false);
  const [sortByDueDate, setSortByDueDate] = useState(false);

  const priorityHandler = () => {
    setSortByPriority((prev) => !prev);
    if (!sortByPriority && !sortByDueDate) {
      setSortBy("PRIORITY");
    }
    if (sortByPriority && sortByDueDate) {
      setSortBy("DUE_DATE");
    }

    if (sortByPriority && !sortByDueDate) {
      setSortBy("DEFAULT");
    }

    if (!sortByPriority && sortByDueDate) {
      setSortBy("BOTH_DUE_DATE_FIRST");
    }
  };

  const dueDateHandler = () => {
    setSortByDueDate((prev) => !prev);
    if (!sortByPriority && !sortByDueDate) {
      setSortBy("DUE_DATE");
    }
    if (sortByPriority && sortByDueDate) {
      setSortBy("PRIORITY");
    }

    if (sortByPriority && !sortByDueDate) {
      setSortBy("BOTH_PRIORITY_FIRST");
    }

    if (!sortByPriority && sortByDueDate) {
      setSortBy("DEFAULT");
    }
  };

  useEffect(() => {
    modifyParams({ ...parameters, sortBy: sortBy });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <div className="todos-list">
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th className="todos-list__name">Name</th>
            <th className="todos-list__priority" onClick={priorityHandler}>
              Priority {sortByPriority && String.fromCharCode(8595)}
            </th>

            <th className="todos-list__due-date" onClick={dueDateHandler}>
              Due Date {sortByDueDate && String.fromCharCode(8595)}
            </th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem) => {
            return <TodoItem todo={{ ...todoItem }} key={todoItem.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
