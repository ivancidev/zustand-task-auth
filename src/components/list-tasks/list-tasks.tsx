import { useTaskStore } from "../../store/useTaskStore";
import TaskItem from "../task-item/task-item";

export const ListTasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <>
      {tasks.length === 0 ? (
        <h3 className="text-white">No tasks available</h3>
      ) : (
        tasks.map((task) => (
          <TaskItem
            index={task.index}
            title={task.title}
            completed={task.completed}
          />
        ))
      )}
    </>
  );
};
