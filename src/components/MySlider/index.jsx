import { faker } from '@faker-js/faker'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.css'

export default function MySlider() {
  const slides = Array.from({ length: 10 }).map(() =>
    faker.image.urlPicsumPhotos(400, 400)
  )

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      autoplay={true}
      className='my-slider'
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ height: 400 }}>
          <img src={slide} alt='slide' className='img-fluid object-fit-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
