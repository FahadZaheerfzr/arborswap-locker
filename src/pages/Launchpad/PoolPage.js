import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BaseLayout from '../../components/BaseLayout/BaseLayout'
import PoolPageBase from '../../components/Launchpad/PoolPage'
import { Pools } from '../../data/pools'
import Modal from '../../components/Launchpad/PoolPage/Modal/index';

export default function PoolPage() {
  const { id } = useParams()
  const [pool, setPool] = useState(null)
  const [modal, showModal] = useState(false);

  useEffect(() => {
    const pool = Pools.find((pool) => pool.id === parseInt(id))
    document.title = pool.name
    setPool(pool)
  }, [id])

  return (
    pool &&
    <div className='w-full'>
      {modal &&
        <div className="fixed z-50  top-0 left-0">
          <Modal showModal={showModal} from_symbol={pool.symbol} from_icon={pool.hard_cap_icon} to_icon={pool.icon} to_symbol={"SXP"} />
        </div>
      }
      <BaseLayout page_name={'Pools'} title={pool.name} subpage>
        <PoolPageBase pool={pool} showModal={showModal} />
      </BaseLayout>
    </div>
  )
}
