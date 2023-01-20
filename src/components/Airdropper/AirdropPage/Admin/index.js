import React from 'react'
import StartedNotLive from './StartedNotLive'
import StartedLive from './StartedLive'
import NotStartedPublic from './NotStartedPublic'
import NotStartedPrivate from './NotStartedPrivate'

const AdminPanel = ({
    status,
    whitelist_address,
    participants,
    amount,
    allocated,
    showModal,
    upcoming,
    Private,
    started
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
                {started ? 
                upcoming && status !== "Ended" && status !== "Live" ? <StartedNotLive whitelist_address={whitelist_address} showModal={showModal}/>
                :<StartedLive whitelist_address={whitelist_address} amount={amount} allocated={allocated} participants={participants} status={status} showModal={showModal}/>
                    :
                    Private ? 
                    <NotStartedPrivate whitelist_address={whitelist_address} showModal={showModal}/> 
                    : 
                    <NotStartedPublic showModal={showModal}/>
                    }
                </div>
        </div>
    )
}

export default AdminPanel
 
