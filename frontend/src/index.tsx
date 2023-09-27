import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import ActivityView from "./views/ActivityView";
import RegisterView from "./views/RegisterView";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
    <GoogleOAuthProvider clientId="885320998423-n5n42iplf2lmnt7059v7j588dtu946rg.apps.googleusercontent.com">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </GoogleOAuthProvider>
);
