import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo_agribank.png'
import CustomDrawer from '../CustomDrawer'
import DynamicIcon from '../DynamicIcon'
import './style.css'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState({
    isAuthenticated: false,
  })

  const { isAuthenticated } = user

  const listNavigation = [
    { label: 'Khách hàng cá nhân', href: '#' },
    { label: 'Khách hàng doanh nghiệp', href: '#' },
    { label: 'Định chế tài chính', href: '#' },
    { label: 'Về Agribank', href: '#' },
    { label: 'Tin tức', href: '#' },
    { label: 'Tuyển dụng', href: '#' },
    { label: 'Hỏi đáp', href: '#' },
    { label: 'Liên hệ', href: '#' },
  ]

  const titleProductAndService = [
    {
      icon: 'HomeIcon',
      title: 'Trang chủ',
      path: '/',
    },
    {
      title: 'Bài viết',
      path: '/posts',
      icon: 'ArticleIcon',
    },
    {
      title: 'Quản lý bài viết',
      path: '/manage-posts',
      icon: 'SettingsIcon',
    },
    {
      title: 'Bài viết đã lưu',
      path: '/saved-posts',
      icon: 'GradeIcon',
    },
  ]

  // Updated handlers
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setMenuOpen(false)
  }

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className='header'>
      <AppBar position='static' sx={{ backgroundColor: '#a51739' }}>
        <Toolbar style={{ minHeight: 30 }} className='justify-content-end'>
          {listNavigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '1rem',
              }}
            >
              <Typography fontSize={14} textAlign='right' sx={{ flexGrow: 1 }}>
                {item.label}
              </Typography>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <AppBar position='static' sx={{ backgroundColor: '#ae1c3f' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <CustomDrawer
            {...{ drawerOpen, handleDrawerToggle, isAuthenticated }}
          />
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <Button color='inherit'>
              Sản phẩm dịch vụ
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              PopoverClasses={{
                paper: 'menu-dropdown py-3',
              }}
              disableScrollLock={true}
              style={{
                position: 'inherit',
              }}
            >
              {titleProductAndService.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className='w-25'
                  style={{ color: '#a71117' }}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    className='justify-content-center flex-column align-items-center'
                  >
                    <DynamicIcon iconName={item.icon} fontSize='large' />
                    {item.title}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box className='flex-grow-1 text-center'>
            <img
              src={Logo}
              alt='logo'
              style={{ transform: 'translateX(60px)' }}
            />
          </Box>
          <Box className='me-2'>
            <LocalPhoneOutlinedIcon />
            <Typography variant='caption'>
              1900558818 / +842432053205
            </Typography>
          </Box>
          <IconButton
            color='inherit'
            aria-label='search'
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
          <IconButton color='inherit' aria-label='location'>
            <FmdGoodOutlinedIcon />
          </IconButton>
          <IconButton color='inherit' aria-label='log-in'>
            <LockOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isSearchOpen && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
          <input type='text' placeholder='Search...' />
        </div>
      )}
    </div>
  )
}
