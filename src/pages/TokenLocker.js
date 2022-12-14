import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Landing from '../components/TokenLocker/Landing';
import { useDocumentTitle } from '../hooks/setDocumentTitle';
export default function TokenLocker() {
    useDocumentTitle("Token Locker");
    return (
        <BaseLayout title={"Locker"} page_name={"Token Locker"}>
            <div className='w-full flex justify-center'>
                <div className='w-full px-4 md:px-0 md:w-1/2'>
                    <Landing />
                </div>
            </div>
        </BaseLayout>
    )
}
