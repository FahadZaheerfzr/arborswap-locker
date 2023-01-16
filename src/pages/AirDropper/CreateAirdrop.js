import React from 'react'
import AirdropPanel from '../../components/Airdropper/CreateAirdrop/AirdropPanel'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import AirplaneSVG from '../../svgs/Sidebar/airplane'

export default function CreateAirdrop() {
    useDocumentTitle('Create Airdrop')
    return (
        <BaseLayout
            title={'Airdropper'}
            title_img={<AirplaneSVG className="md:hidden fill-dim-text" />}
            page_name={'Create Airdrop'}
            page_description={'Airdrop to multiple users in few clicks.'}
        >
            <AirdropPanel />
        </BaseLayout>
    )
}
