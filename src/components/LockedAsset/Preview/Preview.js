import React from 'react'
import PreviewDetails from '../../Common/PreviewDetails'
import PreviewHeader from '../../Common/PreviewHeader'
import Options from './Subcomponents/Options'


export default function Preview({ name1, name2, icon1, icon2, description, amount, amountUSD, unlock_date, locked_by, lp_supply, dex_listed }) {
  return (
    <div className="preview px-9  py-9 my-4">
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className="flex">
            <img src={icon1} alt={name1} className="w-[54px] h-[54px]" />
            <img src={icon2} alt={name2} className="w-[54px] h-[54px] relative -ml-7" />
          </div>

          <div className='flex flex-col ml-4 font-gilroy'>
            <span className='text-dark-text dark:text-light-text  font-bold'>
              {name1} / {name2}
            </span>

            <span className='text-gray dark:text-gray-dark font-medium mt-2 text-xs'>
              {description}
            </span>
          </div>
        </div>

        <Options width={"w-7"} height={"h-7"} color={"[#FAF8F5]"} dark_color={"dark-2"} />
      </div>

      <PreviewHeader heading={"Lock Details"} />

      <div className='flex flex-col'>
        <PreviewDetails name={"LP Locked"} value={amount.toLocaleString()} icon={null} />
        <PreviewDetails name={"Amount in ($)"} value={amountUSD.toLocaleString()} icon={null} />
        <PreviewDetails name={"Locked By"} value={locked_by} icon={null} />
        <PreviewDetails name={"Unlock Date"} value={unlock_date} icon={null} />
      </div>

      <PreviewHeader heading={"LP Details"} />

      <div className='flex flex-col'>
        <PreviewDetails name={"Quote Pair"} value={name1} icon={icon1} />
        <PreviewDetails name={"Base Pair"} value={name2} icon={icon2} />
        <PreviewDetails name={"Symbol"} value={name1 + "/" + name2} icon={null} />
        <PreviewDetails name={"LP Supply"} value={lp_supply.toLocaleString()} icon={null} />
        <PreviewDetails name={"Dex Listed"} value={dex_listed} icon={"/images/logo-small.svg"} />
      </div>

    </div>
  )
}
