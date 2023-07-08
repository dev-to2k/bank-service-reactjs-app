import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'

import moment from 'moment'
import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import postApi from '../../apis/post'
import LongText from '../../components/LongText'
import ModalCreate from './components/ModalCreate'
import ModalUpdate from './components/ModalUpdate'

function ManagePost() {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    getValues,
    formState: { isSubmitting },
  } = useForm()

  const allFieldValues = getValues()

  const [isOpenModalCreate, setIsOpenModalCreate] = React.useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = React.useState(false)
  const [postEdit, setPostEdit] = React.useState({})
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const res = await postApi.getListPosts()
        setPosts(res)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const handleAdd = async (data) => {
    try {
      const { image_upload, ...restData } = data
      const createPostPromise = postApi.createPost(restData)

      const newPosts = [data, ...posts]
      setPosts(newPosts)

      toast.promise(createPostPromise, {
        pending: 'Đang thêm...',
        success: 'Thêm thành công 🎉',
        error: 'Thêm thất bại 🤯',
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (data) => {
    try {
      const { image_upload, ...restData } = data
      const postUpdatePromise = postApi.updatePost(restData)

      const postEditedIndex = posts.findIndex((post) => post.id === data.id)

      const newPosts = [...posts]
      newPosts[postEditedIndex] = data
      setPosts(newPosts)

      toast.promise(postUpdatePromise, {
        pending: 'Đang cập nhật...',
        success: 'Cập nhật thành công 🎉',
        error: 'Cập nhật thất bại 🤯',
      })

      reset(allFieldValues)
    } catch (error) {
      console.log(error)
    }
  }

  const onEdit = (postId) => {
    // Handle post edit.
    const foundPost = posts.find((item) => item.id === postId)
    setPostEdit(foundPost)
    setIsOpenModalUpdate(true)
  }

  const handleDelete = async (postId) => {
    // Handle post delete.
    if (window.confirm('Bạn có chắc đã muốn xoá bài này chưa?')) {
      try {
        const newPosts = posts.filter((item) => item.id !== postId)
        setPosts(newPosts)

        const deletePostPromise = postApi.deletePost(postId)
        toast.promise(deletePostPromise, {
          pending: 'Đang xóa...',
          success: 'Xóa thành công 🎉',
          error: 'Xóa thất bại 🤯',
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const postsFiltered = useMemo(() => {
    if (!search) return posts

    return posts.filter((item) => item.title.includes(search.toLowerCase()))
  }, [search, posts])

  return (
    <div className='manage-posts w-100 container-fluid my-5'>
      <h1 className='fw-bold my-3 text-center'>Quản lý bài viết</h1>
      <div className='search_add d-flex align-items-center flex-column px-3'>
        <Button
          variant='contained'
          color='primary'
          className='my-3 ms-auto'
          startIcon={<AddIcon />}
          onClick={() => setIsOpenModalCreate(true)}
        >
          Tạo bài viết
        </Button>
        <div className='position-relative w-100'>
          <TextField
            label='Tìm kiếm'
            variant='outlined'
            className='w-100'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon
            className='position-absolute'
            style={{
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      </div>
      <div className='w-100 mx-auto px-3 mt-3'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tiêu đề</TableCell>
                <TableCell>Hình ảnh</TableCell>
                <TableCell>Mô tả</TableCell>
                <TableCell>Nội dung</TableCell>
                <TableCell>Ngày tạo</TableCell>
                <TableCell className='text-center'>Chức năng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={5} className='text-center'>
                    Đang tải...
                  </TableCell>
                </TableRow>
              )}

              {!isLoading && postsFiltered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className='text-center'>
                    Không tìm thấy dữ liệu
                  </TableCell>
                </TableRow>
              )}

              {!isLoading &&
                postsFiltered.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell width={200}>{post.title}</TableCell>
                    <TableCell>
                      <img
                        src={post.image_url}
                        className='img-fluid'
                        width={150}
                        alt={post.title}
                      />
                    </TableCell>
                    <TableCell width={250}>{post.description}</TableCell>
                    <TableCell width={250}>
                      <LongText content={post.content} limit={200} />
                    </TableCell>
                    <TableCell width={100}>
                      {moment.unix(post.createTimestamp).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell className='text-center'>
                      <Button
                        onClick={() => onEdit(post.id)}
                        className='me-3 bg-success text-white'
                        startIcon={<EditIcon />}
                      >
                        Sửa
                      </Button>
                      <Button
                        onClick={() => handleDelete(post.id)}
                        className='me-3 bg-danger text-white'
                        startIcon={<DeleteIcon />}
                      >
                        Xoá
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <ModalCreate
        open={isOpenModalCreate}
        setIsOpenModalCreate={setIsOpenModalCreate}
        onSubmit={handleAdd}
        {...{ handleSubmit, register, setValue, isSubmitting }}
      />

      <ModalUpdate
        open={isOpenModalUpdate}
        setIsOpenModalUpdate={setIsOpenModalUpdate}
        postEdit={postEdit}
        setPostEdit={setPostEdit}
        onSubmit={handleUpdate}
        {...{ handleSubmit, register, setValue, isSubmitting }}
      />
      <ToastContainer />
    </div>
  )
}

export default ManagePost
