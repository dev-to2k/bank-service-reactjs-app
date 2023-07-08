import { Box, Typography } from '@mui/material'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import DynamicIcon from './DynamicIcon'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

const MyCarousel = ({ items }) => {
  return (
    <Box className='text-center my-5'>
      <Typography variant='h4'>Chúng tôi có thể giúp gì cho bạn?</Typography>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        navigation={true}
        spaceBetween={30}
        slidesPerView={5}
        className='carousel p-5'
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ padding: 2 }}>
              <DynamicIcon
                iconName={item.icon}
                fontSize='large'
                color='secondary'
              />
              <Typography variant='subtitle2' className='mt-3' color='#ae1c3f'>
                {item.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default MyCarousel
