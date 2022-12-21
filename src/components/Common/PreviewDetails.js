import React from 'react'
import CopySVG from '../../svgs/Pool/copy';

export default function PreviewDetails({ name, value, icon, verified, enable_copy }) {
  return (
    <div className="py-5 flex justify-between border-b border-dashed border-dim-text border-opacity-30">
      <span className="font-gilroy text-sm font-medium text-gray dark:text-gray-dark">{name}</span>

      <div className="flex items-center">
        {icon && <img className="w-5 h-5 mr-1" src={icon} alt="chain-icon" />}
        <span className="font-gilroy text-sm font-bold text-dark-text dark:text-light-text">{value}</span>

        {enable_copy && <CopySVG className="fill-gray dark:fill-gray-dark ml-[6px]" />}
        {verified && (
          <img className="w-[14px] h-[14px] ml-1" src="/images/home/collections/cards/verified.svg" alt="verified" />
        )}
      </div>
    </div>
  )
}
