import { useTranslation } from '../hooks/useTranslation'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="page-subtitle">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t.contact.howToContact}</h2>
              <p className="contact-intro">
                {t.contact.intro}
              </p>
              
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3>{t.contact.telegramChannel}</h3>
                <p className="contact-description">
                  {t.contact.telegramDescription}
                </p>
                <a 
                  href="https://t.me/qomarquranmarkazi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary telegram-contact-btn"
                >
                  {t.contact.contactTelegram}
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">👤</div>
                <h3>{t.contact.telegramAdmin}</h3>
                <p className="contact-description">
                  {t.contact.telegramAdminDescription}
                </p>
                <a 
                  href="https://t.me/qomaradmin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary telegram-contact-btn"
                >
                  {t.contact.contactAdmin}
                </a>
              </div>

              <div className="contact-note">
                <p>{t.contact.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

