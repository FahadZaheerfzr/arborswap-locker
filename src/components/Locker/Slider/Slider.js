import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import SlideContent from './SlideContent'

const slide_images = [
  {
    img1: '/images/home/banner1.svg',
    img2: '/images/home/banner2.svg',
  },
  {
    img1: '/images/home/banner1.svg',
    img2: '/images/home/banner2.svg',
  },
  {
    img1: '/images/home/banner1.svg',
    img2: '/images/home/banner2.svg',
  },
]

export default function Carousel() {
  return (
    <CarouselProvider naturalSlideWidth={70} naturalSlideHeight={20} totalSlides={3} isPlaying={true} interval={3000}>
      <Slider>
        {slide_images.map((slide, index) => (
          <Slide key={index} index={index}>
            <SlideContent img1={slide.img1} img2={slide.img2} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}
