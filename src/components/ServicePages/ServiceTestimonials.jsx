import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'
import { FaQuoteRight } from 'react-icons/fa'
import styles from './ServicePages.module.css'
import { fadeUp, staggerContainer } from '../../animations/variants'
import SectionHeading from '../SectionHeading/SectionHeading'

const ServiceTestimonials = ({ testimonials }) => {
  return (
    <section className={`py-100 ${styles.testimonialsSection}`}>
      <div className="container-fluid-px">
        <SectionHeading 
          subtitle="CLIENT SUCCESS" 
          title="What Our Clients Say" 
          center={true} 
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className={`pb-5 ${styles.testimonialSwiper}`}
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <motion.div variants={fadeUp} className={styles.testimonialCard}>
                  <FaQuoteRight className={styles.quoteIcon} />
                  <p className={styles.testimonialText}>"{test.text}"</p>
                  <div>
                    <h5 className={styles.testimonialAuthor}>{test.author}</h5>
                    <span className={styles.testimonialRole}>{test.role}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceTestimonials
