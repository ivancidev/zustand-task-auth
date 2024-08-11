import { create } from "zustand";
import { Task } from "../interfaces/task";

interface TaskState {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (index: number) => void;
    updateTask: (task: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({tasks: [...state.tasks, task]})),
    removeTask: (index) => set((state) => ({tasks: state.tasks.filter((task) => task.index !== index)})),
    updateTask: (task) => set((state) => ({tasks: state.tasks.map((t) => task.index === t.index ? task: t)}))
}))