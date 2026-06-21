import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveAssessment from './components/LiveAssessment'
import CustomCursor from './components/CustomCursor'
import ThemeSelector from './components/ThemeSelector'
import Companies from './components/Companies'
import Stats from './components/Stats'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingMascot from './components/FloatingMascot'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="app">
      <CustomCursor />
      <ThemeSelector />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <LiveAssessment />
          <Companies />
          <Stats />
          <Features />
          <Showcase />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <BackToTop />
        <FloatingMascot />
      </div>
    </div>
  )
}

export default App
