import Login from "./pages/Login/Login";
import "./App.css";
import Register from "./pages/Register/register";
import TaskManager from "./pages/task-manager/task-manager";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/protected--route/protected-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task-manager",
    element: (
      <ProtectedRoute>
        <TaskManager />
      </ProtectedRoute>
  ),
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
