import "./MetricsByPriority.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const MetricsByPriority = () => {
  const { fetchAvgTime, avg, todos } = useContext(TodoListContext);
  const [timeLow, setTimeLow] = useState("-");
  const [timeMedium, setTimeMedium] = useState("-");
  const [timeHigh, setTimeHigh] = useState("-");

  useEffect(() => {
    fetchAvgTime();
  }, [todos]);

  useEffect(() => {
    if (avg.timeForLow > 0) setTimeLow(Math.round(avg.timeForLow / 60));
    else setTimeLow("-");
    if (avg.timeForMedium > 0)
      setTimeMedium(Math.round(avg.timeForMedium / 60));
    else setTimeMedium("-");
    if (avg.timeForHigh > 0) setTimeHigh(Math.round(avg.timeForHigh / 60));
    else setTimeHigh("-");
  }, [avg]);

  return (
    <div className="metrics-by-priority ">
      <label>Average time to finish tasks by priority:</label>
      <label>Low: {timeLow} Minutes</label>
      <label>Medium: {timeMedium} Minutes</label>
      <label>High: {timeHigh} Minutes</label>
    </div>
  );
};
