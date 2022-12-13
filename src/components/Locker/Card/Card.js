import React from 'react'

export default function Card({ card }) {
    return (
        <div className='rounded-[20px] bg-white'>
            <div className='px-6 py-5 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='flex'>
                        <img src={card.icon1} alt={card.name1} />
                        <img src={card.icon2} alt={card.name2} />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
