import { useTranslation } from '../hooks/useTranslation'
import './Donate.css'

function Donate() {
  const { t } = useTranslation()

  return (
    <div className="donate">
      {/* Header Section */}
      <section className="donate-header">
        <div className="container">
          <h1 className="page-title">{t.donate.title}</h1>
          <p className="page-subtitle">
            {t.donate.subtitle}
          </p>
        </div>
      </section>

      {/* Donation Content Section */}
      <section className="section donate-content-section">
        <div className="container">
          <div className="donate-content">
            <div className="donate-text">
              <p className="donate-intro">
                {t.donate.intro}
              </p>
              <div className="hadith-box">
                <p className="hadith-text">
                  {t.donate.hadith1}
                </p>
                <p className="hadith-reference">
                  {t.donate.hadith1Reference}
                </p>
              </div>
              <p className="donate-description">
                {t.donate.description}
              </p>
              <div className="hadith-box">
                <p className="hadith-text">
                  {t.donate.hadith2}
                </p>
                <p className="hadith-reference">
                  {t.donate.hadith2Reference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="section bank-transfer-section">
        <div className="container">
          <h2 className="section-title">{t.donate.bankTransfers}</h2>
          <div className="bank-info-card">
            <div className="bank-details">
              <div className="bank-detail-item">
                <span className="bank-label">{t.donate.accountTitle}:</span>
                <span className="bank-value">{t.donate.accountName}</span>
              </div>
              <div className="bank-detail-item">
                <span className="bank-label">{t.donate.bank}:</span>
                <span className="bank-value">{t.donate.bankName}</span>
              </div>
              <div className="bank-detail-item">
                <span className="bank-label">{t.donate.iban}:</span>
                <span className="bank-value iban-code">{t.donate.ibanNumber}</span>
              </div>
            </div>
            <div className="bank-note">
              <p>{t.donate.transferNote}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate

