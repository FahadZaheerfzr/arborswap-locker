import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout/BaseLayout'
import LockedAssetBase from '../components/LockedAsset'
import { Cards } from '../data/cards';

export default function LockedAsset() {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const temp = Cards.find(card => card.id === parseInt(id));
    setAsset(temp);
  }, [id]);

  return (
    <BaseLayout title={asset && `${asset.name1}/${asset.name2}`} subpage>
      <LockedAssetBase asset={asset} />
    </BaseLayout>
  )
}
