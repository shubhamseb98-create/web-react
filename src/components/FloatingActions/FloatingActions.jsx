import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../../hooks/useScroll'
import styles from './FloatingActions.module.css'

const FloatingActions = () => {
  const isScrolled = useScrolled(200) // Show back to top after 200px

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Define contact numbers
  const whatsappNumber = "918527458950"
  const phoneNumber = "+918527458950"

  return (
    <div className={styles.floatingContainer}>
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.actionBtn} ${styles.whatsappBtn}`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call Button */}
      <a 
        href={`tel:${phoneNumber}`} 
        className={`${styles.actionBtn} ${styles.callBtn}`}
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            onClick={scrollToTop}
            className={`${styles.actionBtn} ${styles.topBtn}`}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}

export default FloatingActions
