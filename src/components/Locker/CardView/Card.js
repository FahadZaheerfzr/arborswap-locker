import React from 'react'
import CardInfo from './CardInfo'
import Timer from './Timer'

export default function Card({ name1, name2, icon1, icon2, amount, amountUSD, unlock_date, token }) {
    return (
        <div className='rounded-[20px] bg-white dark:bg-dark-1'>
            <div className='px-6'>
                <div className='flex justify-between items-center border-b border-dim-text dark:border-dim-text-dark border-dashed border-opacity-30 mt-3 py-5'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img className='w-9 h-9' src={icon1} alt={name1} />
                            {!token &&
                                <img className='relative -left-5 w-9 h-9' src={icon2} alt={name2} />
                            }
                        </div>

                        <div className={`flex flex-col justify-center font-bold font-gilroy text-dark-text dark:text-light-text ${token ? "ml-[10px]" : "ml-0"}`}>
                            <span>
                                {name1}{!token && `/${name2}`}
                            </span>
                            <span className='text-xs font-medium text-dim-text dark:text-dim-text-dark'>
                                {token}
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <span className='flex items-center font-medium text-sm font-gilroy text-primary-green '>
                            View
                        </span>
                        <img className='rotate-180' src='/images/sidebar/arrow-left.svg' alt='arrow-right' />
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <CardInfo heading={"Amount"} value={amount.toLocaleString()} />
                    <CardInfo heading={"Amount ($)"} value={amountUSD.toLocaleString()} />
                    <CardInfo heading={"Unlock date"} value={unlock_date} />
                </div>

            </div>

            <div className='bg-[#FAF8F5] dark:bg-dark-2 rounded-b-[20px] py-5 px-7 mt-5 '>
                <div className='flex justify-between items-center'>
                    <span className='font-medium text-xs text-gray dark:text-gray-dark'>
                        Unlocks In
                    </span>

                    <Timer date={unlock_date} />
                </div>
            </div>
        </div>
    )
}
