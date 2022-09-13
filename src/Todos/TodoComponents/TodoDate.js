import "./TodoDate.css";

function TodoDate(props) {
  if (props.date == null) return <div className="todo-date">-</div>;

  const date = new Date(props.date);
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "numeric" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="todo-date">
      {day}/{month}/{year}
    </div>
  );
}

export default TodoDate;
