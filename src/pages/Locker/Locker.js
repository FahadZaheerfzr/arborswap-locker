import React, { useState } from 'react'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import HomeLayout from '../../components/HomeLayout'
import LockerBase from '../../components/Locker'
import SheildSecuritySVG from '../../svgs/Sidebar/shield_security'

export default function Locker() {
  const [cardFormat, setCardFormat] = useState('grid');
  const [itemSelected, setItemSelected] = useState('liquidity');
  
  return (
    <BaseLayout
      title={'Locker'}
      page_name={'Locked Assets'}
      title_img={<SheildSecuritySVG className="md:hidden fill-dim-text" />}
    >
      <HomeLayout cardFormat={cardFormat} setCardFormat={setCardFormat} itemSelected={itemSelected} setItemSelected={setItemSelected}>
        <LockerBase cardFormat={cardFormat} itemSelected={itemSelected} />
      </HomeLayout>
    </BaseLayout>
  )
}
