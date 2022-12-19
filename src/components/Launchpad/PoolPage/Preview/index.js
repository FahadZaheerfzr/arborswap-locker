import React, { useState } from 'react'
import Info from './Subcomponents/Info'
import PreviewDetails from '../../../Common/PreviewDetails'
import TwitterSVG from '../../../../svgs/Socials/twitter';
import DribbleSVG from '../../../../svgs/Socials/dribble';

export default function Preview({
    icon,
    name,
    is_private,
    tags,
    description,
    address,
    starts_on,
    ends_on,
    soft_cap,
    hard_cap,
    soft_cap_icon,
    hard_cap_icon,
    first_release,
    vesting_release,
}) {
    const [slide, setSlide] = useState('Presale')

    return (
        <div className="px-9 py-9 my-4">
            <Info name={name} icon={icon} is_private={is_private} tags={tags} />

            <div className='mt-6 flex md:hidden gap-5 ml-[70px]'>
                <TwitterSVG className="fill-dark-text dark:fill-light-text " />
                <DribbleSVG className="fill-dark-text dark:fill-light-text " />
            </div>
            <div className="mt-10">
                <span className="font-medium text-sm text-gray dark:text-gray-dark">{description}</span>
            </div>

            <div className="mt-10 w-full flex rounded-[9px] px-[6px] py-[6px] bg-[#F5F1EB] dark:bg-dark-3 font-medium text-sm text-dim-text dark:text-dim-text-dark">
                <div
                    className={`w-full cursor-pointer flex justify-center items-center py-2 ${slide === 'Presale' ? 'bg-white text-dark-text dark:text-light-text font-semibold dark:bg-dark-1' : ''
                        }`}
                    onClick={() => setSlide('Presale')}
                >
                    <span className="">Presale</span>
                </div>
                <div
                    className={`w-full cursor-pointer flex justify-center items-center py-2 ${slide === 'Token' ? 'bg-white text-dark-text dark:text-light-text font-semibold dark:bg-dark-1' : ''
                        }`}
                    onClick={() => setSlide('Token')}
                >
                    <span className="">Token</span>
                </div>
            </div>

            <div className="mt-5">
                <PreviewDetails name={'Presale Address'} value={address} />
                <PreviewDetails name={'Presale Starts on'} value={starts_on} />
                <PreviewDetails name={'Presale Ends on'} value={ends_on} />
                <PreviewDetails name={'Soft Cap'} value={soft_cap.toLocaleString()} icon={soft_cap_icon} />
                <PreviewDetails name={'Hard Cap'} value={hard_cap.toLocaleString()} icon={hard_cap_icon} />
                <PreviewDetails name={'First Release'} value={first_release} />
                <PreviewDetails name={'Vesting Release'} value={vesting_release} />
            </div>
        </div>
    )
}
