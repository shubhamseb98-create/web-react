import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from '../../animations/variants'
import styles from './AboutCompany.module.css'

const AboutCompany = () => {
  return (
    <section className={styles.section} id="about">
      <div className="container-fluid-px">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <motion.div 
            className={`col-12 col-lg-6 ${styles.contentWrapper}`}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <h2 className="mb-4">
                <span className={styles.titleHighlight}>Scale at Speed™</span>
                <span className={styles.titleSecondary}>with WebTycoons</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeUp} className={styles.text}>
              Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.
            </motion.p>
            
            <motion.div variants={fadeUp} className={styles.buttonGroup}>
              <a href="#contact" className={styles.primaryBtn}>
                KNOW MORE
              </a>
              <a href="#about" className={styles.outlineBtn}>
                OUR BRAND STORY
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Abstract Visual / Image */}
          <motion.div 
            className={`col-12 col-lg-6 p-0 ${styles.imageCol}`}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/assets/img/about-us-it-company.png" 
                alt="WebTycoons IT Company" 
                className={styles.image} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
