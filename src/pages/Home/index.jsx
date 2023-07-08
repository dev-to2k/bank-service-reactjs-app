import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import MyCarousel from '../../components/MyCarousel'
import MySlider from '../../components/MySlider'

function Home({ carouselItems, listProductNBat, listPost }) {
  return (
    <>
      <Grid item xs={12} className='w-100 mw-100 container px-0'>
        <MySlider />
      </Grid>
      <Grid item xs={12} className='w-100 mw-100 container'>
        <MyCarousel
          showDots={true}
          showButtonPrevAndNext={true}
          items={carouselItems}
          showItemsNumber={5}
          numberItemsTransition={1}
        />
      </Grid>
      <Grid
        container
        direction='row'
        rowSpacing={4}
        className='justify-content-between my-5 container product-nbat'
      >
        {listProductNBat.map((item, index) => (
          <Box
            key={index}
            className='text-center product-item w-25 p-3'
            style={{ flexGrow: 1 }}
          >
            <img
              src={item.imgUrl}
              className='img-fluid'
              height={200}
              alt={item.title}
            />
            <Typography
              variant='h6'
              className='mt-3'
              gutterBottom
              color='#ae1c3f'
            >
              {item.title}
            </Typography>
            <Typography variant='body2' className='text-break my-3'>
              {item.description}
            </Typography>
            <Button
              variant='outlined'
              className='py-2 px-4 border btn'
              style={{ textTransform: 'none' }}
            >
              <Typography>Tìm hiểu thêm</Typography>
            </Button>
          </Box>
        ))}
      </Grid>
      <Divider variant='middle' />
      <Grid container direction='row' className='container mt-5'>
        <Box className='d-flex align-items-center justify-content-between w-100 mb-3'>
          <Typography variant='h5' gutterBottom>
            Sản phẩm và dịch vụ
          </Typography>
          <Box className='d-flex'>
            <Typography variant='subtitle1' className='me-2' gutterBottom>
              Theo dõi chúng tôi:
            </Typography>
            <FacebookIcon fontSize='medium' style={{ color: '#ae1c3f' }} />
            <YouTubeIcon fontSize='medium' style={{ color: '#ae1c3f' }} />
          </Box>
        </Box>
        <Grid container spacing={3} rowGap={5}>
          {listPost.map((item, index) => (
            <Grid item xs={3} key={index} height={420}>
              <img
                src={item.imgUrl}
                className='img-fluid w-100'
                height={200}
                alt={item.title}
              />
              <Box className='d-flex flex-column'>
                <Typography
                  variant='subtitle1'
                  textTransform='uppercase'
                  className='mt-2'
                  style={{ color: '#ae1c40' }}
                  gutterBottom
                >
                  {item.typePost}
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Home
