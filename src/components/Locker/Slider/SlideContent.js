import React from 'react'

export default function SlideContent({ img1, img2 }) {
  return (
    <div className=" flex">
      <div className="w-1/2 pr-2">
        <img className="w-full" src={img1} alt="banner-1" />
      </div>

      <div className="w-1/2 flex justify-end pr-2">
        <img className="w-full" src={img2} alt="banner-2" />
      </div>
    </div>
  )
}
