import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

const SectionHeading = ({ subtitle, title, description, center = false, className = "mb-5" }) => {
  return (
    <motion.div 
      className={`${className} ${center ? 'text-center mx-auto' : ''}`}
      style={{ maxWidth: center ? '800px' : '100%' }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {subtitle && <span className="section-label d-inline-flex mb-2">{subtitle}</span>}
      <h2 className="section-heading mb-3">{title}</h2>
      {description && (
        <p className="section-description" style={{ color: 'var(--clr-text-light)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
