import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
