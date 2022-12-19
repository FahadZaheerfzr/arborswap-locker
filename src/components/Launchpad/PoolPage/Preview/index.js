import React, { useState } from 'react'
import Info from './Subcomponents/Info'
import PreviewDetails from '../../../Common/PreviewDetails';

export default function Preview({ icon, name, is_private, tags, description, address, starts_on }) {
    const [slide, setSlide] = useState("Presale");

    return (
        <div className='px-9 py-9 my-4'>
            <Info name={name} icon={icon} is_private={is_private} tags={tags} />

            <div className='mt-10'>
                <span className='font-medium text-sm text-gray dark:text-gray-dark'>
                    {description}
                </span>
            </div>

            <div className='mt-10 w-full flex rounded-[9px] px-[6px] py-[6px] bg-[#F5F1EB] font-medium text-sm text-dim-text dark:text-dim-text-dark'>
                <div className={`w-full cursor-pointer flex justify-center items-center py-2 ${slide === "Presale" ? "bg-white text-dark-text dark:text-light-text font-semibold dark:bg-dark-1" : ""}`}
                    onClick={() => setSlide("Presale")}>
                    <span className=''>
                        Presale
                    </span>
                </div>
                <div className={`w-full cursor-pointer flex justify-center items-center py-2 ${slide === "Token" ? "bg-white text-dark-text dark:text-light-text font-semibold dark:bg-dark-1" : ""}`}
                    onClick={() => setSlide("Token")}>
                    <span className=''>
                        Token
                    </span>
                </div>
            </div>

            <div className='mt-5'>
                <PreviewDetails name={"Presale Address"} value={address} />
                <PreviewDetails name={"Presale Starts on"} value={starts_on} />
            </div>
        </div>
    )
}
