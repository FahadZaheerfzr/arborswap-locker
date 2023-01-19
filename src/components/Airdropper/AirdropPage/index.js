import React, { useState } from 'react'
import Preview from './Preview'
import UserPanel from './UserPanel'
import AdminPanel from "./Admin"

export default function AirdropPageBase({ airdrop, showModal, admin }) {
  const [upcoming] = useState(true)
  const [whitelisted] = useState(false)

  return (
    airdrop && (
      <div className="w-full flex justify-center">
        <div className="w-full px-4 md:px-0 md:flex md:w-10/12 md:gap-7">
          <div className="w-full md:w-[65%] bg-white dark:bg-dark-1 rounded-[10px]">
            <Preview
              name={airdrop.name}
              icon={airdrop.icon}
              is_private={airdrop.private}
              tags={airdrop.tags}
              description={airdrop.description}
              address={airdrop.address}
              starts_on={airdrop.presale_starts}
              ends_on={airdrop.presale_ends}
            />
          </div>

          <div className="mt-14 md:mt-0 md:w-[35%] ">
        
            {
                admin ? <AdminPanel status={airdrop.status} whitelist_address={105} participants={airdrop.participants} amount={airdrop.amount} allocated={airdrop.filled_percent} showModal={showModal} upcoming={upcoming}/> : 
                <UserPanel amount={airdrop.amount} icon={airdrop.icon}
                min_allocation={airdrop.min_allocation} status={airdrop.status}
                filled_percent={airdrop.filled_percent} ends_on={airdrop.presale_ends}  
                whitelisted={whitelisted} whitelist_address={105}/>
            }
          </div>
        </div>
      </div>
    )
  )
}
