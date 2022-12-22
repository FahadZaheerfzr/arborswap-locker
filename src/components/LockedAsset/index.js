import React from 'react'
import Amount from './Amount'
import Preview from './Preview/Preview'

export default function LockedAssetBase({ asset, type }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-4 md:px-0 md:flex md:w-10/12 md:gap-7">
        <div className="w-full md:w-[60%] bg-white dark:bg-dark-1 rounded-[10px]">
          {asset && <Preview type={type} asset={asset} />}
        </div>
        <div className="mt-14 md:mt-0 md:w-[40%] ">{asset && <Amount type={type} assets={asset} />}</div>
      </div>
    </div>
  )
}
