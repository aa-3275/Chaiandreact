import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/home/Home.jsx";
import Abouts from "./components/about/Abouts.jsx";
import Contacts from "./components/contact/Contact.jsx";
import User from "./components/users/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about",
        element: (
          <div>
            <Abouts />
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div>
            <Contacts />
          </div>
        ),
      },
      {
        path: "user/:userid",
        element: (
          <div>
            <User />
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
