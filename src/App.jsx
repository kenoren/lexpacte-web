import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import EmailCapture from './components/EmailCapture'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0C2A4D] transition-colors duration-300">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <EmailCapture />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
