import React from 'react'
import { useRoutes } from 'react-router-dom'
import Error from '../pages/Error'
import LockedAsset from '../pages/LockedAsset'
import Locker from '../pages/Locker'
import LpLocker from '../pages/LpLocker'
import TokenLocker from '../pages/TokenLocker'

export default function WebRouter() {
  let routes = useRoutes([
    { path: '/', element: <Locker /> },
    { path: '/locked-assets/:id', element: <LockedAsset />},
    { path: '/locker/token-locker', element: <TokenLocker />},
    { path: '/locker/lp-locker', element: <LpLocker />},
    { path: '*', element: <Error /> },
  ])
  return routes
}
