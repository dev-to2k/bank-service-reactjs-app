// Layout.js
import { CssBaseline, Grid } from '@mui/material'
import React from 'react'
import './style.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction='row' className='mw-100 w-100'>
        {children}
      </Grid>
    </React.Fragment>
  )
}

export default Layout
