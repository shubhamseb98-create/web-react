import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '../../animations/variants'
import styles from './CallToAction.module.css'

const CallToAction = () => {
  return (
    <section className={`section-py ${styles.section}`}>
      <div className={styles.bgGlow}></div>
      <div className="container-fluid-px position-relative z-1">
        <div className="row justify-content-center text-center">
          <motion.div 
            className="col-12 col-xl-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <h2 className={styles.title}>
              Ready to redefine your <br /> digital future?
            </h2>
            <p className={styles.description}>
              Partner with WebTycoons to build scalable, secure, and human-centric digital experiences that propel your business forward.
            </p>
            <div className="mt-5 d-flex flex-wrap justify-content-center gap-4">
              <a href="#contact" className="btnPrimary">
                Let's Talk
              </a>
              <a href="#about" className="btnSecondary">
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
