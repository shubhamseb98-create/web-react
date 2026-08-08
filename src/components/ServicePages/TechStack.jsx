import { motion } from 'framer-motion'
import styles from './ServicePages.module.css'
import { fadeUp, staggerContainer } from '../../animations/variants'
import SectionHeading from '../SectionHeading/SectionHeading'

const TechStack = ({ technologies }) => {
  return (
    <section className={`py-100 ${styles.techSection}`}>
      <div className="container-fluid-px">
        <SectionHeading 
          subtitle="TECHNOLOGY STACK" 
          title={<>Built With <span style={{ color: 'var(--clr-primary)' }}>Industry-Leading</span><br/>Technologies</>}
          description="We use only modern, well-supported technologies to ensure your website is fast, secure, and future-proof."
          center={true} 
        />
        
        <motion.div 
          className={styles.techPillContainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {technologies.map((tech, idx) => (
            <motion.div key={idx} variants={fadeUp} className={styles.techPill}>
              <img src={tech.logo} alt={tech.name} className={styles.techPillIcon} loading="lazy" />
              <span className={styles.techPillName}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
