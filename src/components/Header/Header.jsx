import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../../hooks/useScroll'
import styles from './Header.module.css'

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const isScrolled = useScrolled(80)
  const location = useLocation()

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState('')

  // Close side menu on route change
  useEffect(() => {
    setIsSideMenuOpen(false)
    setMobileDropdownOpen('')
  }, [location])

  // Lock html scroll when side menu is open
  useEffect(() => {
    const html = document.documentElement
    if (isSideMenuOpen) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
    }
    return () => { html.style.overflow = '' }
  }, [isSideMenuOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services/static-website-development', hasDropdown: true },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <>
      {/* Default Header - visible at top of page */}
      <header className={`${styles.header} ${isScrolled ? styles.headerHidden : ''}`}>
        <div className="container-fluid-px h-100 d-flex align-items-center justify-content-between">

          <Link to="/" className={styles.logo}>
            <img src="/assets/img/logo-new.png" alt="WebTycoons Logo" className={styles.logoImg} />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`d-none d-lg-flex align-items-center ${styles.desktopNav}`}>
            {navLinks.map((link) => (
              <div key={link.name} className={styles.navItemWrapper}>
                <Link to={link.path} className={`${styles.navLink} ${link.hasDropdown ? styles.hasDropdown : ''}`}>
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className={styles.dropdownMenu}>
                    <Link to="/services/static-website-development">Static Websites</Link>
                    <Link to="/services/dynamic-website-development">Dynamic Websites</Link>
                    <Link to="/services/e-commerce-website-development">E-Commerce</Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <Link to="/contact" className={styles.ctaButton}>
              {"Let's Talk"}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`d-lg-none ${styles.mobileToggle}`}
            onClick={() => setIsSideMenuOpen(true)}
            aria-label="Open Menu"
          >
            <HiMenuAlt4 size={28} />
          </button>

        </div>
      </header>

      {/* Floating Pill Button - appears when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className={styles.floatingPill}
            onClick={() => setIsSideMenuOpen(true)}
            initial={{ opacity: 0, scale: 0.7, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            aria-label="Open Menu"
          >
            <HiMenuAlt4 size={20} />
            <span>Menu</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Side Drawer Menu */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSideMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              className={styles.sideDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-lenis-prevent
            >
              {/* Drawer Header */}
              <div className={styles.drawerHeader}>
                <Link to="/" onClick={() => setIsSideMenuOpen(false)}>
                  <img src="/assets/img/logo-new.png" alt="WebTycoons Logo" className={styles.drawerLogo} />
                </Link>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsSideMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <HiX size={28} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className={styles.drawerNav} data-lenis-prevent>
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className={styles.drawerNavItemWrapper}
                    onMouseEnter={() => link.hasDropdown && setMobileDropdownOpen(link.name)}
                    onMouseLeave={() => link.hasDropdown && setMobileDropdownOpen('')}
                  >
                    <div className={styles.drawerNavItem}>
                      <Link
                        to={link.path}
                        className={styles.drawerNavLink}
                        onClick={() => setIsSideMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button 
                          className={styles.drawerDropdownToggle}
                          onClick={(e) => {
                            e.preventDefault()
                            setMobileDropdownOpen(mobileDropdownOpen === link.name ? '' : link.name)
                          }}
                        >
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            style={{ 
                              transform: mobileDropdownOpen === link.name ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown Options */}
                    {link.hasDropdown && (
                      <AnimatePresence>
                        {mobileDropdownOpen === link.name && (
                          <motion.div 
                            className={styles.drawerDropdownMenu}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link to="/services/static-website-development" className={styles.drawerDropdownLink}>Static Websites</Link>
                            <Link to="/services/dynamic-website-development" className={styles.drawerDropdownLink}>Dynamic Websites</Link>
                            <Link to="/services/e-commerce-website-development" className={styles.drawerDropdownLink}>E-Commerce</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              {/* Socials */}
              <div className={styles.drawerSocials}>
                <h6>STALK US</h6>
                <div className={styles.socialRow}>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  <a href="#" aria-label="YouTube"><FaYoutube /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
export default Header
