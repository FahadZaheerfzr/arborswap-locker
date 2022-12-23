import React from 'react'
import DisconnectSVG from 'svgs/Topbar/Disconnect'

export default function Dropdown({setHover}) {
  return (
    <div className='absolute w-[250px] mt-14 rounded-md border border-[#e7e3ff] dark:border-dim-text-dark bg-white dark:bg-dark-1'
    onMouseEnter={()=>setHover(true)}>
        <div className='flex items-center cursor-pointer justify-between border border-gray dark:border-gray-dark border-opacity-20 px-4 py-4'>
          <span className='font-medium text-gray dark:text-gray-dark'>
            Wallet
          </span>

          <img src="/images/topbar/warning.svg" alt="warning" />
        </div>
        
        <div className='flex items-center cursor-pointer justify-between border border-gray dark:border-gray-dark border-opacity-20 px-4 py-4'>
          <span className='font-medium text-gray dark:text-gray-dark'>
            Transactions
          </span>
        </div>
        <div className='flex items-center cursor-pointer justify-between border border-gray dark:border-gray-dark border-opacity-20 px-4 py-4'>
          <span className='font-medium text-gray dark:text-gray-dark'>
            Make a Profile
          </span>

          <div className='rounded-full w-2 h-2 bg-[#e56060]' />
        </div>
        <div className='flex items-center cursor-pointer justify-between border border-gray dark:border-gray-dark border-opacity-20 px-4 py-4'>
          <span className='font-medium text-gray dark:text-gray-dark'>
            Disconnect
          </span>

          <DisconnectSVG className='fill-dark-text dark:fill-light-text' />
        </div>
    </div>
  )
}
