import { motion } from 'framer-motion'
import { FaCheckCircle, FaInfoCircle, FaQuestionCircle, FaStar } from 'react-icons/fa'
import styles from './ServicePages.module.css'
import { fadeUp, staggerContainer } from '../../animations/variants'

const ServiceOverview = ({ data, image }) => {
  return (
    <section className={`py-100 ${styles.overviewSection}`}>
      <div className="container-fluid-px">
        <motion.div 
          className={styles.overviewModernGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Image Area */}
          <motion.div variants={fadeUp} className={styles.overviewImageSide}>
            <div className={styles.overviewImageWrapper}>
              {image ? (
                <img src={image} alt="Overview" className={styles.overviewImage} loading="lazy" />
              ) : (
                <div className={styles.overviewImagePlaceholder}></div>
              )}
              <div className={styles.overviewImageOverlay}>
                <h3 className={styles.overlayTitle}>Excellence in Every Pixel</h3>
                <p>Bringing your digital vision to life with precision and performance.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content Cards */}
          <div className={styles.overviewContentSide}>
            
            <motion.div variants={fadeUp} className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}><FaInfoCircle /></div>
              <div className={styles.overviewCardContent}>
                <h2 className={styles.overviewTitle}>What is this service?</h2>
                <p className={styles.overviewText}>{data.whatIsIt}</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}><FaQuestionCircle /></div>
              <div className={styles.overviewCardContent}>
                <h2 className={styles.overviewTitle}>Who needs it?</h2>
                <p className={styles.overviewText}>{data.whoNeedsIt}</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className={styles.overviewCard}>
              <div className={styles.overviewCardIcon}><FaStar /></div>
              <div className={styles.overviewCardContent}>
                <h2 className={styles.overviewTitle}>Why choose WebTycoons?</h2>
                <p className={styles.overviewText}>{data.whyChooseUs}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.overviewCard}>
              <div className={styles.overviewCardContent}>
                <h2 className={styles.overviewTitle}>Key Benefits</h2>
                <ul className={`list-unstyled ${styles.benefitsList}`}>
                  {data.benefits.map((benefit, idx) => (
                    <motion.li key={idx} variants={fadeUp} className={styles.benefitItem}>
                      <FaCheckCircle className={styles.benefitIcon} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceOverview
