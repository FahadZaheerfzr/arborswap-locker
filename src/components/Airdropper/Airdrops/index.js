import React from 'react'
import { Link } from 'react-router-dom'
import { Airdrops } from '../../../data/airdrops'
import Timer from '../../Launchpad/Pools/Subcomponents/Timer'

export default function AirdropsBase({ activeStatus }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {Airdrops.map(
                (airdrop) =>
                    airdrop.status === activeStatus && (
                        <Link to={`/airdropper/airdrops/${airdrop.id}`} key={airdrop.id}>
                            <div className="flex flex-col">
                                <div className={`bg-white dark:bg-dark-1 p-6 ${airdrop.status === "Timed" ? "rounded-t-md" : "rounded-md"}`}>
                                    <div className="flex items-center">
                                        <img src={airdrop.icon} alt={airdrop.name} className="w-[54px] h-[54px]" />

                                        <div className=" ml-4">
                                            <div className="flex items-center">
                                                <h3 className=" font-semibold text-dark-text dark:text-light-text">{airdrop.name}</h3>
                                            </div>

                                            <div className="flex items-center mt-2">
                                                {airdrop.tags.map((tag) => (
                                                    <div
                                                        key={tag.id}
                                                        className="bg-[#F5F1EB] dark:bg-dark-3 mr-[6px] py-[2px] px-[10px] rounded text-xs text-gray dark:text-gray-dark font-medium"
                                                    >
                                                        {tag.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-8">
                                        <span className="text-sm font-medium text-gray dark:text-gray-dark">Amount</span>

                                        <div className="flex items-center">
                                            <img src={airdrop.icon} alt="soft-icon" className="w-[18px] h-[18px]" />

                                            <span className="ml-2 font-bold text-dark-text dark:text-light-text">
                                                {airdrop.amount.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-xs  text-gray dark:text-gray-dark">
                                            Remaining
                                        </span>

                                        <span className="text-xs  text-dim-text dark:text-dim-text-dark">
                                            {airdrop.amount} {airdrop.symbol}
                                        </span>
                                    </div>

                                    <div className="w-full bg-[#F5F1EB] dark:bg-dark-3 rounded-[5px] h-[18px] mt-[6px]">
                                        <div
                                            className={`h-18px ${airdrop.status === "Ended" ? "filled-ended" : "filled"}  rounded-[5px] pr-2 flex justify-end items-center text-xs text-white`}
                                            style={{ width: `${airdrop.filled_percent}%` }}
                                        >
                                            {airdrop.filled_percent}%
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex flex-col items-center justify-between">
                                            <span className="text-xs font-medium text-gray dark:text-gray-dark">Selected Addr.</span>
                                            <span className="text-dark-text dark:text-light-text font-semibold">
                                                {airdrop.selected_addr.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex flex-col justify-between items-center">
                                            <span className="text-xs font-medium text-gray dark:text-gray-dark">Participants</span>

                                            <span className="text-dark-text dark:text-light-text font-semibold">
                                                {airdrop.participants.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {airdrop.status === 'Timed' &&
                                    <div className="bg-[#C89211] bg-opacity-[0.08] py-2 px-6 rounded-b-[20px] flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray dark:text-gray-dark">Ends in</span>
                                        <Timer time={airdrop.ends_on} />
                                    </div>
                                }
                            </div>
                        </Link>
                    ),
            )}
        </div>
    )
}
