import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './Hero.module.css'

const slides = [
  {
    id: 1,
    title: 'Product Development with AI and Sustainable Design',
    description: 'Our report with MIT Technology Review Insights explores how AI can drive sustainable product design, reduce emissions, and future-proof innovation.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: 'Transforming Enterprises with Next-Gen Cloud',
    description: 'Empowering global businesses to achieve operational excellence, supreme agility, and robust security through cloud-native solutions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'Cybersecurity Strategies for a Connected World',
    description: 'Safeguard your digital assets and build resilient infrastructure with our cutting-edge zero-trust security frameworks.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  }
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`
          }
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideInner}>
              <div 
                className={styles.bgImage} 
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className={styles.overlay}></div>
              
              <div className={`container-fluid-px ${styles.content}`}>
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div 
                      className="col-12 col-xl-9 col-xxl-8"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1 className={styles.title}>{slide.title}</h1>
                      <p className={styles.description}>{slide.description}</p>
                      <a href={slide.link} className={styles.btnOutline}>
                        KNOW MORE
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation & Pagination UI (Right Side) */}
        <div className={styles.sliderControls}>
          <div className="custom-pagination"></div>
          <div className={styles.arrows}>
            <button className="custom-prev">&lt;</button>
            <div className={styles.divider}></div>
            <button className="custom-next">&gt;</button>
          </div>
        </div>
      </Swiper>
    </section>
  )
}

export default Hero
