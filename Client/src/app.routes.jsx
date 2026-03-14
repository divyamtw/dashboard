import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import {
  Dashboard,
  GitHub,
  Music,
  Pomodoro,
  Task,
  Calendar,
  Weather,
} from "./features/index.js";
import Profile from "./layout/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "github",
        element: <GitHub />,
      },
      {
        path: "pomodoro",
        element: <Pomodoro />,
      },
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "weather",
        element: <Weather />,
      },
    ],
  },
]);

export default router;
