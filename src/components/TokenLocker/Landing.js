import React, { useState } from 'react'
import LockOptions from './Subcomponents/LockOptions'
import Note from './Subcomponents/Note';

export default function Landing() {
  const [lock, setLock] = useState("reward");
  return (
    <div className='bg-white flex flex-col rounded-[10px] p-9'>
      <span className='font-semibold text-dark-text'>
        Choose Token Lock Type
      </span>

      <div className='flex flex-col md:flex-row gap-4 mt-6'>
        <LockOptions name={"Standard"} lock={lock} setLock={setLock} selected={lock === "standard"} />
        <LockOptions name={"Reward"} lock={lock} setLock={setLock} selected={lock === "reward"} />
      </div>

      <div className='mt-10 bg-[#FAF8F5] rounded-md p-5 text-sm font-semibold text-gray dark:text-gray-dark'>
          <Note standard={lock === "standard"} />
      </div>

      <div className='mt-10 flex justify-end'>
        <button className='bg-primary-green text-white rounded-md px-[42px] py-4 font-bold'>
          Next
        </button>
      </div>
    </div>
  )
}
