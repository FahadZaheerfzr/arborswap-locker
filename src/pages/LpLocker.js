import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Lock from '../components/TokenLocker/Lock'
import { useDocumentTitle } from '../hooks/setDocumentTitle'
import SheildSecuritySVG from '../svgs/Sidebar/shield_security'

export default function LpLocker() {
  useDocumentTitle('LP Locker')

  return (
    <BaseLayout
      title={'Locker'}
      page_name={'LP Locker'}
      title_img={<SheildSecuritySVG className="md:hidden fill-dim-text" />}
    >
      <div className="w-full flex justify-center mb-16">
        <div className="w-full px-4 md:px-0 md:w-10/12">
          <Lock lp_locker />
        </div>
      </div>
    </BaseLayout>
  )
}
