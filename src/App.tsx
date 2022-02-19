import { Table } from "antd";
import React from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";
import Dashboard from "./views/dashboard";
import About from "./views/sys/about";
import Tasks from "./views/tasks";
export default function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "tables",
          element: <Table />,
        },
        { path: "tasks", element: <Tasks /> },
      ],
    },
    { path: "team", element: <About /> },
  ]);

  return element;
}
