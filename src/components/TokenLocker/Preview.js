import React, { useEffect, useState } from 'react'
import BackArrowSVG from '../../svgs/back_arrow'
import PreviewDetails from '../Common/PreviewDetails'
import PreviewHeader from '../Common/PreviewHeader'
import { formatBigToNum } from '../../utils/numberFormat'

const LP_details = [
  {
    id: 1,
    name: 'Quote Pair',
    value: 'WBNB',
    icon: '/images/cards/bnb.svg',
  },
  {
    id: 2,
    name: 'Base Pair',
    value: 'SXP',
    icon: '/images/cards/rip.svg',
  },
  {
    id: 3,
    name: 'Symbol',
    value: 'WBNB/SXP',
  },
  {
    id: 4,
    name: 'LP Supply',
    value: 9014470,
  },
  {
    id: 5,
    name: 'Dex Listed',
    value: 'Arborswap',
    icon: '/images/logo-small.svg',
  },
]

export default function Preview({ locker, setActive, lockData }) {
  const [date, setDate] = useState()
  const [days, setDays] = useState(0)

  useEffect(() => {
    if (lockData.unlockDate) {
      const date = new Date(lockData.unlockDate * 1000)
      setDate(date.toLocaleDateString())
      setDays(Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)))
    }
  }, [lockData.unlockDate])

  const lockToken = () => {
    console.log('Token Locked')
  }

  return (
    <div className="-mt-10">
      {locker ? <PreviewHeader heading={'Token address Details'} /> : <PreviewHeader heading={'LP Details'} />}

      <div className="flex flex-col">
        {locker ? (
          <>
            <PreviewDetails name="Name" value={lockData.tokenName} />
            <PreviewDetails name="Symbol" value={lockData.tokenSymbol} />
            <PreviewDetails name="Decimals" value={lockData.tokenDecimals} />
            <PreviewDetails
              name="Total Supply"
              value={`${formatBigToNum(lockData.tokenSupply, lockData.tokenDecimals)} ${lockData.tokenSymbol}`}
            />
          </>
        ) : (
          LP_details.map(
            (item) =>
              item !== LP_details[5] && (
                <PreviewDetails key={item.id} name={item.name} value={item.value} icon={item.icon} />
              ),
          )
        )}
      </div>

      <PreviewHeader heading={'Lock Details'} />

      <div className="flex flex-col">
        <PreviewDetails
          name={'Amount to be Locked'}
          value={`${lockData.lockAmount.toLocaleString()} ${lockData.tokenSymbol}`}
        />
        <PreviewDetails name={'Lock Period (Days)'} value={days} />
        <PreviewDetails name={'Unlock Date'} value={date} />
      </div>

      <div className="mt-10">
        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
            onClick={() => setActive('Lock details')}
          >
            <BackArrowSVG className="fill-dark-text dark:fill-light-text" />
            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-light-text">Go Back</span>
          </button>

          <button
            className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md"
            onClick={lockToken}
          >
            Lock
          </button>
        </div>
      </div>
    </div>
  )
}
