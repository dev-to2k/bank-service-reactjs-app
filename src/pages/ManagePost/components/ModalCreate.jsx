import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

export default function ModalCreate({
  open,
  onSubmit,
  setIsOpenModalCreate,
  setValue,
  handleSubmit,
  register,
  isSubmitting,
}) {
  React.useEffect(() => {
    setValue('title', 'Title example')
    setValue('description', 'Description example')
    setValue('content', 'Content example')
  }, [setValue])

  const onClose = () => setIsOpenModalCreate(false)

  const handleFormSubmit = (data) => {
    onSubmit(data)
    onClose()
  }

  if (!open) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: '100%',
        },
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogTitle id='alert-dialog-title' textAlign='center' fontSize={24}>
          {'Tạo bài viết'}
        </DialogTitle>
        <DialogContent className='w-100'>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Tiêu đề
            </label>
            <input
              type='text'
              className='form-control'
              id='title'
              {...register('title')}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='image_upload' className='form-label'>
              Upload hình ảnh
            </label>
            <input
              type='file'
              className='form-control'
              id='image_upload'
              {...register('image_upload')}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='image_url' className='form-label'>
              Đường dẫn URL:
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='https://example.com/image.png'
              id='image_url'
              {...register('image_url')}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Mô tả
            </label>
            <input
              type='text'
              className='form-control'
              id='description'
              {...register('description')}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='content' className='form-label'>
              Nội dung
            </label>
            <textarea
              className='form-control'
              id='content'
              {...register('content')}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant='text'>
            Huỷ bỏ
          </Button>
          <Button type='submit' autoFocus variant='contained'>
            {isSubmitting ? 'Đang tạo...' : 'Tạo mới'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
