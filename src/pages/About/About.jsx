import "./About.css";
import poetsComposite from "../../assets/poets composite.webp";
import reflectograph from "../../assets/reflectograph.webp";
import pa12Image from "../../assets/pa12.webp";
import instagramWall from "../../assets/instagramWall.webp";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FishEyeMagnifier from "../../components/FishEyeMagnifier/FishEyeMagnifier";
import SelectedReadings from "../../components/SelectedReadings/SelectedReadings";
import Button from "../../components/Button/Button";

// Collage images
import collage1 from "../../assets/collage/3SomeCrop.webp";
import collage2 from "../../assets/collage/702Some.webp";
import collage3 from "../../assets/collage/aAndLily.webp";
import collage4 from "../../assets/collage/abReadingHolloway.webp";
import collage5 from "../../assets/collage/athens.webp";
import collage6 from "../../assets/collage/bridge.webp";
import collage7 from "../../assets/collage/galerie2.webp";
import collage8 from "../../assets/collage/hat.webp";
import collage9 from "../../assets/collage/pointing.webp";
import collage10 from "../../assets/collage/sailing1.webp";

function About() {
  return (
    <ScrollFadeIn selector=".about__section, .about__bio-section">
      <div className="about__container">
        <div className="about__layout">
          {/* Left side - Stacked Collage */}
          <div className="about__collage-column">
            <div className="about__collage-stack">
              <img
                src={collage2}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage4}
                alt="Alan Bernheimer"
                className="about__collage-image about__collage-image--span-2"
              />
              <img
                src={collage6}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage1}
                alt="Alan Bernheimer"
                className="about__collage-image about__collage-image--span-2"
              />
              <img
                src={collage8}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage10}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage9}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage3}
                alt="Alan Bernheimer"
                className="about__collage-image about__collage-image--span-2"
              />
              <img
                src={collage5}
                alt="Alan Bernheimer"
                className="about__collage-image"
              />
              <img
                src={collage7}
                alt="Alan Bernheimer"
                className="about__collage-image about__collage-image--span-2"
              />
            </div>
          </div>

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
        <section className="about__section about__section--centered about__section--pages">
          <div className="about__pages-wrapper">
            <div className="about__pages-container">
              <div className="about__pages-header">
                <img
                  src={pa12Image}
                  alt="San Francisco Poets Theater"
                  className="about__pages-header-image"
                />
                <div className="about__pages-overlay">
                  <h2 className="about__pages-title">Alan Bernheimer Pages</h2>
                  <div className="about__pages-links">
                    <a
                      href="https://writing.upenn.edu/pennsound/x/Bernheimer.php"
                      className="about__pages-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PennSound
                    </a>
                    <a
                      href="https://en.wikipedia.org/wiki/Alan_Bernheimer"
                      className="about__pages-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wikipedia
                    </a>
                    <a
                      href="https://writing.upenn.edu/epc/authors/bernheimer/"
                      className="about__pages-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Electronic Poetry Center
                    </a>
                    <a
                      href="https://www.thegrandpiano.org/poetstheater.html"
                      className="about__pages-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SF Poets Theater
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

              <article className="about__photo-card">
                <div className="about__photo-image">
                  <img
                    src={instagramWall}
                    alt="Instagram gallery preview"
                    className="about__photo-placeholder"
                  />
                </div>
                <div className="about__photo-content">
                  <h3 className="about__photo-title">Instagram Gallery</h3>
                  <p className="about__photo-description">
                    The quick brown fox jumps over the lazy dog. The quick brown
                    fox jumps over the lazy dog. The quick brown fox jumps over
                    the lazy dog.
                  </p>
                  <div className="about__photo-links">
                    <Button
                      href="https://www.instagram.com/alanbernheimer"
                      external
                    >
                      Follow on Instagram
                    </Button>
                  </div>
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
