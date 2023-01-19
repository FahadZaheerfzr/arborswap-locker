import PreviewDetails from '../../../Common/PreviewDetails'
import React from 'react'

const AdminPanel = ({
    status,
    whitelist_address,
    participants,
    amount,
    allocated,
    showModal,
    upcoming
}) => {
    return (
        <div className="hidden md:block px-9 pb-9 bg-white dark:bg-dark-1 rounded-[20px]">
            <div className="w-full flex justify-center">
                <div className='w-1/2 py-5 flex justify-center items-center border-b-2 border-primary-green '>
                    <span className='font-bold text-primary-green'>
                        Admin Panel
                    </span>
                </div>
            </div>
             <div className='mt-5'>
                    {upcoming && status !== "Ended" && status !== "Live"? 
                    <div className='flex flex-col'>
                        <PreviewDetails name={"Address Whitelisted"} value={whitelist_address}/>
                        <div className='mt-10'>
                            <button className={`w-full bg-light dark:bg-dark text-dark-text dark:text-light-text rounded-md font-bold py-4 mb-7`}>
                                Add Address
                            </button>
                            <button className={`w-full bg-primary-green bg-opacity-10 rounded-md text-primary-green font-bold py-4`}
                                onClick={() => {showModal(true)}}>
                                Start Airdrop
                            </button>
                        </div>

                    </div> 
                    : 
                    <div className='flex flex-col'>
                        <PreviewDetails name={"Address Whitelisted"} value={whitelist_address}/>
                        <PreviewDetails name={"Participants"} value={participants}/>
                        <PreviewDetails name={"Tokens Remianing"} value={(amount * (1- allocated/100)).toLocaleString()}/>
                        <div className='mt-10'>
                            {status === "Ended" ? 
                            <button className={`w-full bg-light dark:bg-dark text-dark-text dark:text-light-text rounded-md font-bold py-4 mb-7`}>
                                Ended
                            </button> :
                            <button className={`w-full bg-primary-yellow bg-opacity-10 rounded-md text-primary-yellow font-bold py-4`}
                                onClick={() => {showModal(true)}}>
                                End Airdrop
                            </button>
                            }

                        </div>
                    </div>}
                </div>
        </div>
    )
}

export default AdminPanel
 
