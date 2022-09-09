import { MetricsAvg } from "./MetricsAvg";
import { MetricsByPriority } from "./MetricsByPriority";
import "./Metrics.css";

export const Metrics = () => {
  return (
    <div className="metrics">
      <MetricsAvg></MetricsAvg>
      <MetricsByPriority></MetricsByPriority>
    </div>
  );
};
