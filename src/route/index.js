import React from 'react'
import { useRoutes } from 'react-router-dom'
import Error from '../pages/Error'
import LockedAsset from '../pages/LockedAsset'
import Locker from '../pages/Locker'

export default function WebRouter() {
  let routes = useRoutes([
    { path: '/', element: <Locker /> },
    { path: '/locked-assets/:id', element: <LockedAsset />},
    { path: '*', element: <Error /> },
  ])
  return routes
}
