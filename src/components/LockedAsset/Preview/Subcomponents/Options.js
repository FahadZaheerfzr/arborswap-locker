import React from 'react'

export default function Options({width, height, color}) {
  return (
    <div className={`flex justify-center items-center ${width} ${height} bg-${color} gap-1`}>
        <div className='w-1 h-1 bg-dark-text rounded-full' />
        <div className='w-1 h-1 bg-dark-text rounded-full' />
        <div className='w-1 h-1 bg-dark-text rounded-full' />
    </div>
  )
}
