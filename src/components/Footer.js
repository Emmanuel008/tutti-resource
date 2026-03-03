import './Footer.css';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-column footer-company">
          <a href="/" className="footer-logo-link">
            <img src="/images/logo.jpeg" alt="Tutti Resources Limited" className="footer-logo" />
          </a>
          <h3 className="footer-company-name">Tutti Resources Limited</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
              <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-list">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-label">Phone:</span>{' '}
              <a href="tel:+255776315206">+255xxxxxxxx</a>
            </li>
            <li>
              <span className="footer-contact-label">Email:</span>{' '}
              <a href="mailto:info@tuttiresources.co.tz">info@tuttiresources.co.tz</a>
            </li>
            <li>
              <span className="footer-contact-label">Location:</span>{' '}
              Regent estate, Hurbert Kairuki Road, Plot no 356., Dar es Salaam, Tanzania
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-separator" />

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Tutti Resources Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
