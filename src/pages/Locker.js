import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import LockerBase from '../components/Locker'
import SheildSecuritySVG from '../svgs/Sidebar/shield_security'

export default function Locker() {
  return (
    <BaseLayout title={"Locker"} title_img={<SheildSecuritySVG className="md:hidden fill-dim-text" />}>
        <LockerBase />
    </BaseLayout>
  )
}
