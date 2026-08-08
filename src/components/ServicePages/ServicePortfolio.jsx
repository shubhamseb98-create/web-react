import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServicePages.module.css'
import { fadeUp } from '../../animations/variants'
import SectionHeading from '../SectionHeading/SectionHeading'

const ServicePortfolio = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(3)

  return (
    <section id="portfolio" className={`py-100 ${styles.portfolioSection}`}>
      <div className="container-fluid-px">
        <SectionHeading 
          subtitle="OUR PORTFOLIO"
          title={<>Everything You Need in a <span style={{ color: 'var(--clr-primary)' }}>Powerful</span> <br /> Dynamic Website</>} 
          center={true} 
        />

        <motion.div layout className={styles.portfolioGrid}>
          <AnimatePresence>
            {projects.slice(0, visibleCount).map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={styles.projectCard}
              >
                <div className={styles.projectImageWrapper}>
                  <div className={styles.liveBadge}>
                    <span className={styles.liveDot}></span> Live
                  </div>
                  <img src={project.image} alt={project.name} className={styles.projectImage} loading="lazy" />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <a href={project.link} className={styles.visitBtn}>
                    Visit &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length > 3 && (
          <div className="text-center mt-5 pt-4">
            <button 
              className="btnPrimary" 
              onClick={() => setVisibleCount(visibleCount === 3 ? projects.length : 3)}
            >
              {visibleCount === 3 ? 'Load More \u2192' : 'Show Less \u2190'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicePortfolio
