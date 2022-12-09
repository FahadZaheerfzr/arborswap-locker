import React from 'react'
import { useRoutes } from "react-router-dom";
import Error from '../pages/Error';
import HomePage from '../pages/HomePage';



export default function WebRouter() {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <Error /> },
  ]);
  return routes;
}
