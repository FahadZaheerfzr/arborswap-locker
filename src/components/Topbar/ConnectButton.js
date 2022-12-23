import React, { useState } from 'react'
import NotificationSVG from '../../svgs/notification'
import { useEthers } from '@usedapp/core'
import WalletSVG from '../../svgs/Topbar/empty_wallet'
import ConnectedButton from './Button/ConnectedButton'
import DisconnectedButton from './Button/DisconnectedButton'
import Dropdown from './Dropdown'

const ConnectButton = () => {
  const { account } = useEthers();
  const [hover, setHover] = useState(false);
  return (
    <div className='flex flex-col items-end'>
      <div className="flex user-div">
        {account && (
          <div className="hidden w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F6F7] dark:bg-dark-1 rounded-md md:flex items-center justify-center">
            <NotificationSVG className="hidden md:block fill-slate-700 dark:fill-white" />
          </div>
        )}
        {account && (
          <div className="flex md:hidden w-10 h-10 justify-center border-2 rounded-md border-primary-green border-opacity-50 items-center ml-4">
            <WalletSVG className="fill-dark-text" />
          </div>
        )}
        {account ? <ConnectedButton setHover={setHover} /> : <DisconnectedButton />}
      </div>
      {account && hover && <Dropdown />}
    </div>
  )
}

export default ConnectButton
