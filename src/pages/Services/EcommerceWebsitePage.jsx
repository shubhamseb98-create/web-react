import { useEffect } from 'react'
import { servicesData, whyChooseUsGlobal, ecommercePortfolioProjects, ecommerceTestimonials } from '../../data/servicesData'
import ServiceHero from '../../components/ServicePages/ServiceHero'
import ServiceOverview from '../../components/ServicePages/ServiceOverview'
import ServiceFeatures from '../../components/ServicePages/ServiceFeatures'
import TechnologiesSection from '../../components/Sections/TechnologiesSection'
import ServicePortfolio from '../../components/ServicePages/ServicePortfolio'
import DevelopmentProcess from '../../components/ServicePages/DevelopmentProcess'
import WhyChooseUsIconCards from '../../components/ServicePages/WhyChooseUsIconCards'
import ServiceFAQs from '../../components/ServicePages/ServiceFAQs'
import ServiceTestimonials from '../../components/ServicePages/ServiceTestimonials'
import ServiceCTA from '../../components/ServicePages/ServiceCTA'

const EcommerceWebsitePage = () => {
  useEffect(() => {
    document.title = 'E-Commerce Website Development | WebTycoons'
  }, [])

  const data = servicesData.ecommerce

  return (
    <main>
      <ServiceHero data={data.hero} breadcrumbTitle="E-Commerce Websites" />
      <ServiceOverview data={data.overview} image={data.hero.image} />
      <ServiceFeatures features={data.features} />
      <TechnologiesSection />
      <ServicePortfolio projects={ecommercePortfolioProjects} />
      <DevelopmentProcess processSteps={data.process} />
      <WhyChooseUsIconCards reasons={whyChooseUsGlobal} />
      <ServiceFAQs faqs={data.faqs} />
      <ServiceTestimonials testimonials={ecommerceTestimonials} />
      <ServiceCTA />
    </main>
  )
}

export default EcommerceWebsitePage
