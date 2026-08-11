import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { useLenis } from './hooks/useLenis'
import Preloader from './components/Preloader/Preloader'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Force unlock scroll and start Lenis synchronously on route change
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    if (window.lenis) {
      window.lenis.start()
    }

    // Add a slight delay to ensure the DOM is fully rendered for Lenis & GSAP
    const timer = setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
      // Force GSAP to recalculate pinned element heights on the new page
      ScrollTrigger.refresh()
    }, 100)
    
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
