import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Cards } from '../../data/cards';
import Amount from './Amount';
import Preview from './Preview/Preview'


export default function LockedAssetBase() {
    const { id } = useParams();
    const [asset, setAsset] = useState(null);

    useEffect(() => {
        const temp = Cards.find(card => card.id === parseInt(id));
        console.log(temp);
        setAsset(temp);
    }, [id]);



    return (
        <div className='w-full flex justify-center bg-tree-pattern-mobile md:bg-tree-pattern bg-center bg-no-repeat'>
            <div className='w-full px-4 md:px-0 md:flex md:w-10/12 md:gap-7'>
                <div className="w-full md:w-[60%] bg-white rounded-[10px]">
                    {asset &&
                        <Preview name1={asset.name1} name2={asset.name2} icon1={asset.icon1} icon2={asset.icon2}
                            amount={asset.amount} amountUSD={asset.amountUSD} unlock_date={asset.unlock_date} description={asset.details}
                            locked_by={asset.locked_by} lp_supply={asset.lp_supply} dex_listed={asset.dex_listed}
                        />
                    }
                </div>

                <div className='mt-14 md:mt-0 md:w-[40%] '>
                    {asset &&
                        <Amount icon1={asset.icon1} icon2={asset.icon2} amount={asset.amount.toLocaleString()}
                            unlock_date={asset.unlock_date} />
                    }
                </div>
            </div>
        </div>
    )
}
