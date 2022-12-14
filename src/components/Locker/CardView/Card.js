import React from 'react'
import CardInfo from './CardInfo'
import Timer from './Timer'

export default function Card({ name1, name2, icon1, icon2, amount, amountUSD, unlock_date, token }) {
    return (
        <div className='rounded-[20px] bg-white'>
            <div className='px-6'>
                <div className='flex justify-between items-center border-b border-dim-text border-dashed border-opacity-30 mt-3 py-5'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img className='w-9 h-9' src={icon1} alt={name1} />
                            {!token &&
                                <img className='relative -left-5 w-9 h-9' src={icon2} alt={name2} />
                            }
                        </div>

                        <div className={`flex flex-col justify-center font-bold font-gilroy text-dark-text ${token ? "ml-[10px]" : "ml-0"}`}>
                            <span>
                                {name1}{!token && `/${name2}`}
                            </span>
                            <span className='text-xs font-medium text-dim-text'>
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

            <div className='bg-[#FAF8F5] p-7 '>
                <div className='flex justify-between items-center'>
                    <span className='font-medium text-xs text-gray'>
                        Unlocks In
                    </span>

                    <Timer date={unlock_date} />
                </div>
            </div>
        </div>
    )
}
