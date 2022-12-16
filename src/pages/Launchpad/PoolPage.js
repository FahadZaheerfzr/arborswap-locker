import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import { Pools } from '../../data/pools';

export default function PoolPage() {
    const { id } = useParams();
    const [pool, setPool] = useState(null);

    useEffect(() => {
        const fetchPool = Pools.find((pool) => pool.id === parseInt(id));
        setPool(fetchPool);
    }, [id]);

    
        return (
            pool &&
            <BaseLayout page_name={"Pools"} title={pool.name} subpage>

            </BaseLayout>
        )
    
}
