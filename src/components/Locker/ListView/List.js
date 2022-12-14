import React from 'react'
import ListInfo from './ListInfo'

export default function List({ icon1, icon2, name1, name2, token, amount, unlock_date }) {
    return (
        <div className='w-full flex items-center justify-between bg-white rounded-[10px] py-5 px-6'>
            <div className='flex items-center'>
                <img className='w-6 h-6' src={icon1} alt={name1} />
                {!token &&
                    <img className='relative -left-5 w-6 h-6' src={icon2} alt={name2} />
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

            
                <ListInfo heading={"Amount"} value={amount.toLocaleString()} />
                <ListInfo heading={"Unlocks on"} value={unlock_date} />



            <div className='flex items-center'>
                <img className='rotate-180' src='/images/sidebar/arrow-left.svg' alt='arrow-right' />
            </div>

            
        </div>
    )
}
