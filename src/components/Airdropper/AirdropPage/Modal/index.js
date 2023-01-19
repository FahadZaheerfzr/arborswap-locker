import React, {useState} from 'react'
import CalendarField from '../../../Launchpad/CreateSale/Subcomponents/CalendarField'

export default function Modal({ showModal, status }) {
  const [date, setDate] = useState()
  const handleSubmit = () => {
    showModal(false)
  }

  return (
    <div className={`w-screen h-screen flex backdrop-blur-[7px] flex-col justify-center items-center bg-[#F2F3F5] dark:bg-dark dark:bg-opacity-40 bg-opacity-40`}>
      <div className="w-[90%] max-w-[420px] rounded-[10px] px-9 py-7 bg-white dark:bg-dark-1">
        <div className="flex justify-between items-center  ">
          <span className="text-dark-text dark:text-light-text font-gilroy font-semibold text-lg">Set Time</span>
          <div className="flex items-center cursor-pointer" onClick={() => showModal(false)}>
            <span className="text-sm font-gilroy font-semibold text-dark-text dark:text-light-text mr-2">Close</span>
            <div className="flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]">
              &#10005;
            </div>
          </div>
        </div>

        <div className='mt-10'>
            <div className="w-full">
                <CalendarField heading={status === "Ended" ? "Starts On (UTC)": "Ends On (UTC)"} setFunction={setDate}  />
            </div>
            {status === "Live" || status === "Timed" ?             
            <div class="flex items-center mt-10">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 accent-primary-green bg-gray-100 border-gray-300 rounded dark:border-gray-600 focus:outline-none" />
                <label for="default-checkbox" class="ml-3 text-sm font-medium text-dark-text dark:text-gray-300">End Now Instead</label>
            </div> : 
            <div class="flex items-center mt-10">
                <input disabled checked id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="disabled-checkbox" class="ml-3 text-sm font-medium text-[#807373] dark:text-gray-500">Start Now Instead</label>
            </div>}

        </div>

      <div className="w-full max-w-[420px]  mt-10">
        <button
          className="w-full bg-primary-green text-white py-5 rounded-md font-gilroy font-bold text-xl"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
    </div>
  )
}
