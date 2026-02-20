import { useTranslation } from '../hooks/useTranslation'
import logo from '../assets/logo.png'
import './AboutUs.css'

function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className="about-us">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">{t.aboutUs.title}</h1>
          <p className="page-subtitle">
            {t.aboutUs.subtitle}
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section featured-video-section">
        <div className="container">
          <div className="featured-video-container">
            <video
              src="/IMG_0813.mp4"
              controls
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>{t.aboutUs.ourMission}</h2>
              <p>
                {t.aboutUs.missionText1}
              </p>
              <p>
                {t.aboutUs.missionText2}
              </p>
            </div>
            <div className="content-image">
              <div className="image-container">
                <img src={logo} alt="Qomar Quran Center" className="mission-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section">
        <div className="container">
          <h2 className="section-title">{t.aboutUs.ourEducationalPrograms}</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3>{t.aboutUs.onlineCoursesTitle}</h3>
              <p>
                {t.aboutUs.onlineCoursesText}
              </p>
              <div className="program-features">
                <div className="program-feature">
                  <strong>{t.aboutUs.virtualClassrooms}</strong> {t.aboutUs.virtualClassroomsDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.personalizedSessions}</strong> {t.aboutUs.personalizedSessionsDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.groupInteractionsTitle}</strong> {t.aboutUs.groupInteractionsDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.flexibleSchedulingTitle}</strong> {t.aboutUs.flexibleSchedulingDesc}
                </div>
              </div>
            </div>
            <div className="program-card">
              <h3>{t.aboutUs.offlineEducationTitle}</h3>
              <p>
                {t.aboutUs.offlineEducationText}
              </p>
              <div className="program-features">
                <div className="program-feature">
                  <strong>{t.aboutUs.quranMemorizationTitle}</strong> {t.aboutUs.quranMemorizationDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.islamicStudiesTitle}</strong> {t.aboutUs.islamicStudiesDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.arabicLanguage}</strong> {t.aboutUs.arabicLanguageDesc}
                </div>
                <div className="program-feature">
                  <strong>{t.aboutUs.personalizedCoachingTitle}</strong> {t.aboutUs.personalizedCoachingDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-detailed-section">
        <div className="container">
          <h2 className="section-title">{t.home.ourCoreValues}</h2>
          <div className="values-detailed-grid">
            <div className="value-detailed-card">
              <div className="value-icon">💎</div>
              <h3>{t.aboutUs.honestyTitle}</h3>
              <p>
                {t.aboutUs.honestyText}
              </p>
            </div>
            <div className="value-detailed-card">
              <div className="value-icon">⭐</div>
              <h3>{t.aboutUs.excellenceTitle}</h3>
              <p>
                {t.aboutUs.excellenceText}
              </p>
            </div>
            <div className="value-detailed-card">
              <div className="value-icon">❤️</div>
              <h3>{t.aboutUs.compassionTitle}</h3>
              <p>
                {t.aboutUs.compassionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section videos-section">
        <div className="container">
          <h2 className="section-title">{t.aboutUs.popularVideos}</h2>
          <p className="section-subtitle">{t.aboutUs.subscribeChannel}</p>
          <div className="videos-grid">
            <div className="video-item">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/CCpfMP1JBtw"
                  title="Qomar Quran Center Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-item">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/_JXkru_tSmo"
                  title="Qomar Quran Center Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-item">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/CofIKeAuiU0"
                  title="Qomar Quran Center Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="videos-cta">
            <a 
              href="https://www.youtube.com/@qomarquranmarkazi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.aboutUs.watchOnYouTube}
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <div className="location-content">
            <h2>{t.aboutUs.locatedInIstanbul}</h2>
            <p>
              {t.aboutUs.locationText}
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8333.053870506978!2d29.16388267415538!3d41.067127660859164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacc3b94f644e9%3A0x12b8449d4b46e64e!2sMahmud%20Efendi%20Camii!5e0!3m2!1sru!2s!4v1766617611402!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Qomar Quran Center Location"
            ></iframe>
            <div className="map-link">
              <a 
                href="https://maps.app.goo.gl/pvZKcUFbkFNcPzWV6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t.aboutUs.viewOnGoogleMaps}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
