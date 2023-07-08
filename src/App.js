import 'animate.css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './App.css'
import Layout from './components/Layout'

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import routes from './routes'

const theme = extendTheme({
  palette: {
    primary: {
      main: '#ae1c3f',
    },
  },
})

// Define all special routes in a Set for efficient lookup
const specialRoutes = new Set(['/login', '/register'])

const MainApp = () => {
  const location = useLocation()
  const path = location.pathname

  // Check if the path exists in the Set
  const isSpecialRouteHeader = specialRoutes.has(path)
  const isSpecialRouteFooter = path === '/manage-post'

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CssVarsProvider theme={theme}>
        {!isSpecialRouteHeader && <Header />}
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
        {!isSpecialRouteFooter && <Footer />}
      </CssVarsProvider>
    </Suspense>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}

export default App
