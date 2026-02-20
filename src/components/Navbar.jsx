import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src={logo} alt="Qomar Quran Center Logo" className="logo-icon" />
            <div className="logo-text-container">
              <span className="logo-text">Qomar Quran</span>
              <span className="logo-subtitle">International Center</span>
            </div>
          </Link>
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
                  {t.nav.donate}
                </Link>
              </li>
            </ul>
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                title="English"
              >
                🇬🇧
              </button>
              <button
                className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
                onClick={() => changeLanguage('tr')}
                title="Türkçe"
              >
                🇹🇷
              </button>
              <button
                className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
                onClick={() => changeLanguage('uz')}
                title="O'zbekcha"
              >
                🇺🇿
              </button>
              <button
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
                title="Русский"
              >
                🇷🇺
              </button>
              <button
                className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
                onClick={() => changeLanguage('ar')}
                title="العربية"
              >
                🇸🇦
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

