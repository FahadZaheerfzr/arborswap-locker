import React from 'react'
import CardInfo from './CardInfo'
import Timer from './Timer'

export default function Card({ card }) {
    return (
        <div className='rounded-[20px] bg-white'>
            <div className='px-6'>
                <div className='flex justify-between items-center border-b border-dim-text border-dashed border-opacity-30 mt-3 py-5'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img src={card.icon1} alt={card.name1} />
                            <img className='relative -left-5' src={card.icon2} alt={card.name2} />
                        </div>

                        <div className='flex items-center font-bold font-gilroy text-dark-text '>
                            {card.name1}/{card.name2}
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
                    <CardInfo heading={"Amount"} value={card.amount.toLocaleString()} />
                    <CardInfo heading={"Amount ($)"} value={card.amountUSD.toLocaleString()} />
                    <CardInfo heading={"Unlock date"} value={card.unlock_date} />
                </div>

            </div>

            <div className='bg-[#FAF8F5] p-7 '>
                <div className='flex justify-between items-center'>
                    <span className='font-medium text-xs text-gray'>
                        Unlocks In
                    </span>

                    <Timer date={card.unlock_date} />
                </div>
            </div>
        </div>
    )
}
