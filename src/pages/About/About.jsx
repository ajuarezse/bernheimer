import "./About.css";
import heroImage from "../../assets/heroImage.webp";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".about__section, .about__bio-section"
    );
    sections.forEach((section) => {
      section.classList.add("fade-in");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="about__container">
      <div className="about__bio-section">
        <div className="about__bio-content">
          <div className="about__image-container">
            <img
              src={heroImage}
              alt="Alan Bernheimer"
              className="about__image"
            />
          </div>

          <div className="about__bio-text">
            <p>
              Alan Bernheimer is a poet, writer, and translator, living in
              Berkeley. He was born in 1948 in New York City, where he grew up,
              spending summers at a rustic science colony on the north shore of
              Long Island with his microbiologist parents. He graduated from
              Yale in 1970 with a degree in English literature and spent several
              years in NYC and on Cape Cod before settling in the San Francisco
              Bay Area.
            </p>
            <p>
              Bernheimer wrote for and performed in San Francisco Poets Theater
              and produced and hosted In the American Tree, a weekly radio
              program of new writing by poets. He is the author of five volumes
              of poetry as well as several translations from French. He was
              contributing editor at Nowhere magazine, where his "Retroscope"
              series featured literary travel writing from the past. He received
              a creative writing fellowship from the National Endowment for the
              Arts.
            </p>
          </div>
        </div>
      </div>

      <div className="about__content">
        <section className="about__section about__section--contact">
          <div className="about__contact-simple">
            <h2>Contact</h2>
            <p>For inquiries, please use the form below:</p>
            <form className="about__form-compact">
              <div className="about__form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="about__form-input-compact"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="about__form-input-compact"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                className="about__form-textarea-compact"
                required
              ></textarea>
              <button type="submit" className="about__form-submit-compact">
                Send
              </button>
            </form>
          </div>
        </section>

        <section className="about__section">
          <h2>Selected Readings</h2>
          <p className="about__section-note">
            [list, separate document, to come]
          </p>
        </section>

        <section className="about__section">
          <h2>Links</h2>
          <div className="about__links">
            <div className="about__link-group">
              <ul className="about__link-list">
                <li>
                  <a
                    href="https://pennsound.org/"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Penn Sound
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                </li>
                <li>
                  <a
                    href="https://epc.buffalo.edu/"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electronic Poetry Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sfpoetstheater.org/"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    San Francisco Poets Theater
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2>Photography</h2>
          <div className="about__photography">
            <div className="about__photo-gallery">
              <div className="about__photo-card">
                <div className="about__photo-icon">📸</div>
                <h3>Portraits of Poets Reading</h3>
                <p>
                  An intimate collection capturing poets in their element during
                  readings and literary events.
                </p>
                <a href="#" className="about__photo-cta">
                  View Collection
                </a>
              </div>

              <div className="about__photo-card">
                <div className="about__photo-icon">✨</div>
                <h3>Reflectographs</h3>
                <p>
                  Experimental photographic works exploring light, reflection,
                  and visual poetry.
                </p>
                <a href="#" className="about__photo-cta">
                  Explore Series
                </a>
              </div>

              <div className="about__photo-card">
                <div className="about__photo-icon">📱</div>
                <h3>Instagram Gallery</h3>
                <p>
                  Daily moments, behind-the-scenes glimpses, and photographic
                  experiments.
                </p>
                <a href="#" className="about__photo-cta">
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
