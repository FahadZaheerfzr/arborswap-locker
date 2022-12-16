import React from 'react'
import BackArrowSVG from '../../../svgs/back_arrow';
import PreviewHeader from '../../Common/PreviewHeader';
import HeadingTags from '../../TokenLocker/Subcomponents/HeadingTags'
import CalendarField from './Subcomponents/CalendarField';
import CurrencyOptions from './Subcomponents/CurrencyOption'
import DexOptions from './Subcomponents/DexOption';

import Input from './Subcomponents/Input';
import PresaleStandard from './Subcomponents/PresaleStandard';
import PresalePrivate from './Subcomponents/PresalePrivate';

const currencies = [
    {
        id: 1,
        name: 'Binance',
        symbol: 'BNB',
        icon: '/images/cards/bnb.svg',
    },
    {
        id: 2,
        name: 'Roburna',
        symbol: 'RBA',
        icon: '/images/cards/arb.svg',
    },
    {
        id: 3,
        name: 'Gnosis',
        symbol: 'GUSD',
        icon: '/images/cards/gusd.svg',
    },
    {
        id: 4,
        name: 'Tether',
        symbol: 'USDT',
        icon: '/images/cards/usdt.svg',
    },
]

export default function Presale({ setActive, saleType }) {
    const [currencySelected, setCurrencySelected] = React.useState(2);
    const [tempfixed, setTempFixed] = React.useState(true)
    const [dex, setDex] = React.useState(1);

    const handleTempFixed = () => {
        setTempFixed(!tempfixed)
    }

    return (
        <div className='w-full'>
            <HeadingTags name={'Choose Currency'} required />

            {/* Currency Options */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 md:mr-[20%]">
                {currencies.map((currency) => (
                    <CurrencyOptions key={currency.id} selected={currency.id === currencySelected} setCurrency={setCurrencySelected} {...currency} />
                ))}
            </div>

            <PreviewHeader heading={"Presale Details"} />

            <Input heading={'Presale Price'} currencies={currencies} currencySelected={currencySelected} />

            <div className="flex items-center gap-5 mt-10">
                <div className="w-1/2">
                    <Input heading={'Soft Cap'} currencies={currencies} currencySelected={currencySelected} />
                </div>

                <div className="w-1/2">
                    <Input heading={'Hard Cap'} currencies={currencies} currencySelected={currencySelected} />
                </div>
            </div>

            <div className="flex items-center gap-5 mt-10">
                <div className="w-1/2">
                    <Input heading={'Min Allocation'} currencies={currencies} currencySelected={currencySelected} />
                </div>

                <div className="w-1/2">
                    <Input heading={'Max Allocation'} currencies={currencies} currencySelected={currencySelected} />
                </div>
            </div>

            {saleType !== "fairlaunch" &&
                <div>
                    <div className="flex items-center justify-between mt-10">
                        <span className='text-gray dark:text-gray-dark font-semibold'>
                            Enable Whitelisting
                        </span>

                        <label htmlFor="whitelist-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                checked={tempfixed ? false : true}
                                id="whitelist-toggle"
                                className="sr-only peer"
                                onChange={handleTempFixed}
                            />
                            <div className="w-10 h-5 md:w-10 md:h-5 bg-primary-green bg-opacity-[0.08] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:md:top-[2px] after:left-[0] after:md:left-[4px] after:bg-white after:rounded-full after:h-4 after:md:h-4 after:w-4 after:md:w-4 after:transition-all  peer-checked:after:bg-primary-green" />
                        </label>
                    </div>

                    <div className="mt-5">
                        <span className='text-gray dark:text-gray-dark font-semibold text-sm'>
                            Note
                            <span className='font-medium'>
                                &nbsp;: When turned on Only Users you submit there address can participate
                            </span>
                        </span>
                    </div>
                </div>
            }

            <PreviewHeader heading={"Listing Details"} />
            <div className='mt-10'>
                <HeadingTags name={'Choose DEX to be listed on'} required />
            </div>

            <div className="flex items-center gap-5 mt-10 md:mr-[10%]">
                <DexOptions selected={dex === 1} id={1} setDex={setDex} name={'Arborswap'} icon={'/images/cards/arb.svg'} />
                <DexOptions selected={dex === 2} id={2} setDex={setDex} name={'Pancake'} icon={'/images/cards/pancake.svg'} />
            </div>

            <div className="flex items-center gap-5 mt-10">
                <div className="w-1/2">
                    <div className='hidden md:block'>
                        <Input heading={'Amount for Liquidity'} />
                    </div>
                    <div className='md:hidden'>
                        <Input heading={'Liquidity'} />
                    </div>
                </div>

                <div className="w-1/2">
                    <Input heading={'Listing Price'} currencies={currencies} currencySelected={currencySelected} />
                </div>
            </div>

            <PreviewHeader heading={"Time Details"} />

            <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
                <div className="w-full md:w-1/2">
                    <CalendarField heading={"Starts On (UTC)"} />
                </div>
                <div className="w-full md:w-1/2">
                    <CalendarField heading={"Ends On (UTC)"} />
                </div>
            </div>
            {saleType !== "private" &&
                <div>
                    <PreviewHeader heading={"More Details"} />
                    <PresaleStandard />
                </div>
            }

            {saleType === "private" &&
                <div>
                    <PreviewHeader heading={"Token Vesting Details"} />
                    <PresalePrivate />
                </div>
            }
            {saleType === "standard" &&
                <div className="flex justify-center mt-7 bg-[#E56060] bg-opacity-[0.08] py-3 rounded-[10px]">
                    <img src="/images/create-sale/warning.svg" alt='warning' />

                    <span className='text-[#E56060] font-medium text-sm'>
                        To Create this Sale <span className='font-bold'>300,000,485 SXP</span> is required.
                    </span>
                </div>
            }

            <div className="mt-10">
                <div className="flex justify-end items-center mb-10">

                    <button className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
                        onClick={() => setActive('Token Info')}>
                        <BackArrowSVG className="fill-dark-text dark:fill-light-text" />
                        <span className="font-gilroy font-medium text-sm text-dark-text dark:text-light-text">Go Back</span>
                    </button>


                    <button
                        className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md"
                        // disabled={address.length < 5}
                        onClick={() => setActive('Project Details')}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
