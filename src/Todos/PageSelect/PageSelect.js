import "./PageSelect.css";
import { useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const PageSelect = () => {
  const { size, parameters, modifyParams } = useContext(TodoListContext);

  const pageChange = (event) => {
    modifyParams({ ...parameters, page: event.target.value });
  };

  return (
    <div className="page-select">
      <input
        type="number"
        min="1"
        max={size / 10 + 1}
        defaultValue={1}
        onChange={pageChange}
      ></input>
    </div>
  );
};
