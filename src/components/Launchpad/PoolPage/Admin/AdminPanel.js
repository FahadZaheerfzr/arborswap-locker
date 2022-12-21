import React from 'react'
import PreviewDetails from '../../../Common/PreviewDetails';

export default function AdminPanel({ icon }) {

    return (
        <div className="hidden md:block px-9 pb-9 bg-white dark:bg-dark-1 rounded-[20px]">
            <div className="w-full flex justify-center">
                <div className='w-1/2 py-5 flex justify-center items-center border-b-2 border-primary-green '>
                    <span className='font-bold text-primary-green'>
                        Admin Panel
                    </span>
                </div>
            </div>

            <div className="w-full flex justify-between mt-7">
                <span className="text-gray dark:text-gray-dark text-sm font-medium">Soft/Hard Cap</span>

                <div className="bg-[#C89211] bg-opacity-[0.08] px-3 py-[3px] rounded-[10px] border-[0.5px] border-dashed border-[#C89211]">
                    <span className="rounded-[10px] text-[#C89211]">Upcoming</span>
                </div>
            </div>

            <div className="w-full flex mt-3">
                <img src={icon} alt="pool-icon" className='w-7 h-7 mr-2' />
                <span className='font-bold text-dark-text dark:text-light-text text-2xl'>
                    2,000 - 10,000
                </span>
            </div>

            <PreviewDetails name={"Address Whitelisted"} value={"1,874"} />

            <div className="mt-7">
                <button className="w-full bg-light dark:bg-dark rounded-md text-dark-text dark:text-light-text font-bold py-4">
                Manage Address
                </button>
            </div>
        </div>
    )
}
