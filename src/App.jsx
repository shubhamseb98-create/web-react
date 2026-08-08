import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { useLenis } from './hooks/useLenis'
import Preloader from './components/Preloader/Preloader'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Add a slight delay to ensure the DOM is fully rendered for Lenis
    const timer = setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }, 50)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

function App() {
  // Initialize Lenis smooth scroll globally
  useLenis()

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
