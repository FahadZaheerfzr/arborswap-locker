import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import AirdropPageBase from '../../components/Airdropper/AirdropPage'
import {Airdrops} from "../../data/airdrops"
import Modal from '../../components/Airdropper/AirdropPage/Modal';

export default function PoolPage() {
  const { id } = useParams()
  const [airdrop, setAirdrop] = useState(null)
  const [modal, showModal] = useState(false);
  const [admin] = useState(true);
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const airdrop = Airdrops.find((airdrop) => airdrop.id === parseInt(id))
    document.title = airdrop.name
    setAirdrop(airdrop)
  }, [id])

  return (
    airdrop &&
    <div className='w-full'>
      {modal &&
        <div className="fixed z-50  top-0 left-0">
          <Modal showModal={showModal} status = {airdrop.status}/>
        </div>
      }
      <BaseLayout page_name={'Airdrops'} title={airdrop.name} subpage admin={admin} setAdminMode={setAdminMode}>
        <AirdropPageBase airdrop={airdrop} showModal={showModal} admin={adminMode} />
      </BaseLayout>
    </div>
  )
}
