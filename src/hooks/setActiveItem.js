import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sitemap } from '../data/sitemap'

const useActiveItem = (pathname) => {
  const [activeItem, setActiveItem] = useState(null)
  const location = useLocation()

  useEffect(() => {
    sitemap.map((nav_item) => {
      if (nav_item.link === location.pathname) setActiveItem(nav_item.name)
      else if (nav_item.sublinks.includes(location.pathname)) setActiveItem(nav_item.name)
      else setActiveItem(location.pathname.split('/')[1].split('-').join(' '))
      return [activeItem, setActiveItem]
    })
  })

  return [activeItem, setActiveItem]
}

export { useActiveItem }
