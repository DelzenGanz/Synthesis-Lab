import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'

function App() {
  return (
    <div className="bg-bg text-textMain min-h-screen relative">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      {/* Gradient divider: bg → bg2 */}
      <div className="h-24 bg-gradient-to-b from-bg to-bg2" />
      <Services />
      <Works />
      {/* Gradient divider: bg → bg2 for Process */}
      <div className="h-24 bg-gradient-to-b from-bg to-bg2" />
      <Process />
      {/* Gradient divider: bg2 → bg */}
      <div className="h-24 bg-gradient-to-b from-bg2 to-bg" />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
