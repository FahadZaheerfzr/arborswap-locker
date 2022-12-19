import React from 'react'
import { useRoutes } from 'react-router-dom'
import Error from '../pages/Error'
import CreateSale from '../pages/Launchpad/CreateSale'
import PoolPage from '../pages/Launchpad/PoolPage'
import Pools from '../pages/Launchpad/Pools'
import LockedAsset from '../pages/Locker/LockedAsset'
import Locker from '../pages/Locker/Locker'
import LpLocker from '../pages/Locker/LpLocker'
import TokenLocker from '../pages/Locker/TokenLocker'

export default function WebRouter() {
  let routes = useRoutes([
    { path: '/', element: <Locker /> },
    { path: '/locked-assets/:id', element: <LockedAsset /> },
    { path: '/locker/token-locker', element: <TokenLocker /> },
    { path: '/locker/lp-locker', element: <LpLocker /> },
    { path: '/launchpad/pools', element: <Pools /> },
    { path: '/launchpad/pools/:id', element: <PoolPage /> },
    { path: '/launchpad/create-sale', element: <CreateSale /> },
    { path: '*', element: <Error /> },
  ])
  return routes
}
