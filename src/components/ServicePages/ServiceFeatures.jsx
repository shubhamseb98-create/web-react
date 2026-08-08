import { motion } from 'framer-motion'
import styles from './ServicePages.module.css'
import { fadeUp, staggerContainer } from '../../animations/variants'
import SectionHeading from '../SectionHeading/SectionHeading'

const ServiceFeatures = ({ features }) => {
  return (
    <section className={`py-100 ${styles.featuresSection}`}>
      <div className="container-fluid-px">
        <SectionHeading 
          subtitle="KEY CAPABILITIES" 
          title="Premium Features" 
          center={true} 
        />
        
        <motion.div 
          className={styles.featuresGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div key={idx} variants={fadeUp} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Icon />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceFeatures
