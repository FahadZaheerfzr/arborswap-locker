import React from 'react'
import PreviewDetails from 'components/Common/PreviewDetails'

const NotStartedPrivate = ({ whitelist_address, showModal }) => {
    return (
        <div className='flex flex-col'>
            <PreviewDetails name={"Address Whitelisted"} value={whitelist_address} />
            <div className='mt-10'>
                <button className={`w-full bg-primary-green bg-opacity-10 rounded-md text-primary-green font-bold py-4 mb-7`}
                    onClick={() => { showModal(3) }}>
                    Start Airdrop
                </button>
                <button className={`w-full bg-[#EB5757] bg-opacity-10 rounded-md text-[#EB5757] font-bold py-4 mb-7`}>
                    Cancel Airdrop
                </button>
                <button className={`w-full bg-light dark:bg-dark text-dark-text dark:text-light-text rounded-md font-bold py-4 mb-7`}
                    onClick={() => { showModal(1) }}>
                    Set Allocations
                </button>
                <button className={`w-full bg-light dark:bg-dark text-dark-text dark:text-light-text rounded-md font-bold py-4`}
                    onClick={() => { showModal(1) }}>
                    Remove Allocations
                </button>
            </div>
        </div>
    )
}

export default NotStartedPrivate