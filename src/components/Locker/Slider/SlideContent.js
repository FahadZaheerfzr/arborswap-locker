import React from 'react'

export default function SlideContent({ img1, img2, img3 }) {
  return (
    <div className=" flex gap-7">
      <div className="w-1/3 pr-2">
        <img className="w-full" src={img1} alt="banner-1" />
      </div>

      <div className="w-1/3 flex justify-end pr-2">
        <img className="w-full" src={img2} alt="banner-2" />
      </div>

      <div className="w-1/3 flex justify-end pr-2">
        <img className="w-full" src={img3} alt="banner-3" />
      </div>
    </div>
  )
}
