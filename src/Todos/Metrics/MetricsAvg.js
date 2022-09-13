import "./MetricsAvg.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const MetricsAvg = () => {
  const { avg } = useContext(TodoListContext);
  const [time, setTime] = useState("-");

  useEffect(() => {
    if (avg.timeForAll > 0) setTime(Math.round(avg.timeForAll / 60));
    else setTime("-");
  }, [avg]);

  return (
    <div className="metrics-avg">
      <label>Average Time to finish Tasks</label>
      <label>{time} Minutes</label>
    </div>
  );
};
