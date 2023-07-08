import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import authApi from '../../apis/auth'
import { handleAuthError } from '../../helper/functions'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}))

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}))

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const getErrorField = (errorMessage) => {
    const errorFieldKeywords = {
      email: ['email', 'user'],
      password: ['password', 'pass', 'passwd', 'pwd'],
      // Add more fields here as needed
    }

    const lowerCaseMessage = errorMessage.toLowerCase()

    for (const field in errorFieldKeywords) {
      for (const keyword of errorFieldKeywords[field]) {
        if (lowerCaseMessage.includes(keyword)) {
          return field
        }
      }
    }

    // Default to 'email' if no specific field is found
    return 'email'
  }

  const onSubmit = async (data) => {
    try {
      const userCredential = await authApi.login(data.email, data.password)
      const user = userCredential?.uid

      if (!user) return null

      navigate('/manage-post')
      // User is signed in
      // You can access user data here
    } catch (error) {
      console.log(error)
      const errorMessage = handleAuthError(error)
      const errorField = getErrorField(errorMessage)

      setError(errorField, {
        type: 'server',
        message: errorMessage,
      })
    }
  }

  return (
    <Grid
      container
      className='h-100 align-items-center justify-content-center bg-light'
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={StyledPaper}
        square
        className='rounded shadow-lg justify-content-center'
      >
        <Box
          sx={{
            mt: 8,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Đăng nhập
          </Typography>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('email')}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('password')}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <SubmitButton
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              Đăng nhập
            </SubmitButton>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item columnGap={1} className='d-flex align-items-center'>
                <Typography variant='body2'>Bạn chưa có tài khoản?</Typography>
                <Link href='/register' variant='body2'>
                  Đăng ký
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant='body2' color='text.secondary' align='center'>
                {'Quay lại '}
                <Link color='#ae1c3f' href='/'>
                  Trang chủ
                </Link>
              </Typography>
              <Typography variant='body2' color='text.secondary' align='center'>
                {'Hoặc liên hệ qua '}
                <Link color='inherit' href='mailto:info@example.com'>
                  Email
                </Link>
                {' hoặc '}
                <Link color='inherit' href='tel:+1234567890'>
                  Số điện thoại
                </Link>
              </Typography>
            </Box>
          </Form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
