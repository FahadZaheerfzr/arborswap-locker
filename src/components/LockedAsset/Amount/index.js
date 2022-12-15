import React from 'react'
import Timer from './Timer/Timer'

export default function Amount({ icon1, icon2, amount, unlock_date }) {
  return (
    <div className="flex flex-col p-9 font-gilroy bg-white dark:bg-dark-1 rounded-[20px]">
      <span className="text-sm font-medium text-gray dark:text-gray-dark">Amount</span>

      <div className="flex items-center mt-3">
        <img className="w-7 h-7" src={icon1} alt="quote-pair" />
        <img className="w-7 h-7 -ml-5" src={icon2} alt="base-pair" />

        <span className="text-2xl font-bold text-dark-text dark:text-light-text ml-3">{amount}</span>
      </div>

      <div className="flex mt-10">
        <button className="w-full bg-primary-green bg-opacity-50 rounded-md text-white dark:text-dim-text-dark font-bold py-4">
          Claim
        </button>
      </div>

      <div className="flex justify-center mt-7">
        <span className="text-sm font-medium text-gray dark:text-gray-dark">Unlocks in</span>
      </div>

      <Timer date={unlock_date} />
    </div>
  )
}
