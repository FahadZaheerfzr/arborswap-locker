import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import SlideContent from './SlideContent'

const slide_images_mobile = [
  '/images/slider/banner1.svg',
  '/images/slider/banner2.svg',
  '/images/slider/banner3.svg',

  '/images/slider/banner1.svg',
  '/images/slider/banner2.svg',
  '/images/slider/banner3.svg',
  '/images/slider/banner1.svg',
  '/images/slider/banner2.svg',
  '/images/slider/banner3.svg',
]

const slide_images = [
  {
    img1: '/images/slider/banner1.svg',
    img2: '/images/slider/banner2.svg',
    img3: '/images/slider/banner3.svg',
  },
  {
    img1: '/images/slider/banner1.svg',
    img2: '/images/slider/banner2.svg',
    img3: '/images/slider/banner3.svg',
  },
  {
    img1: '/images/slider/banner1.svg',
    img2: '/images/slider/banner2.svg',
    img3: '/images/slider/banner3.svg',
  },
]

export default function Carousel({ mobileView }) {
  if (mobileView) {
    return (
      <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={40}
        totalSlides={9}
        isPlaying={true}
        interval={3000}
        visibleSlides={1.3}
      >
        <Slider>
          {slide_images_mobile.map((slide, index) => (
            <Slide key={index} index={index}>
              <SlideContent img1={slide} mobile />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    )
  }

  return (
    <CarouselProvider naturalSlideWidth={70} naturalSlideHeight={15} totalSlides={3} isPlaying={true} interval={3000}>
      <Slider>
        {slide_images.map((slide, index) => (
          <Slide key={index} index={index}>
            <SlideContent img1={slide.img1} img2={slide.img2} img3={slide.img3} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}
