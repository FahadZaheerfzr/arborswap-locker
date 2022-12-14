import React from 'react'

export default function LockOptions({ setLock, selected, name }) {
    return (
        <div
            className={`w-full rounded-[10px] px-5 py-5 ${selected
                ? ' border-2 border-[#C89211] border-opacity-50 '
                : 'border-dim-text border-opacity-50 border-[1.5px]'
                }`}
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col ml-4">
                        <div className="flex items-center gap-2">
                            <span className={`font-gilroy font-bold text-dark-text ${selected ? 'dark:text-light-text' : 'dark:text-gray-dark'}`}>
                                {name}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={`border-[1.5px] ${selected ? "border-[#C89211]" : "border-dim-text"} mt-4 md:mt-0 h-6 w-6 rounded-full flex justify-center items-center  border-opacity-50`}
                    onClick={() => setLock(name.toLowerCase())}>
                    {selected && <div className="h-3 w-3 rounded-full bg-[#C89211]"></div>}
                </div>
            </div>
        </div>
    )
}
