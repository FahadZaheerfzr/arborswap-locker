import React from 'react'

export default function ListInfo({ heading, value }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center">
        <span className="font-medium text-xs text-gray dark:text-gray-dark">{heading}</span>
        <img className="ml-[10px]" src="/images/lists/question.svg" alt="info" />
      </div>

      <span className="font-bold mt-1 text-sm font-gilroy text-dark-text dark:text-light-text">{value}</span>
    </div>
  )
}
