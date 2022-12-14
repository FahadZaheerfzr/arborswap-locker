import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Styles from './BaseLayout.module.css'

import { SidebarContext } from '../../context/SidebarContext/GlobalProvider'
import { useActiveItem } from '../../hooks/setActiveItem'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider'
import Topbar from '../Topbar/Topbar'

export default function BaseLayout({ children, noTopbar, noSidebar, title, title_img }) {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const [sideBarMobile, setSideBarMobile] = useState(false)
  const [tempfixed, setTempFixed] = useState(true)
  const [activeItem] = useActiveItem()

  const handleTempFixed = () => {
    setTheme(!tempfixed ? 'light' : 'dark')
    setTempFixed(!tempfixed)
  }

  const hideSidebar = () => {
    if (sideBarMobile) {
      setSideBarMobile(false)
    }
  }

  useEffect(() => {
    if (theme === 'dark') {
      setTempFixed(false)
    }
  }, [theme])

  return (
    <div className="w-full ">
      <div className={`flex w-full ${noTopbar ? '' : ''}`}>
        {noSidebar ? null : (
          <div
            className={`${sideBarMobile ? 'block' : 'hidden'
              } md:hidden w-[240px] h-screen bg-white absolute dark:bg-dark-1 z-20`}
          >
            <Sidebar
              fullSidebar={true}
              tempfixed={tempfixed}
              handleTempFixed={handleTempFixed}
              activeLink={activeItem}
            />
          </div>
        )}
        {noSidebar ? null : (
          <div
            className={`hidden md:flex w-[270px] bg-white dark:bg-dark-1 ${Styles.sideBar
              } ease-in-out duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-[170px]'}`}
          >
            <Sidebar
              fullSidebar={showSidebar}
              tempfixed={tempfixed}
              handleTempFixed={handleTempFixed}
              activeLink={activeItem}
            />

            <div className="absolute z-30 ml-[90%] mt-32">
              <div
                className="h-12 w-12 bg-white dark:bg-dark-1 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <img className={`${showSidebar ? "" : "rotate-180"}`} src="/images/sidebar/arrow-left.svg" alt="arrow-left" />
              </div>
            </div>
          </div>
        )}

        <div
          className={`w-full dark:bg-dark md:w-[calc(100%-270px)] md:ml-[270px] ease-in-out duration-300 ${showSidebar ? ' translate-x-0' : '-translate-x-[100px]'
            }`}
        >
          {noTopbar ? null : (
            <div className={`${Styles.topBar} w-full`}>
              <Topbar setSideBarMobile={setSideBarMobile} sideBarMobile={sideBarMobile} activeLink={activeItem} title={title} title_img={title_img} />
            </div>
          )}
          <div className='pb-10 mt-[130px] font-gilroy' onClick={hideSidebar}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
