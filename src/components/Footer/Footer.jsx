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
        <div className="footer__bottom">
          <p>&copy; {currentYear} AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
