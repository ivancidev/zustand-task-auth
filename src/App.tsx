import Login from "./pages/Login/Login";
import "./App.css";
import Register from "./pages/Register/register";
import TaskManager from "./pages/task-manager/task-manager";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task-manager",
    element: <TaskManager />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
