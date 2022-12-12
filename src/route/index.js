import React from 'react'
import { useRoutes } from "react-router-dom";
import Error from '../pages/Error';
import Locker from '../pages/Locker';



export default function WebRouter() {
  let routes = useRoutes([
    { path: "/", element: <Locker /> },
    { path: "*", element: <Error /> },
  ]);
  return routes;
}
