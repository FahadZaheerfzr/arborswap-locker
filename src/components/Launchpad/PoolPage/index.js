import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pools } from '../../../data/pools';
import Preview from './Preview';

export default function PoolPageBase() {
    const { id } = useParams();
    const [pool, setPool] = useState(null);

    useEffect(() => {
        const fetchPool = Pools.find((pool) => pool.id === parseInt(id));
        setPool(fetchPool);
    }, [id]);
    return (
        pool && 
        <div className="w-full flex justify-center">
            <div className="w-full px-4 md:px-0 md:flex md:w-10/12 md:gap-7">
                <div className="w-full md:w-[65%] bg-white dark:bg-dark-1 rounded-[10px]">
                    <Preview name={pool.name} icon={pool.icon} 
                    is_private={pool.private} tags={pool.tags} 
                    description={pool.description} address={pool.address}
                    starts_on={pool.presale_starts}
                    />
                </div>

                <div className="mt-14 md:mt-0 md:w-[35%] ">

                </div>
            </div>
        </div>
    )
}
