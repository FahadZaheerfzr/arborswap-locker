import React from 'react'

const NotStartedPublic = ({showModal}) => {
  return (
    <div className='flex flex-col'>
        <div className='my-10'>
            <button className={`w-full bg-primary-green bg-opacity-10 rounded-md text-primary-green font-bold py-4 mb-7`}
                onClick={() => {showModal(3)}}>
                Start Airdrop
            </button>
            <button className={`w-full bg-[#EB5757] bg-opacity-10 rounded-md text-[#EB5757] font-bold py-4`}>
                Cancel Airdrop
            </button>
        </div>
    </div>
  )
}

export default NotStartedPublic