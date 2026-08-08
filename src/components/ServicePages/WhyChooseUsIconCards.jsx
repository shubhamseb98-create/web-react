import { motion } from 'framer-motion'
import styles from './ServicePages.module.css'
import { fadeUp, staggerContainer } from '../../animations/variants'
import SectionHeading from '../SectionHeading/SectionHeading'

const WhyChooseUsIconCards = ({ reasons }) => {
  return (
    <section className={`py-100 ${styles.whyChooseUsSection}`}>
      <div className="container-fluid-px">
        <SectionHeading 
          subtitle="WHY WEBTYCOONS" 
          title="The WebTycoons Advantage" 
          center={true} 
        />
        
        <motion.div 
          className={styles.iconCardsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div key={idx} variants={fadeUp} className={styles.iconCard}>
                <div className={styles.iconCardIcon}>
                  <Icon />
                </div>
                <div className={styles.iconCardContent}>
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsIconCards
