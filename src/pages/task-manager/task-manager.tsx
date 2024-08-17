import React, { useState } from "react";
import "./styles/task.manager.css";
import { Task } from "../../interfaces/task";
import { useTaskStore } from "../../store/useTaskStore";
import { ListTasks } from "../../components/list-tasks/list-tasks";

export default function TaskManager() {
  const [title, setTitle] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      const task: Task = {
        index: Math.floor(Math.random() * 100),
        title: title.trim(),
        completed: check,
      };
      addTask(task);
      setCheck(false);
      setTitle("");
    }
  };

  return (
    <>
      <h1 className="text-white">Task Manager</h1>
      <form className="form-inline">
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Enter Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="inlineFormCheck">
            Completed
          </label>
        </div>
        <div className="div-btn">
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={(e) => handleSubmit(e)}
          >
            Add Task
          </button>
        </div>
      </form>
      <ListTasks />
    </>
  );
}
