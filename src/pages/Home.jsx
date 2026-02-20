import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import './Home.css'

function Home() {
  const { t } = useTranslation()
  const [counters, setCounters] = useState({ students: 0, instructors: 0, courses: 0, years: 0 })
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = {
              students: 500,
              instructors: 25,
              courses: 15,
              years: 10
            }

            const duration = 2000
            const steps = 60
            const stepDuration = duration / steps

            let currentStep = 0
            const interval = setInterval(() => {
              currentStep++
              const progress = currentStep / steps
              
              setCounters({
                students: Math.floor(targets.students * progress),
                instructors: Math.floor(targets.instructors * progress),
                courses: Math.floor(targets.courses * progress),
                years: Math.floor(targets.years * progress)
              })

              if (currentStep >= steps) {
                clearInterval(interval)
                setCounters(targets)
              }
            }, stepDuration)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t.home.heroTitle}</h1>
            <p className="hero-subtitle">
              {t.home.heroSubtitle}
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                {t.home.contactUs}
              </Link>
              <Link to="/about-us" className="btn btn-outline">
                {t.home.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section statistics-section" ref={statsRef}>
        <div className="container">
          <h2 className="section-title">{t.home.statistics}</h2>
          <div className="statistics-grid">
            <div className="stat-item">
              <div className="stat-number">{counters.students}+</div>
              <div className="stat-label">{t.home.studentsEnrolled}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.instructors}+</div>
              <div className="stat-label">{t.home.qualifiedInstructors}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.courses}+</div>
              <div className="stat-label">{t.home.coursesOffered}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">{t.home.yearsExperience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">{t.home.ourPrograms}</h2>
          <p className="section-subtitle">
            {t.home.programsSubtitle}
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>{t.home.onlineCourses}</h3>
              <p>
                {t.home.onlineCoursesDesc}
              </p>
              <ul className="feature-list">
                <li>{t.home.oneOnOne}</li>
                <li>{t.home.groupInteractions}</li>
                <li>{t.home.flexibleScheduling}</li>
                <li>{t.home.allSkillLevels}</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>{t.home.offlineEducation}</h3>
              <p>
                {t.home.offlineEducationDesc}
              </p>
              <ul className="feature-list">
                <li>{t.home.inPersonLearning}</li>
                <li>{t.home.experiencedEducators}</li>
                <li>{t.home.quranMemorization}</li>
                <li>{t.home.islamicStudiesArabic}</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>{t.home.comprehensiveCurriculum}</h3>
              <p>
                {t.home.comprehensiveCurriculumDesc}
              </p>
              <ul className="feature-list">
                <li>{t.home.beginnerToAdvanced}</li>
                <li>{t.home.personalizedCoaching}</li>
                <li>{t.home.spiritualGrowth}</li>
                <li>{t.home.strongFoundation}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">{t.home.ourCoreValues}</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>{t.home.honesty}</h3>
              <p>{t.home.honestyDesc}</p>
            </div>
            <div className="value-item">
              <h3>{t.home.excellence}</h3>
              <p>{t.home.excellenceDesc}</p>
            </div>
            <div className="value-item">
              <h3>{t.home.compassion}</h3>
              <p>{t.home.compassionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t.home.readyToBegin}</h2>
            <p>{t.home.joinUsToday}</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              {t.home.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
