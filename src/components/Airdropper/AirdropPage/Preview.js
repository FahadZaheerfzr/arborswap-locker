import React from 'react'
import Info from './Info'
import PreviewDetails from '../../Common/PreviewDetails'
import TwitterSVG from '../../../svgs/Socials/twitter';
import DribbleSVG from '../../../svgs/Socials/dribble';
import PreviewHeader from '../../Common/PreviewHeader';

const TokkenDetails = {
    TokenName: "Swipe Coin",
    TokenSymbol: "SXP",
    TokenDecimals: 18,
    TotalSupply: 1000000000,
}


export default function Preview({
    icon,
    name,
    is_private,
    tags,
    description,
    address,
    starts_on,
    ends_on,
    admin
}) {

    return (
        <div className="px-9 py-9 my-4">
            <Info name={name} icon={icon} is_private={is_private} tags={tags} admin={admin}/>

            <div className='mt-6 flex md:hidden gap-5 ml-[70px]'>
                <TwitterSVG className="fill-dark-text dark:fill-light-text " />
                <DribbleSVG className="fill-dark-text dark:fill-light-text " />
            </div>
            <div className="mt-10">
                <span className="font-medium text-sm text-gray dark:text-gray-dark">{description}</span>
            </div>

            <div className="mt-5">
                <PreviewHeader heading={"Token Details"}/>
                <PreviewDetails name={'Token Address'} value={address} enable_copy />
                <PreviewDetails name={'Token Name'} value={TokkenDetails.TokenName} />
                <PreviewDetails name={'Token Symbol'} value={TokkenDetails.TokenSymbol} />
                <PreviewDetails name={'Token Decimals'} value={TokkenDetails.TokenDecimals} />
                <PreviewDetails name={'Total Supply'} value={TokkenDetails.TotalSupply.toLocaleString()} />
            </div>

            <div className='mt-5'>
                <PreviewHeader heading={"Airdrop Details"}/>
                <PreviewDetails name={'Airdrop Address'} value={address} enable_copy/>
                <PreviewDetails name={'Start On'} value={starts_on}/>
                <PreviewDetails name={'Ends On'} value={ends_on}/>
            </div>

        </div>
    )
}
