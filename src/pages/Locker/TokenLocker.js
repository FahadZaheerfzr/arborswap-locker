import React, { useState } from 'react'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Landing from '../../components/TokenLocker/Landing'
import Lock from '../../components/TokenLocker/Lock'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import SheildSecuritySVG from '../../svgs/Sidebar/shield_security'

export default function TokenLocker() {
  useDocumentTitle('Token Locker')
  const [page, setPage] = useState(1)

  return (
    <BaseLayout
      title={'Locker'}
      page_name={'Token Locker'}
      title_img={<SheildSecuritySVG className="md:hidden fill-dim-text" />}
    >
      <div className="w-full flex justify-center mb-16">
        {page === 1 && (
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <Landing setPage={setPage} />
          </div>
        )}
        {page === 2 && (
          <div className="w-full px-4 md:px-0 md:w-10/12">
            <Lock setPage={setPage} />
          </div>
        )}
      </div>
    </BaseLayout>
  )
}
