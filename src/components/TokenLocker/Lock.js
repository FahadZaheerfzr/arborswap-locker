import React, { useState } from 'react'
import LockDetails from './LockDetails'

const panel_items = [
    {
        id: 1,
        name: 'Lock details',
    },
    {
        id: 2,
        name: 'Preview',
    },
]


export default function Lock({setPage}) {
    const [active, setActive] = useState('Lock details')
    return (
        <div className="flex bg-light-gray-shade dark:bg-dark-background flex-col md:flex-row w-full">
            <div className="panel flex py-4 md:py-0 justify-around md:block md:pl-9 md:pr-[5%] rounded-l-[10px] bg-[#FAF8F5] dark:bg-dark-2">
                {panel_items.map((item) => (
                    <div key={item.id} className={`panel-item md:mt-9 flex items-center`}>
                        {item.name === active && <div className={`w-2 h-2 rounded-full bg-primary-green absolute`} />}
                        <span className={`text-sm font-gilroy font-semibold ml-[18px] ${active === item.name
                                ? 'text-dark-text dark:text-light-text'
                                : 'text-dim-text dark:text-dim-text-dark'}`} >
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>

            <div className="panel-content bg-white dark:bg-black-shade2-background rounded-r-[10px] px-4 md:p-9 md:w-2/3">
                {active === 'Lock details' && (
                    <LockDetails setActive={setActive} setPage={setPage} />
                )}
            </div>
        </div>
    )
}
