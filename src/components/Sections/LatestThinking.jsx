import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { fadeUp, viewportOptions } from '../../animations/variants'
import styles from './LatestThinking.module.css'

const blogData = [
  {
    id: 1,
    category: 'BLOG | ARTIFICIAL INTELLIGENCE',
    title: 'From AI Adoption to AI Advantage',
    description: "Read our CEO's take on what AI makes newly possible for enterprises focused on the road ahead.",
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    gridArea: 'card-1' // tall left card
  },
  {
    id: 2,
    category: 'BLOG | BANKING AND FINANCIAL SERVICES',
    title: 'Open Banking at an Inflection Point: Why Banks Must Act Now',
    description: '',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    gridArea: 'card-2' // middle top
  },
  {
    id: 3,
    category: 'WHITEPAPER | ENERGY AND UTILITIES',
    title: 'Agentic AI for Oil and Gas Upstream Operations',
    description: '',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    gridArea: 'card-3' // right top
  },
  {
    id: 4,
    category: 'WHITEPAPER | CYBER SECURITY',
    title: 'Security by Design: A GenAI Model for Trust and Growth',
    description: '',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    gridArea: 'card-4' // middle bottom
  },
  {
    id: 5,
    category: 'BLOG | ARTIFICIAL INTELLIGENCE',
    title: 'Transforming Legacy Systems with Modern Cloud Architecture',
    description: '',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    gridArea: 'card-5' // right bottom
  }
];

const LatestThinking = () => {
  return (
    <section className={`py-100 ${styles.sectionWrapper}`}>
      <div className="container-fluid-px">
        
        {/* Header Section */}
        <div className={styles.headerArea}>
          <div className={styles.headerLeft}>
            <h2 className="section-heading mb-0" style={{ color: 'var(--clr-white)' }}>
              Latest Thinking
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerDesc}>
              Read what we're thinking. Research that uncovers what's next. 
              Perspectives that challenge the status quo. Ideas that help you see around corners.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className={styles.bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          {blogData.map((post) => (
            <div 
              key={post.id} 
              className={styles.blogCard} 
              style={{ gridArea: post.gridArea }}
            >
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.bgImage} />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.categoryBadge}>{post.category}</div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  {post.description && (
                    <p className={styles.cardDesc}>{post.description}</p>
                  )}
                  <div className={styles.readMore}>
                    Read More &rarr;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View All Blogs Button */}
        <div className={styles.viewMoreWrapper}>
          <Link to="/blog" className={styles.viewMoreBtn}>
            View All Blogs <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default LatestThinking
