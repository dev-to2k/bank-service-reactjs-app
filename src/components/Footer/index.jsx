import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Footer() {
  const listNavigation = [
    'Điều khoản sử dụng',
    'An toàn & Bảo mật',
    'Sơ đồ trang',
    'Webmail',
    'Đăng ký nhận tin',
    'English',
  ]
  return (
    <Box className='footer'>
      <Grid container direction='row' className='container py-4'>
        <Grid item xs={8}>
          <Box className='d-flex align-items-center justify-content-between mb-4'>
            {listNavigation.map((item, index) => (
              <Link key={index}>
                <Typography>{item}</Typography>
              </Link>
            ))}
          </Box>
          <Typography variant='body2' className='text-white opacity-75'>
            2019 Bản quyền thuộc về Ngân hàng Nông nghiệp và Phát triển Nông
            thôn Việt Nam
          </Typography>
          <Typography variant='body2' className='text-white opacity-75'>
            Hội sở: Số 2 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội
          </Typography>
          <Typography variant='body2' className='text-white opacity-75'>
            ĐT: 1900558818/(+84-24)32053205. Email: cskh@agribank.com.vn. Swift
            Code: VBAAVNVX
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography textAlign='right'>Theo dõi chúng tôi</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
