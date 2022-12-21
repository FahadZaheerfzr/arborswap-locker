import React, { useState } from 'react'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Landing from '../../components/TokenLocker/Landing'
import Lock from '../../components/TokenLocker/Lock'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import SheildSecuritySVG from '../../svgs/Sidebar/shield_security'

export default function TokenLocker() {
  useDocumentTitle('Token Locker')
  const [lockData, setLockData] = useState({
    showLanding: true,
    showDetails: false,
    isValid: false,
    type: 'standard',
    tokenAddress: '',
    tokenName: '',
    tokenSymbol: '',
    tokenDecimals: '',
    tokenSupply: '',
    lockAmount: 0,
    lockAmountBN: 0,
    unlockDate: Math.floor(Date.now() / 1000) + 86400,
    image: '',
    userBalance: '',
    userAllowance: '0',
  })

  return (
    <BaseLayout
      title={'Locker'}
      page_name={'Token Locker'}
      title_img={<SheildSecuritySVG className="md:hidden fill-dim-text" />}
    >
      <div className="w-full flex justify-center mb-16">
        {lockData.showLanding ? (
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Landing lockData={lockData} setLockData={setLockData} />
          </div>
        ) : (
          <div className="w-full px-4 md:px-0 md:w-10/12">
            <Lock lockData={lockData} setLockData={setLockData} />
          </div>
        )}
      </div>
    </BaseLayout>
  )
}
