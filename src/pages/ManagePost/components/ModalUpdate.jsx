import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import React from 'react'
import { isEmpty } from '../../../helper/functions'

function ModalUpdate({
  open,
  onSubmit,
  setIsOpenModalUpdate,
  setValue,
  handleSubmit,
  register,
  isSubmitting,
  postEdit,
  setPostEdit,
}) {
  React.useEffect(() => {
    if (!isEmpty(postEdit)) {
      setValue('id', postEdit.id)
      setValue('title', postEdit.title)
      setValue('description', postEdit.description)
      setValue('content', postEdit.content)
    } else {
      setValue('title', 'Title example')
      setValue('description', 'Description example')
      setValue('content', 'Content example')
    }
  }, [postEdit, setPostEdit, setValue])

  const onClose = () => setIsOpenModalUpdate(false)

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
          {'Cập nhật bài viết'}
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
            {isSubmitting ? 'Đang cập nhật...' : 'Cập nhật'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ModalUpdate
