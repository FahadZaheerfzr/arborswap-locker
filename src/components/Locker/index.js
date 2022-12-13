import React, { useState } from 'react'
import { Cards } from '../../data/locked_cards';
import Card from './Card/Card';
import Carousel from './Slider/Slider'
import Button from './SubComponents/Button';
import ItemSwitch from './Switches/ItemSwitch';
import ViewSwitch from './Switches/ViewSwitch'

export default function LockerBase() {
    const [cardFormat, setCardFormat] = useState('grid');
    const [itemSelected, setItemSelected] = useState('liquidity');
    const [sortFilter, setSortFilter] = useState('');
    const [on, setOn] = useState(true)

    const handleToggle = () => {
        setOn(!on)
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full px-2 md:px-0 md:w-10/12'>
                <div className="md:hidden">
                    <Carousel mobileView/>
                </div>
                <div className="hidden md:block">
                    <Carousel />
                </div>

                <div className='w-full flex h-11 justify-between'>
                    <ViewSwitch cardFormat={cardFormat} setCardFormat={setCardFormat} />

                    <ItemSwitch itemSelected={itemSelected} setItemSelected={setItemSelected} />

                    <div className='px-5 py-3 rounded-md bg-white flex justify-center items-center'>
                        <span className='text-gray font-gilroy font-semibold text-sm'>
                            My Locks
                        </span>

                        <label htmlFor="lock-toggle" className="inline-flex relative items-center cursor-pointer ml-[10px]">
                            <input
                                type="checkbox"
                                value=""
                                checked={on ? false : true}
                                id="lock-toggle"
                                className="sr-only peer"
                                onChange={handleToggle}
                            />
                            <div className="w-7 h-4 bg-dim-text bg-opacity-20  peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[0.8px] after:bg-dim-text  after:rounded-full after:h-[13.5px] after:w-[13.5px] after:transition-all border-[#F5F1EB] " />
                        </label>
                    </div>
                    <div className='hidden md:block'>
                        <Button buttonText={"Sort By"} dropDownItems={['Floor Price', 'Items', 'Name (A-Z)', 'Name (Z-A)']}
                            filter={sortFilter} setFilter={setSortFilter} />
                    </div>
                    <div className='hidden md:flex items-center justify-between border-2 border-white bg-[#F5F1EB] rounded-md px-5 py-3'>
                        <input className='bg-transparent placeholder:text-dim-text focus:outline-none' placeholder='Search token or liquidity pair' />

                        <img className='ml-12' src='/images/topbar/search.svg' alt='search' />
                    </div>
                </div>

                <div className="flex justify-between md:hidden mt-5 h-11">
                    <Button buttonText={"Sort By"} dropDownItems={['Floor Price', 'Items', 'Name (A-Z)', 'Name (Z-A)']}
                        filter={sortFilter} setFilter={setSortFilter} />

                    <div className='flex items-center ml-5 justify-between border-2 border-white bg-[#F5F1EB] rounded-md py-3'>
                        <input className='pl-2 bg-transparent placeholder:text-dim-text focus:outline-none' placeholder='Search farms' />

                        <img className='relative -left-3' src='/images/topbar/search.svg' alt='search' />
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-7'>
                    {Cards.map((card, index) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>


        </div>
    )
}
