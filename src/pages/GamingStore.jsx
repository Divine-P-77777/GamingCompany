import React from 'react'
import HeroSection from './sections/HeroSection'
import GamesSection from './sections/GamesSection'
import AboutSection from './sections/AboutSection'
import ReviewsSection from './sections/ReviewsSection'
import ContactSection from './sections/ContactSection'

const GamingStore = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <GamesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  )
}

export default GamingStore