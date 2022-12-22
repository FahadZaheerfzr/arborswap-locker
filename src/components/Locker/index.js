import React, { useEffect } from 'react'
import { getLockList } from 'utils/getLockList'
import { Cards, Tokens } from '../../data/cards'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'
import Card from './CardView/Card'
import List from './ListView/List'

export default function LockerBase({ cardFormat, itemSelected }) {
  useDocumentTitle('Locker')

  const handleFetch = async () => {
    const data = await getLockList()
    console.log(data)
    return data
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return cardFormat === 'grid' ? (
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
  )
}
