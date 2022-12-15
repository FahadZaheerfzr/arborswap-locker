import React from 'react'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import HomeLayout from '../../components/HomeLayout'
import LaunchpadSVG from '../../svgs/Sidebar/launchpad'

export default function Pools() {
  return (
    <BaseLayout title={"Launchpad"} title_img={<LaunchpadSVG />} page_name={"Pools"}>
        <HomeLayout>

        </HomeLayout>
    </BaseLayout> 
  )
}
