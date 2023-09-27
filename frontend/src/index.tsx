import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import ActivityView from "./views/ActivityView";
import RegisterView from "./views/RegisterView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "/activity",
    element: <ActivityView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
