import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import MainLayout from '../layouts/MainLayout'

// Lazy load pages for performance
const HomePage = lazy(() => import('../pages/HomePage'))
const StaticWebsitePage = lazy(() => import('../pages/Services/StaticWebsitePage'))
const DynamicWebsitePage = lazy(() => import('../pages/Services/DynamicWebsitePage'))
const EcommerceWebsitePage = lazy(() => import('../pages/Services/EcommerceWebsitePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const BlogDetailsPage = lazy(() => import('../pages/BlogDetailsPage'))

// Fallback loader
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050510' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/static-website-development" element={<StaticWebsitePage />} />
          <Route path="/services/dynamic-website-development" element={<DynamicWebsitePage />} />
          <Route path="/services/e-commerce-website-development" element={<EcommerceWebsitePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
