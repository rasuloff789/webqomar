import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import diploma from '../diploma.png'
import './PremiumLanding.css'

function PremiumLanding() {
  const { language, changeLanguage } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()
  const lp = t.premiumLanding
  const contactUrl = 'https://t.me/qomaradmin'
  const telegramMessage = lp.cta?.telegramMessage || ''
  const telegramHref = telegramMessage ? `${contactUrl}?text=${encodeURIComponent(telegramMessage)}` : contactUrl

  const supportedLangs = useMemo(() => new Set(['en', 'uz', 'tr', 'ru', 'ar']), [])
  const langQuery = useMemo(() => {
    const raw = (searchParams.get('lang') || '').trim().toLowerCase()
    const valid = raw && supportedLangs.has(raw) ? raw : null
    return { raw, valid }
  }, [searchParams, supportedLangs])

  // URL query param drives language on this landing page
  useEffect(() => {
    const next = langQuery.valid || 'en'
    if (language !== next) changeLanguage(next)

    // If an unsupported lang is provided, normalize to English for predictable sharing.
    if (langQuery.raw && !langQuery.valid) {
      setSearchParams((prev) => {
        const sp = new URLSearchParams(prev)
        sp.set('lang', 'en')
        return sp
      }, { replace: true })
    }
  }, [langQuery.raw, langQuery.valid, language, changeLanguage, setSearchParams])

  const setLang = useCallback((nextLang) => {
    const normalized = (nextLang || '').trim().toLowerCase()
    const next = supportedLangs.has(normalized) ? normalized : 'en'
    changeLanguage(next)
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev)
      sp.set('lang', next)
      return sp
    }, { replace: true })
  }, [changeLanguage, setSearchParams, supportedLangs])

  useEffect(() => {
    const prevBodyBg = document.body.style.background
    const prevBodyBgImage = document.body.style.backgroundImage
    const prevBodyBgAttachment = document.body.style.backgroundAttachment
    const prevBodyBgSize = document.body.style.backgroundSize
    const prevBodyBgPosition = document.body.style.backgroundPosition
    const prevBodyMinHeight = document.body.style.minHeight
    const prevHtmlScrollBehavior = document.documentElement.style.scrollBehavior

    // Make the landing page visually independent (and revert on unmount)
    document.body.style.background = '#0B1D3A'
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundAttachment = 'initial'
    document.body.style.backgroundSize = 'auto'
    document.body.style.backgroundPosition = 'initial'
    document.body.style.minHeight = '100vh'
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.body.style.background = prevBodyBg
      document.body.style.backgroundImage = prevBodyBgImage
      document.body.style.backgroundAttachment = prevBodyBgAttachment
      document.body.style.backgroundSize = prevBodyBgSize
      document.body.style.backgroundPosition = prevBodyBgPosition
      document.body.style.minHeight = prevBodyMinHeight
      document.documentElement.style.scrollBehavior = prevHtmlScrollBehavior
    }
  }, [])

  return (
    <div className="pl">
      <div className="pl-lang" aria-label="Language selector">
        <button
          type="button"
          className={`pl-lang-btn ${language === 'en' ? 'is-active' : ''}`}
          onClick={() => setLang('en')}
          title="English"
          aria-label="English"
        >
          🇬🇧
        </button>
        <button
          type="button"
          className={`pl-lang-btn ${language === 'tr' ? 'is-active' : ''}`}
          onClick={() => setLang('tr')}
          title="Türkçe"
          aria-label="Türkçe"
        >
          🇹🇷
        </button>
        <button
          type="button"
          className={`pl-lang-btn ${language === 'uz' ? 'is-active' : ''}`}
          onClick={() => setLang('uz')}
          title="O'zbekcha"
          aria-label="O'zbekcha"
        >
          🇺🇿
        </button>
        <button
          type="button"
          className={`pl-lang-btn ${language === 'ru' ? 'is-active' : ''}`}
          onClick={() => setLang('ru')}
          title="Русский"
          aria-label="Русский"
        >
          🇷🇺
        </button>
        <button
          type="button"
          className={`pl-lang-btn ${language === 'ar' ? 'is-active' : ''}`}
          onClick={() => setLang('ar')}
          title="العربية"
          aria-label="العربية"
        >
          🇸🇦
        </button>
      </div>

      {/* 1️⃣ HERO SECTION */}
      <header className="pl-hero" id="top">
        <div className="pl-hero-bg" aria-hidden="true" />
        <div className="pl-shell">
          <div className="pl-hero-content">
            <div className="pl-urgency">
              <span className="pl-badge pl-badge-gold">{lp.hero.badge}</span>
              <span className="pl-badge pl-badge-limited">{lp.hero.limitedBadge}</span>
            </div>
            <span className="pl-urgency-text">{lp.hero.urgencyLine}</span>

            <h1 className="pl-h1">{lp.hero.h1}</h1>
            <p className="pl-hero-subtitle">{lp.hero.subtitle}</p>
            <p className="pl-hero-promise">{lp.hero.promise}</p>

            <ul className="pl-hero-outcomes" aria-label="Key outcomes">
              {lp.hero.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>

            <div className="pl-hero-cta">
              <a
                className="pl-btn pl-btn-primary pl-btn-xl"
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lp.hero.ctaPrimary}
              </a>
              <a className="pl-btn pl-btn-ghost" href="#achieve">
                {lp.hero.ctaSecondary}
              </a>
            </div>
            <div className="pl-cta-note" role="note">{lp.cta.note}</div>
            <div className="pl-cta-meta" role="note">{lp.cta.meta}</div>

            <div className="pl-hero-proof" aria-label="Program highlights">
              <div className="pl-proof-item">
                <div className="pl-proof-kicker">{lp.hero.proof.lengthLabel}</div>
                <div className="pl-proof-value">{lp.hero.proof.lengthValue}</div>
              </div>
              <div className="pl-proof-item">
                <div className="pl-proof-kicker">{lp.hero.proof.classesLabel}</div>
                <div className="pl-proof-value">{lp.hero.proof.classesValue}</div>
              </div>
              <div className="pl-proof-item">
                <div className="pl-proof-kicker">{lp.hero.proof.maxLabel}</div>
                <div className="pl-proof-value">{lp.hero.proof.maxValue}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pl-main">
        {/* 2️⃣ PROBLEM → SOLUTION SECTION */}
        <section className="pl-section pl-section-light" id="solution">
          <div className="pl-shell">
            <div className="pl-section-header">
              <h2 className="pl-h2">{lp.problemSolution.title}</h2>
              <p className="pl-lead">{lp.problemSolution.lead}</p>
            </div>

            <div className="pl-feature-grid" role="list">
              <article className="pl-card" role="listitem">
                <div className="pl-icon" aria-hidden="true">🎯</div>
                <h3 className="pl-h3">{lp.problemSolution.cards.strugglesTitle}</h3>
                <ul className="pl-bullets">
                  {lp.problemSolution.cards.strugglesBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>

              <article className="pl-card" role="listitem">
                <div className="pl-icon" aria-hidden="true">🧭</div>
                <h3 className="pl-h3">{lp.problemSolution.cards.roadmapTitle}</h3>
                <p className="pl-p">{lp.problemSolution.cards.roadmapText}</p>
              </article>

              <article className="pl-card" role="listitem">
                <div className="pl-icon" aria-hidden="true">🛠️</div>
                <h3 className="pl-h3">{lp.problemSolution.cards.correctionTitle}</h3>
                <p className="pl-p">{lp.problemSolution.cards.correctionText}</p>
              </article>

              <article className="pl-card" role="listitem">
                <div className="pl-icon" aria-hidden="true">👥</div>
                <h3 className="pl-h3">{lp.problemSolution.cards.groupTitle}</h3>
                <p className="pl-p">{lp.problemSolution.cards.groupText}</p>
                <div className="pl-mini-badge">{lp.problemSolution.cards.groupMiniBadge}</div>
              </article>
            </div>
          </div>
        </section>

        {/* 3️⃣ WHAT YOU WILL ACHIEVE */}
        <section className="pl-section pl-section-dark" id="achieve">
          <div className="pl-shell">
            <div className="pl-section-header">
              <h2 className="pl-h2 pl-h2-invert">{lp.achieve.title}</h2>
              <p className="pl-lead pl-lead-invert">{lp.achieve.lead}</p>
            </div>

            <div className="pl-achieve-grid" role="list">
              {lp.achieve.cards.map((card) => (
                <article className="pl-ach-card" role="listitem" key={card.title}>
                  <div className="pl-ach-top">
                    <span className="pl-ach-icon" aria-hidden="true">{card.icon}</span>
                    <h3 className="pl-ach-title">{card.title}</h3>
                  </div>
                  <p className="pl-ach-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4️⃣ PREMIUM STRUCTURE */}
        <section className="pl-section pl-section-light" id="structure">
          <div className="pl-shell">
            <div className="pl-section-header">
              <h2 className="pl-h2">{lp.structure.title}</h2>
              <p className="pl-lead">{lp.structure.lead}</p>
            </div>

            <div className="pl-structure-grid">
              <div className="pl-structure-card pl-structure-strong">
                <div className="pl-structure-kicker">{lp.structure.groupKicker}</div>
                <div className="pl-structure-metric">{lp.structure.groupMetric}</div>
                <div className="pl-structure-detail">{lp.structure.groupDetail}</div>
              </div>

              <div className="pl-structure-card">
                <div className="pl-structure-kicker">{lp.structure.privateKicker}</div>
                <div className="pl-structure-metric">{lp.structure.privateMetric}</div>
                <div className="pl-structure-detail">{lp.structure.privateDetail}</div>
              </div>

              <div className="pl-structure-card pl-structure-urgent" aria-label="Only 10 students emphasized">
                <div className="pl-structure-kicker">{lp.structure.qualityKicker}</div>
                <div className="pl-structure-metric">{lp.structure.qualityMetric}</div>
                <div className="pl-structure-detail">
                  <strong>{lp.structure.qualityDetailStrong}</strong> {lp.structure.qualityDetailRest}
                </div>
                <div className="pl-urgent-pill">{lp.structure.qualityPill}</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5️⃣ PRAYER PERFECTION */}
        <section className="pl-section pl-section-soft" id="salah">
          <div className="pl-shell">
            <div className="pl-prayer">
              <div className="pl-prayer-copy">
                <h2 className="pl-h2">{lp.salah.title}</h2>
                <p className="pl-lead">{lp.salah.lead}</p>
                <ul className="pl-checklist">
                  {lp.salah.checklist.map((item) => (
                    <li key={item}>
                      <span className="pl-check" aria-hidden="true">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pl-prayer-card" aria-label="Reassurance card">
                <div className="pl-prayer-card-title">{lp.salah.sideTitle}</div>
                <p className="pl-p">{lp.salah.sideText}</p>
                <a
                  className="pl-btn pl-btn-primary pl-btn-wide"
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lp.salah.sideCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ PRICING SECTION */}
        <section className="pl-section pl-section-pricing" id="pricing">
          <div className="pl-shell">
            <div className="pl-pricing">
              <div className="pl-pricing-header">
                <h2 className="pl-h2 pl-h2-invert">{lp.pricing.title}</h2>
                <p className="pl-lead pl-lead-invert">{lp.pricing.lead}</p>
              </div>

              <div className="pl-price-card">
                <div className="pl-price-top">
                  <div className="pl-price-amount">{lp.pricing.amount}</div>
                  <div className="pl-price-sub">{lp.pricing.subtext}</div>
                  <div className="pl-price-urgent pl-badge-limited">
                    {lp.pricing.urgency}
                  </div>
                </div>

                <div className="pl-price-includes" aria-label="What is included">
                  <div className="pl-price-includes-title">{lp.pricing.includesTitle}</div>
                  <ul className="pl-price-includes-list">
                    {lp.pricing.includesItems.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="pl-price-policy" aria-label="Policy and clarity">
                  <div className="pl-price-policy-title">{lp.pricing.policyTitle}</div>
                  <ul className="pl-price-policy-list">
                    {lp.pricing.policyItems.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="pl-price-actions">
                  <a
                    className="pl-btn pl-btn-primary pl-btn-xl"
                    href={telegramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lp.pricing.ctaPrimary}
                  </a>
                  <a className="pl-btn pl-btn-ghost pl-btn-xl" href="#top">
                    {lp.pricing.ctaSecondary}
                  </a>
                </div>
                <div className="pl-cta-note pl-cta-note-invert" role="note">{lp.cta.note}</div>

                <div className="pl-price-note" role="note">
                  {lp.pricing.note}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🎓 CERTIFICATION SECTION */}
        <section className="pl-section pl-section-light" id="certification">
          <div className="pl-shell">
            <div className="pl-cert">
              <div className="pl-cert-copy">
                <div className="pl-cert-badges">
                  <span className="pl-badge pl-badge-gold">{lp.certificate.badge}</span>
                </div>
                <h2 className="pl-h2">{lp.certificate.title}</h2>
                <p className="pl-lead">{lp.certificate.intro}</p>

                <div className="pl-cert-confirms">{lp.certificate.confirmsLabel}</div>
                <ul className="pl-cert-list">
                  {lp.certificate.confirmsItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="pl-cert-note">{lp.certificate.signedLine}</p>
                <p className="pl-cert-note">{lp.certificate.suitableLine}</p>
              </div>

              <div className="pl-cert-mock" aria-label={lp.certificate.previewAriaLabel}>
                <div className="pl-cert-mock-inner">
                  <div className="pl-cert-seal" aria-hidden="true">✓</div>
                  <div className="pl-cert-mock-lines" aria-hidden="true" />
                  <div className="pl-cert-media">
                    <img
                      src={diploma}
                      alt={lp.certificate.previewAlt}
                      className="pl-cert-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="pl-cert-mock-caption">{lp.certificate.previewCaption}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ FINAL STRONG CTA */}
        <section className="pl-section pl-section-final" id="final-cta">
          <div className="pl-shell">
            <div className="pl-final">
              <h2 className="pl-final-title">{lp.finalCta.title}</h2>
              <p className="pl-final-subtitle">{lp.finalCta.subtitle}</p>
              <div className="pl-final-actions">
                <a
                  className="pl-btn pl-btn-primary pl-btn-xl"
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lp.finalCta.button}
                </a>
              </div>
              <div className="pl-final-badges" aria-label="Urgency badges">
                <span className="pl-badge pl-badge-gold">{lp.finalCta.badges[0]}</span>
                <span className="pl-badge pl-badge-outline">{lp.finalCta.badges[1]}</span>
                <span className="pl-badge pl-badge-outline">{lp.finalCta.badges[2]}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PremiumLanding

