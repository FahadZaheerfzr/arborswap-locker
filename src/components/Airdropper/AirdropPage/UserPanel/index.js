import React from 'react'
import Timer from '../../../LockedAsset/Amount/Timer/Timer';

export default function UserPanel({ amount, icon, min_allocation, filled_percent, ends_on, status, whitelist_address, whitelisted }) {

    return (
        <div className="p-9 bg-white dark:bg-dark-1 rounded-[20px]">
            <div className="w-full flex justify-between">
                <span className="text-gray dark:text-gray-dark text-sm font-medium">Amount</span>
            </div>

            <div className="mt-3 flex">
                <img src={icon} alt="hard-cap-currency" className="w-7 h-7" />

                <div className="ml-3">
                    <span className="text-dark-text dark:text-light-text text-2xl font-bold">{amount.toLocaleString()}</span>
                </div>
            </div>

            <div className="mt-7 flex justify-between">
                <span className='font-medium text-sm text-gray dark:text-gray-dark'>
                    Your Allocation
                </span>
                <span className='font-bold text-sm text-dark-text dark:text-light-text'>
                    {min_allocation.toLocaleString()} RBA
                </span>
            </div>

            <div className="mt-5 flex justify-between">
                <span className='font-medium text-sm text-gray dark:text-gray-dark'>
                    Whitelisted address
                </span>
                <span className='font-bold text-sm text-dark-text dark:text-light-text'>
                    {whitelist_address.toLocaleString()}
                </span>
            </div>

            <div className="flex items-center justify-between mt-5">
                <span className="text-xs  text-gray dark:text-gray-dark">
                    Remaining
                </span>

                <span className="text-xs  text-dim-text dark:text-dim-text-dark">
                    {`${amount} `}
                </span>
            </div>

            <div className="w-full bg-[#F5F1EB] dark:bg-dark-3 rounded-[5px] h-[18px] mt-[6px]">
                <div
                    className={`h-18px filled rounded-[5px] pr-2 flex justify-end items-center text-xs text-white`}
                    style={{ width: `${filled_percent}%` }}
                >
                    {filled_percent}%
                </div>
            </div>

            
            <div className="flex flex-col mt-10">
                {!whitelisted && <span className="text-sm font-medium mb-5 text-[red] text-center">Your Wallet is not Whitelisted</span>}
                <button className={`w-full ${whitelisted ? "bg-primary-green" : "bg-primary-green bg-opacity-50 dark:bg-dim-text-dark"} rounded-md text-white font-bold py-4`}>
                    Claim Airdrop
                </button>
            </div>

            {
                status === "Timed" && <div>
       <div className="flex justify-center mt-7">
                <span className="text-sm font-medium text-gray dark:text-gray-dark">
                    Airdrop Ends In
                </span>
            </div>
            
            <Timer date={ends_on} />
                </div>
            }
     
        </div>
    )
}
