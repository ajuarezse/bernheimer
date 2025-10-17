import "./About.css";

function About() {
  return (
    <div className="about__container">
      <div className="about__hero">
        <div className="about__image-container">
          <div className="about__image-placeholder">
            <span>Photo</span>
          </div>
        </div>

        <div className="about__intro">
          <p className="about__lead">
            Author bio and introduction text will appear here, highlighting 
            key themes and literary focus areas.
          </p>
        </div>
      </div>

      <div className="about__content">
        <section className="about__section">
          <h2 className="about__section-title">Bio</h2>
          <p>
            Biographical information will be placed here, including background,
            literary influences, and career highlights. This section will provide
            readers with context about the author's journey and development as
            a writer.
          </p>
          <p>
            Additional biographical details, including education, early works,
            and formative experiences that shaped the author's literary voice
            and thematic concerns will be featured in this area.
          </p>
          <p>
            Recognition, awards, and notable achievements in the literary field
            will be highlighted here, along with the author's ongoing
            contributions to contemporary literature and criticism.
          </p>
        </section>

        <section className="about__section">
          <h2>Selected Readings</h2>
          <ul className="about__readings-list">
            <li>Book Title One (Year)</li>
            <li>Book Title Two (Year)</li>
            <li>Book Title Three (Year)</li>
            <li>Major Collection Title (Year)</li>
            <li>Recent Publication Title (Year)</li>
            <li>Notable Work Title (Year)</li>
            <li>Latest Release Title (Year)</li>
            <li>Selected poems from literary journals</li>
            <li>Essays and critical writings</li>
          </ul>
        </section>

        <section className="about__section">
          <h2>Photography</h2>
          <div className="about__photography">
            <div className="about__photo-collection">
              <h3>Poets Reading Flickr Album</h3>
              <p>
                A curated collection of photographs documenting poetry readings
                and literary events. Features INDEX names and searchable
                content.
              </p>
              <a href="#" className="about__photo-link">
                Browse Collection →
              </a>
            </div>
            <div className="about__photo-collection">
              <h3>Reflectographs</h3>
              <p>
                Experimental photographic works exploring the intersection of
                image and text, capturing moments of literary reflection and
                creative process.
              </p>
              <a href="#" className="about__photo-link">
                View Gallery →
              </a>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2>Links & Resources</h2>
          <div className="about__links">
            <div className="about__link-group">
              <h3>Academic & Literary Profiles</h3>
              <ul className="about__link-list">
                <li>
                  <a
                    href="#"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia Page →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electronic Poetry Center →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Penn Sound Archive →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="about__external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Poets Theater →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about__section about__section--contact">
          <h2>Contact</h2>
          <div className="about__contact">
            <p>
              Contact information for professional inquiries will be 
              provided here.
            </p>
            <p className="about__contact-email">
              <a
                href="mailto:email@example.com"
                className="about__external-link"
              >
                email@example.com →
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
