import React, { useState } from 'react'
import AirdropsBase from '../../components/Airdropper/Airdrops'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import HomeLayout from '../../components/HomeLayout'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import AirplaneSVG from '../../svgs/Sidebar/airplane'

const Tabs = [
    {
        id: 1,
        tabName: 'Live',
    },
    {
        id: 2,
        tabName: 'Ended',
    },
    {
        id: 3,
        tabName: 'Timed',
    },
]

export default function Airdrops() {
    useDocumentTitle('Airdrops')
    const [activeTab, setActiveTab] = useState(1)
    return (
        <BaseLayout
            title={'Airdropper'}
            title_img={<AirplaneSVG className="md:hidden fill-dim-text" />}
            page_name={'Airdrops'}
            page_description={'Airdrop to multiple users in few clicks.'}>
            <HomeLayout tabs={Tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
                <AirdropsBase activeStatus={Tabs[activeTab - 1].tabName} />
            </HomeLayout>
        </BaseLayout>
    )
}
