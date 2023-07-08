import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
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

const schema = yup.object().shape({
  name: yup.string().required('Tên là bắt buộc'),
  email: yup.string().required('Email là bắt buộc').email('Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu quá ngắn - phải có ít nhất 8 ký tự'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp'),
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

function Register() {
  const navigate = useNavigate()
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const userCredential = await authApi.register(data.email, data.password)
      const user = userCredential?.uid

      if (!user) return null

      navigate('/manage-post')
      // user is now registered, you can set this user in your state or context
    } catch (error) {
      // handle error
      setError('alert', {
        type: 'server',
        message: error.message,
      })
      console.error('Error registering user: ', error)
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
        className='rounded shadow-lg'
        square
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
            Đăng ký
          </Typography>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label='Tên đầy đủ'
              name='name'
              autoComplete='name'
              autoFocus
              {...formRegister('name')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              {...formRegister('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Mật khẩu'
              type='password'
              id='password'
              autoComplete='current-password'
              {...formRegister('password')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='confirmPassword'
              label='Xác nhận mật khẩu'
              type='password'
              id='confirmPassword'
              {...formRegister('confirmPassword')}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
            />
            {errors.alert && (
              <Typography color='primary'>{errors?.alert?.message}</Typography>
            )}
            <SubmitButton
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size='1rem' /> : null}
            >
              {isSubmitting ? 'Đang đăng ký...' : 'Đăng ký'}
            </SubmitButton>
          </Form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Register
