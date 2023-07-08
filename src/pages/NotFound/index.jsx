import { styled } from '@mui/system'
import * as React from 'react'
import { Link } from 'react-router-dom'

const NotFoundContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
  color: '#333',
}))

const NotFoundHeading = styled('h2')(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '1rem',
}))

const NotFoundButton = styled('button')(({ theme }) => ({
  backgroundColor: '#ae1c3f',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.25rem',
  marginTop: '2rem',
}))

function NotFound() {
  return (
    <NotFoundContainer className='w-100'>
      <NotFoundHeading>404</NotFoundHeading>
      <p>Oops! Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to='/'>
        <NotFoundButton>Quay về trang chủ</NotFoundButton>
      </Link>
    </NotFoundContainer>
  )
}

export default NotFound
