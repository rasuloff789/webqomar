import { useTranslation } from '../hooks/useTranslation'
import './Register.css'

function Register() {
  const { t } = useTranslation()

  return (
    <div className="register">
      {/* Header Section */}
      <section className="register-header">
        <div className="container">
          <h1 className="page-title">{t.register.title}</h1>
          <p className="page-subtitle">
            {t.register.subtitle}
          </p>
        </div>
      </section>

      {/* Registration Info Section */}
      <section className="section register-section">
        <div className="container">
          <div className="register-content">
            <div className="register-info">
              <h2>{t.register.howToEnroll}</h2>
              <p>
                {t.register.enrollText}
              </p>
              <div className="info-box">
                <h3>{t.register.quickContact}</h3>
                <p>{t.register.quickContactText}</p>
                <a 
                  href="https://t.me/qomaradmin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="telegram-button"
                >
                  {t.register.contactTelegram}
                </a>
              </div>
              <div className="course-types">
                <h3>{t.register.availableCourses}</h3>
                <ul>
                  <li>{t.register.onlineOneOnOne}</li>
                  <li>{t.register.onlineGroup}</li>
                  <li>{t.register.offlineIstanbul}</li>
                  <li>{t.register.quranMemorization}</li>
                  <li>{t.register.islamicStudies}</li>
                  <li>{t.register.arabicLanguage}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
