import React, { useState } from 'react'
import { Cards, Tokens } from '../../data/cards'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import SearchSVG from '../../svgs/search'
import Card from './CardView/Card'
import List from './ListView/List'
import Carousel from './Slider/Slider'
import Button from './SubComponents/Button'
import ItemSwitch from './Switches/ItemSwitch'
import ViewSwitch from './Switches/ViewSwitch'

export default function LockerBase() {
  useDocumentTitle('Locker')
  const [cardFormat, setCardFormat] = useState('grid')
  const [itemSelected, setItemSelected] = useState('liquidity')
  const [sortFilter, setSortFilter] = useState('')
  const [on, setOn] = useState(true)

  const handleToggle = () => {
    setOn(!on)
  }

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full px-2 md:px-0 md:w-10/12">
        <div className="md:hidden">
          <Carousel mobileView />
        </div>
        <div className="hidden md:block">
          <Carousel />
        </div>

        <div className="w-full flex h-11 justify-between">
          <ViewSwitch cardFormat={cardFormat} setCardFormat={setCardFormat} />

          <ItemSwitch itemSelected={itemSelected} setItemSelected={setItemSelected} />

          <div className="px-5 py-3 rounded-md bg-white dark:bg-dark-1 flex justify-center items-center">
            <span className="text-gray dark:text-gray-dark font-gilroy font-semibold text-sm">My Locks</span>

            <label htmlFor="lock-toggle" className="inline-flex relative items-center cursor-pointer ml-[10px]">
              <input
                type="checkbox"
                value=""
                checked={on ? false : true}
                id="lock-toggle"
                className="sr-only peer"
                onChange={handleToggle}
              />
              <div className="w-7 h-4 bg-dim-text  bg-opacity-20  peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[0.8px] after:bg-dim-text after:dark:bg-dim-text-dark  after:rounded-full after:h-[13.5px] after:w-[13.5px] after:transition-all border-[#F5F1EB] " />
            </label>
          </div>
          <div className="hidden md:block relative z-10">
            <Button
              buttonText={'Sort By'}
              dropDownItems={['Floor Price', 'Items', 'Name (A-Z)', 'Name (Z-A)']}
              filter={sortFilter}
              setFilter={setSortFilter}
            />
          </div>
          <div className="hidden md:flex items-center justify-between border-2 border-white dark:border-dark-1 bg-[#F5F1EB] dark:bg-dark-3 rounded-md px-5 py-3">
            <input
              className="bg-transparent placeholder:text-dim-text dark:placeholder:text-dim-text-dark focus:outline-none w-60"
              placeholder="Search token or liquidity pair"
            />

            <SearchSVG className="fill-dark-text dark:fill-light-text" />
          </div>
        </div>

        <div className="flex justify-between md:hidden mt-5 h-11 relative z-10">
          <Button
            buttonText={'Sort By'}
            dropDownItems={['Floor Price', 'Items', 'Name (A-Z)', 'Name (Z-A)']}
            filter={sortFilter}
            setFilter={setSortFilter}
          />

          <div className="flex items-center ml-5 justify-between border-2 border-white dark:border-dark-1 bg-[#F5F1EB] dark:bg-dark-3 rounded-md py-3">
            <input
              className="pl-2 bg-transparent placeholder:text-dim-text dark:placeholder:text-dim-text-dark focus:outline-none"
              placeholder="Search farms"
            />

            <SearchSVG className="relative -left-3 fill-dark-text dark:fill-light-text" />
          </div>
        </div>

        {cardFormat === 'grid' ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
            {itemSelected === 'liquidity' &&
              Cards.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  name1={card.name1}
                  name2={card.name2}
                  icon1={card.icon1}
                  icon2={card.icon2}
                  amount={card.amount}
                  amountUSD={card.amountUSD}
                  unlock_date={card.unlock_date}
                />
              ))}

            {itemSelected === 'token' &&
              Tokens.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  name1={card.name1}
                  icon1={card.icon1}
                  token={card.token}
                  amount={card.amount}
                  amountUSD={card.amountUSD}
                  unlock_date={card.unlock_date}
                />
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 gap-5 mt-7">
            {itemSelected === 'liquidity' &&
              Cards.map((card) => (
                <List
                  key={card.id}
                  name1={card.name1}
                  name2={card.name2}
                  icon1={card.icon1}
                  icon2={card.icon2}
                  amount={card.amount}
                  unlock_date={card.unlock_date}
                />
              ))}

            {itemSelected === 'token' &&
              Tokens.map((card) => (
                <List
                  key={card.id}
                  name1={card.name1}
                  icon1={card.icon1}
                  token={card.token}
                  amount={card.amount}
                  unlock_date={card.unlock_date}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
