import "./About.css";
import poetsComposite from "../../assets/poets composite.webp";
import reflectograph from "../../assets/reflectograph.webp";
import instagramWall from "../../assets/instagramWall.webp";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FishEyeMagnifier from "../../components/FishEyeMagnifier/FishEyeMagnifier";
import SelectedReadings from "../../components/SelectedReadings/SelectedReadings";
import Button from "../../components/Button/Button";
import Collage from "../../components/Collage/Collage";
import AlanBernheimerPages from "../../components/AlanBernheimerPages/AlanBernheimerPages";

function About() {
  return (
    <ScrollFadeIn selector=".about__section, .about__bio-section">
      <div className="about__container">
        <div className="about__layout">
          {/* Left side - Stacked Collage */}
          <Collage />

          {/* Right side - Content */}
          <div className="about__content-column">
            <div className="about__bio-text">
              <p>
                <strong>Alan Bernheimer</strong> is a poet, writer, and
                translator, living in Berkeley. He was born in 1948 in New York
                City, where he grew up, spending summers at a rustic science
                colony on the north shore of Long Island with his microbiologist
                parents. He graduated from Yale in 1970 with a degree in English
                literature and spent several years in NYC and on Cape Cod before
                settling in the San Francisco Bay Area.
              </p>
              <p>
                Bernheimer wrote for and performed in San Francisco Poets
                Theater and produced and hosted In the American Tree, a weekly
                radio program of new writing by poets. He is the author of five
                volumes of poetry as well as several translations from French.
                He was contributing editor at Nowhere magazine, where his
                "Retroscope" series featured literary travel writing from the
                past. He received a creative writing fellowship from the
                National Endowment for the Arts.
              </p>
            </div>

            <SelectedReadings />
          </div>
          {/* End of about__content-column */}
        </div>
        {/* End of about__layout */}

        {/* Pages section and below - outside the collage layout */}
        <AlanBernheimerPages />

        <section className="about__section about__section--centered">
          <h2>Photography</h2>
          <div className="about__photography">
            <div className="about__photo-grid">
              <article className="about__photo-card about__photo-card--landscape">
                <div className="about__photo-content">
                  <h3 className="about__photo-title">Poets Reading</h3>
                  <p className="about__photo-description">
                    1,000 portraits of poets reading, from 2008 to the present
                  </p>
                  <div className="about__photo-image-landscape">
                    <a
                      href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-block", cursor: "pointer" }}
                      className="about__photo-link-image"
                    >
                      <FishEyeMagnifier
                        src={poetsComposite}
                        alt="Composite of poets reading"
                        magnifierSize={160}
                        zoom={2}
                        className="about__photo-landscape"
                      />
                    </a>
                  </div>
                  <div className="about__photo-links">
                    <Button
                      href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                      external
                    >
                      View Collection
                    </Button>
                  </div>
                </div>
              </article>

              <article className="about__photo-card about__photo-card--landscape">
                <div className="about__photo-content">
                  <h3 className="about__photo-title">Reflectographs</h3>
                  <p className="about__photo-description">
                    My father's cameraless photographs made by a point of light
                    reflected onto photosensitive paper
                  </p>
                  <div className="about__photo-image-landscape">
                    <img
                      src={reflectograph}
                      alt="Reflectograph artwork"
                      className="about__photo-landscape"
                    />
                  </div>
                  <div className="about__photo-links">
                    <Button
                      href="https://reflectographs.com/reflectographs/"
                      external
                    >
                      Explore Series
                    </Button>
                  </div>
                </div>
              </article>

              <article className="about__photo-card about__photo-card--instagram">
                <h3 className="about__photo-title">Instagram</h3>
                <div className="about__instagram-image-wrapper">
                  <a
                    href="https://www.instagram.com/alanbernheimer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagramWall}
                      alt="Instagram gallery preview"
                      className="about__instagram-image"
                    />
                  </a>
                </div>
                <div className="about__photo-links">
                  <Button
                    href="https://www.instagram.com/alanbernheimer"
                    external
                  >
                    Follow on Instagram
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about__section about__section--contact">
          <div className="about__contact-simple">
            <div className="about__contact-header">
              <h2>Contact</h2>
            </div>
            <div className="about__contact-form-wrapper">
              <p>For inquiries, please fill out this form:</p>
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
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </ScrollFadeIn>
  );
}

export default About;
