import React from 'react'
import NotificationSVG from '../../svgs/notification'

export default function Topbar({ setSideBarMobile, sideBarMobile, title, activeLink }) {
  return (
    <div className="h-[110px] flex items-center justify-between pl-[4%] pr-[5%] ">
      <div className="flex items-center">
        <div
          className="flex md:hidden flex-col h-10 w-10 bg-[#F5F6F7] dark:bg-dark hamburger justify-center items-center"
          onClick={() => setSideBarMobile(!sideBarMobile)}>
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'
              } h-0 w-5 border mb-1 border-dark-text dark:border-light-text`}
          />
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'
              } h-0 w-5 border mb-1 border-dark-text dark:border-light-text`}
          />
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'
              } h-0 w-5 border border-dark-text dark:border-light-text`}
          />
          <span className={`${sideBarMobile ? 'block' : 'hidden'} dark:text-light-text`}>&#x2715;</span>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='flex items-center'>
            <span className='font-gilroy font-bold text-gray dark:text-gray-dark text-3xl'>
              {title}
            </span>

            <img className='mx-2' src='/images/topbar/separator.svg' alt='separator' />

            <span className='font-gilroy font-medium text-primary-green text-2xl'>
              {activeLink}
            </span>
          </div>
          <div className='flex items-center'>
            <span className='font-gilroy font-medium text-dark dark:text-light'>
              Lock your assets for proof of lock.
            </span>
          </div>
        </div>



      </div>

      <div className="flex user-div">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F6F7] dark:bg-dark rounded-md flex items-center justify-center">
          <img className="md:hidden" src="/images/topbar/search.svg" alt="search" />
          <NotificationSVG className="hidden md:block fill-slate-700 dark:fill-white" />
        </div>

        <div className="flex md:hidden w-10 h-10 justify-center border-2 rounded-md border-primary-green border-opacity-50 items-center ml-4">
          <img src="/images/topbar/mobile/empty-wallet.svg" alt="empty-wallet" />
        </div>

        <div className="hidden md:flex border-2 rounded-md border-primary-green border-opacity-50 items-center justify-between ml-8">
          <img className="ml-5" src="/images/topbar/metamask.svg" alt="metamask" />

          <span className=" font-gilroy font-medium ml-2 dark:text-light">0xdd....ahs4</span>

          <div className="flex ml-3 mr-6">
            <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
            <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
            <div className="w-1 h-1 rounded-full bg-primary-green" />
          </div>
        </div>
      </div>
    </div>
  )
}
