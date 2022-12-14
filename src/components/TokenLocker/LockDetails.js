import React, { useState } from 'react'
import BackArrowSVG from '../../svgs/back_arrow'
import PreviewDetails from '../Common/PreviewDetails'
import PreviewHeader from '../Common/PreviewHeader'
import HeadingTags from './Subcomponents/HeadingTags'
import Datetime from 'react-datetime';
import CalendarSVG from '../../svgs/TokenLocker/calendar'

const LP_details = [
    {
        id: 1,
        name: "Quote Pair",
        value: "WBNB",
        icon: "/images/cards/bnb.svg"
    },
    {
        id: 2,
        name: "Base Pair",
        value: "SXP",
        icon: "/images/cards/rip.svg"
    },
    {
        id: 3,
        name: "Symbol",
        value: "WBNB/SXP",
    },
    {
        id: 4,
        name: "LP Supply",
        value: 9014470,
    },
    {
        id: 5,
        name: "Dex Listed",
        value: "Arborswap",
        icon: "/images/logo-small.svg",
    }
]

export default function LockDetails({ setActive, setPage }) {
    const [amount, setAmount] = useState(14774566);
    const [visible, setVisible] = useState(false)
    const [popup, showPopup] = useState(false);

    const handleAddress = (e) => {
        if (e.target.value.length > 5) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return (
        <div className={`w-full `}>
            {popup &&
                <div className='fixed z-50 md:-ml-[270px]   top-0 left-0'>
                    <div className="w-screen h-screen backdrop-blur-md flex justify-center items-center">
                        <div className='max-w-[400px] w-full rounded-[10px] bg-white'>
                            <div className='flex justify-between items-center px-5 py-4'>
                                <span className='text-dark-text dark:text-light-text font-gilroy font-semibold text-lg'>
                                    Add to Locker
                                </span>

                                <div className="flex items-center cursor-pointer" onClick={() => showPopup(false)}>
                                    <span className="text-sm font-gilroy font-semibold text-dark-text dark:text-dark-white-color mr-2">
                                        Close
                                    </span>
                                    <div className="flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]">
                                        &#10005;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div className={`w-full flex flex-col ${popup ? 'overflow-hidden h-[calc(100vh-210px)]' : ''}`}>
                <HeadingTags name={'LP Address'} required />

                <input
                    className="bg-transparent mt-5 w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-dim-text font-semibold text-dark-text dark:text-light-text focus:outline-none border-[1.5px] rounded-lg border-dim-text border-opacity-50"
                    type={'text'}
                    placeholder="0xc197033c129839ED4740c29919Bd88fD42bbde"
                    onChange={(e) => { handleAddress(e) }}
                />

                <PreviewHeader heading={"LP Details"} />

                {visible && (
                    <div className="flex flex-col">
                        {LP_details.map((item) => (
                            <PreviewDetails key={item.id} name={item.name} value={item.value} icon={item.icon} />
                        ))}
                    </div>)}

                <PreviewHeader heading={"More Details"} />


                <div className='flex items-center mt-9'>
                    <HeadingTags name={'Amount to be locked'} required />
                    <img src='/images/lists/question.svg' alt='info' className='ml-2' />
                </div>

                <div className='mt-5 flex items-center justify-between gap-5 cursor-pointer'>
                    <div className='flex items-center justify-between bg-[#FAF8F5] px-5 py-4 rounded-md w-[75%]'>
                        <span className='font-bold text-dark-text dark:text-light-text'>
                            {amount.toLocaleString()}
                        </span>

                        <span className='text-gray dark:text-gray-dark font-bold'>
                            {LP_details[2].value}
                        </span>
                    </div>

                    <button className='bg-primary-green bg-opacity-[0.08] font-bold text-primary-green py-4 w-[25%] rounded-md'>
                        Add
                    </button>
                </div>


                <div className='flex items-center mt-9'>
                    <HeadingTags name={'Unlock Date'} required />
                    <img src='/images/lists/question.svg' alt='info' className='ml-2' />
                </div>

                <div className='flex items-center mt-5 border-[1.5px] py-4 border-dim-text dark:border-dim-text-dark border-opacity-50 rounded-lg'>
                    <CalendarSVG className='ml-5 fill-gray dark:fill-gray-dark' />
                    <Datetime className='ml-5 font-gilroy font-semibold text-dark-text dark:text-light-text' />
                </div>



                <div className="mt-10">
                    <div className="flex justify-end items-center mb-10">
                        <button
                            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
                            onClick={() => setPage(1)}
                        >
                            <BackArrowSVG className="fill-dark-text dark:fill-dark-white-color" />
                            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-dark-white-color">Go Back</span>
                        </button>

                        <button className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md"
                            onClick={() => setActive('Preview')}>
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
