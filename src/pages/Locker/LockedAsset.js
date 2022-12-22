import React, { useEffect, useState } from 'react'
import { getLiquidityLockList, getTokenLockList, getTokenLockInfos, getLpLockInfos } from 'utils/getLockList'

import { useParams } from 'react-router-dom'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import LockedAssetBase from '../../components/LockedAsset'
import { Cards } from '../../data/cards'

export default function LockedAsset({ type }) {
  const { id } = useParams()
  const [asset, setAsset] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true

    const handleFetch = async () => {
      setAsset(false)

      try {
        if (type === 'token') {
          const info = await getTokenLockInfos([id])
          if (!active) {
            return
          }
          if (info.success) {
            setAsset(info.data)
          }
        }
        if (type === 'lp-token') {
          const infoLp = await getLpLockInfos([id])
          if (!active) {
            return
          }
          if (infoLp.success) {
            setAsset(infoLp.data)
          }
        }
        if (!active) {
          return
        }
        setReady(true)
      } catch (error) {
        console.log(error)
      }
    }
    handleFetch(type, id)

    return () => {
      active = false
    }
  }, [type, id])

  console.log(`asset`, asset)

  return ready ? (
    // <BaseLayout title={asset && `${asset.name1}/${asset.name2}`} page_name={'Locked Assets'} subpage>
    <BaseLayout title={type} page_name={'Locked Assets'} subpage>
      <LockedAssetBase asset={asset} type={type} />
    </BaseLayout>
  ) : (
    <></>
  )
}
