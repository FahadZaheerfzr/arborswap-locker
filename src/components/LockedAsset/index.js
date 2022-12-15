import React from 'react'
import Amount from './Amount'
import Preview from './Preview/Preview'

export default function LockedAssetBase({ asset }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-4 md:px-0 md:flex md:w-10/12 md:gap-7">
        <div className="w-full md:w-[60%] bg-white dark:bg-dark-1 rounded-[10px]">
          {asset && (
            <Preview
              name1={asset.name1}
              name2={asset.name2}
              icon1={asset.icon1}
              icon2={asset.icon2}
              amount={asset.amount}
              amountUSD={asset.amountUSD}
              unlock_date={asset.unlock_date}
              description={asset.details}
              locked_by={asset.locked_by}
              lp_supply={asset.lp_supply}
              dex_listed={asset.dex_listed}
            />
          )}
        </div>

        <div className="mt-14 md:mt-0 md:w-[40%] ">
          {asset && (
            <Amount
              icon1={asset.icon1}
              icon2={asset.icon2}
              amount={asset.amount.toLocaleString()}
              unlock_date={asset.unlock_date}
            />
          )}
        </div>
      </div>
    </div>
  )
}
