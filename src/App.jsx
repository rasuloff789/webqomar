import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import PremiumLanding from './pages/PremiumLanding'

function AppContent() {
  const location = useLocation()
  const isPremiumLanding = location.pathname === '/courses/premium'

  if (isPremiumLanding) {
    return (
      <Routes>
        <Route path="/courses/premium" element={<PremiumLanding />} />
      </Routes>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  )
}

export default App

