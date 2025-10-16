import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Newsletter signup:", email);
    alert("Thanks for subscribing! (This will be functional once deployed)");
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__quick-links">
          <h3 className="footer__title">Quick Links</h3>
          <div className="footer__links-grid">
            <a href="#" className="footer__link">
              Bio
            </a>
            <a href="#" className="footer__link">
              Selected Readings
            </a>
            <a href="#" className="footer__link">
              Audio
            </a>
            <a href="#" className="footer__link">
              Video
            </a>
            <a href="#" className="footer__link">
              Photography
            </a>
            <a href="#" className="footer__link">
              Recent Publications
            </a>
            <a href="#" className="footer__link">
              Translation Notes
            </a>
            <a href="#" className="footer__link">
              Literary Essays
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
