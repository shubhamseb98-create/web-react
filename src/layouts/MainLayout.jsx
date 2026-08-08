import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FloatingActions from '../components/FloatingActions/FloatingActions'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default MainLayout
