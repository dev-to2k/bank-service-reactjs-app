import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const CustomLink = ({ to, onClick, color, children }) => (
  <NavLink
    to={to}
    style={() => ({ color })}
    onClick={onClick}
    className={({ isActive, isPending }) => {
      const state = isPending ? 'pending' : isActive ? 'active' : ''

      return `drawer-link ${state}`
    }}
  >
    {children}
  </NavLink>
)

function CustomDrawer({ drawerOpen, handleDrawerToggle, isAuthenticated }) {
  // Mục trang chủ và bài viết sẽ luôn được hiển thị
  const commonItems = [
    {
      title: 'Trang chủ',
      path: '/',
      icon: 'HomeIcon',
    },
    {
      title: 'Bài viết',
      path: '/posts',
      icon: 'ArticleIcon',
    },
  ]

  // Mục cho người dùng chưa đăng nhập
  const loggedOutItems = [
    {
      title: 'Đăng nhập',
      path: '/login',
      icon: 'LoginIcon',
    },
    {
      title: 'Đăng ký',
      path: '/register',
      icon: 'RegisterIcon',
    },
  ]

  // Mục cho người dùng đã đăng nhập
  const loggedInItems = [
    {
      title: 'Quản lý bài viết',
      path: '/manage-posts',
      icon: 'SettingsIcon',
    },
    {
      title: 'Đăng xuất',
      path: '/logout',
      icon: 'LogoutIcon',
    },
    // ví dụ về mục chào mừng người dùng
    {
      title: `Xin chào, Trung!`,
      path: '/profile',
      icon: 'ProfileIcon',
    },
  ]

  const titleProductAndService = [
    ...commonItems,
    ...(isAuthenticated ? loggedInItems : loggedOutItems),
  ]

  return (
    <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
      <List className='p-3'>
        {titleProductAndService.map((item, index) => (
          <CustomLink
            to={item.path}
            key={index}
            onClick={handleDrawerToggle}
            color='#a51739'
          >
            <ListItem className='rounded mb-1'>
              <ListItemText primary={item.title} />
            </ListItem>
          </CustomLink>
        ))}
      </List>
    </Drawer>
  )
}

export default CustomDrawer
