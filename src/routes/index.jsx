// routes.js
import { lazy } from 'react'
import { carouselItems, listPost, listProductNBat } from '../helper/mockData'
import Login from '../pages/Login'
import Register from '../pages/Register'
const Home = lazy(() => import('../pages/Home'))
const ListPosts = lazy(() => import('../pages/ListPosts'))
const PostDetail = lazy(() => import('../pages/PostDetail'))
const ManagePost = lazy(() => import('../pages/ManagePost'))
const SavedPosts = lazy(() => import('../pages/SavedPosts'))

const routes = [
  {
    path: '/',
    element: <Home {...{ carouselItems, listProductNBat, listPost }} />,
    key: 'home',
  },
  { path: 'posts', element: <ListPosts />, key: 'listPosts' },
  { path: 'posts/:postId', element: <PostDetail />, key: 'postDetail' },
  { path: 'manage-posts', element: <ManagePost />, key: 'managePost' },
  { path: 'saved-posts', element: <SavedPosts />, key: 'savedPosts' },
  { path: 'login', element: <Login />, key: 'login' },
  { path: 'register', element: <Register />, key: 'register' },
]

export default routes
