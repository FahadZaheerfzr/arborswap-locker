import TokenType from 'components/Airdropper/CreateAirdrop/TokenType'
import React, { useState } from 'react'
import AirdropPanel from '../../components/Airdropper/CreateAirdrop/AirdropPanel'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import AirplaneSVG from '../../svgs/Sidebar/airplane'

export default function CreateAirdrop() {
    const [page, setPage] = useState(1)
    const [Private, setPrivate] = useState(false)

    useDocumentTitle('Create Airdrop')
    return (
        <BaseLayout
            title={'Airdropper'}
            title_img={<AirplaneSVG className="md:hidden fill-dim-text" />}
            page_name={'Create Airdrop'}
            page_description={'Airdrop to multiple users in few clicks.'}
        >
                <div className="w-full flex justify-center mb-16">
                    {page === 1 && (
                    <div className="w-full px-4 md:px-0 md:w-1/2">
                        <TokenType setPage={setPage} Private={setPrivate} setPrivate={setPrivate}/>
                    </div>
                    )}
                    {page === 2 && (
                    <div className="w-full px-4 md:px-0 md:w-10/12">
                        <AirdropPanel setPage={setPage} Private={Private}/>
                    </div>
                    )}
                </div>
        </BaseLayout>
    )
}
