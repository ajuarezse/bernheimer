import "./About.css";

function About() {
  return (
    <div className="about__container">
      <div className="about__bio-section">
        <div className="about__bio-content">
          <div className="about__image-container">
            <div className="about__image-placeholder">
              <span>Photo</span>
            </div>
          </div>

          <div className="about__bio-text">
            <p>
              Biographical information will be placed here, including
              background, literary influences, and career highlights. This
              section will provide readers with context about the author's
              journey and development as a writer.
            </p>
            <p>
              Additional biographical details, including education, early works,
              and formative experiences that shaped the author's literary voice
              and thematic concerns will be featured in this area.
            </p>
            <p>
              Recognition, awards, and notable achievements in the literary
              field will be highlighted here, along with the author's ongoing
              contributions to contemporary literature and criticism.
            </p>
          </div>
        </div>
      </div>

      <div className="about__content">
        <section className="about__section about__section--contact">
          <div className="about__contact-simple">
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
            <div className="about__photo-collection">
              <p>
                <a href="#" className="about__photo-link">
                  Portraits of Poets Reading
                </a>{" "}
                [INDEX names, Search]
              </p>
              <p>Instagram link?</p>
              <p>
                <a href="#" className="about__photo-link">
                  Reflectographs
                </a>
                ?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
