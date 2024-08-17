import { Task } from "../../interfaces/task";
import "./styles/task-item.css";

export default function TaskItem({ title, completed }: Task) {
  return (
    <div className="task-item">
      <h3>{title}</h3>

      <div className="task-actions">
        <p>{completed ? "Completed" : "Not Completed"}</p>
        <button className="btn btn-outline-success">Edit</button>
      </div>
    </div>
  );
}
