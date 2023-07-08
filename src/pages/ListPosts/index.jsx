import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import postApi from '../../apis/post'
import './style.css'

function ListPosts() {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const res = await postApi.getListPosts()
        setPosts(res)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const postsFiltered = React.useMemo(() => {
    if (!search) return posts

    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }, [search, posts])

  return (
    <div className='list-posts container'>
      <div className='list-posts__search position-relative my-3'>
        <input
          type='text'
          placeholder='Tìm kiếm...'
          value={search}
          className='form-control'
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

      {loading && (
        <div className='loading'>
          <div className='loader'>Đang tải..</div>
        </div>
      )}

      {!loading && postsFiltered.length === 0 && (
        <div className='list-posts__empty'>Không có bài viết nào.</div>
      )}

      {!loading && postsFiltered.length > 0 && (
        <div className='list-posts__container row align-items-stretch'>
          {postsFiltered.map((post) => (
            <div className='list-posts__item col-3' key={post.id}>
              <div className='card h-100'>
                <Link
                  to='/'
                  className='list-posts__item__image overflow-hidden'
                >
                  <img
                    src={post.image_url}
                    class='card-img-top'
                    height={150}
                    alt={post.title}
                  />
                </Link>
                <div className='list-posts__item__content card-body'>
                  {post.title && (
                    <h3 className='list-posts__item__content__title card-title fs-6'>
                      {post.title}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListPosts
