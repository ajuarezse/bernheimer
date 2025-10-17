import "./About.css";

function About() {
  return (
    <div className="about__container">
      <h1 className="about__title">Alan Bernheimer</h1>

      <div className="about__hero">
        <div className="about__image-container">
          <div className="about__image-placeholder">
            <span>Author Photo</span>
          </div>
        </div>

        <div className="about__intro">
          <p className="about__lead">
            A distinguished voice in contemporary literature, exploring the
            intersections of memory, language, and human experience through
            poetry, prose, and translation.
          </p>
        </div>
      </div>

      <div className="about__content">
        <section className="about__section">
          <h2>Bio</h2>
          <p>
            Alan Bernheimer is an acclaimed author whose work spans multiple
            genres and languages. His writing explores the delicate boundaries
            between personal narrative and universal truth, weaving together
            themes of displacement, identity, and the transformative power of
            literature.
          </p>
          <p>
            Born into a multilingual household, Bernheimer developed an early
            fascination with the nuances of language and translation. This
            linguistic sensitivity permeates his work, whether in his original
            poetry and prose or his celebrated translations of contemporary
            European literature.
          </p>
          <p>
            His contributions to literature have been recognized through various
            awards and fellowships. His work continues to resonate with readers
            and critics alike, establishing him as a significant voice in
            contemporary literary culture.
          </p>
        </section>

        <section className="about__section">
          <h2>Selected Readings</h2>
          <ul className="about__readings-list">
            <li>"The Spoons in the Grass are There" (1992)</li>
            <li>"Café Isotope" (1999)</li>
            <li>"Lost Profiles" (2005)</li>
            <li>"The Club of Broken Hearts" (2008)</li>
            <li>"Particle Arms" (2014)</li>
            <li>"Near/Miss" (2018)</li>
            <li>"State of the Art" (2021)</li>
            <li>Selected poems from "The American Poetry Review"</li>
            <li>Essays on contemporary poetics</li>
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
              For inquiries regarding readings, publications, or literary
              collaborations:
            </p>
            <p className="about__contact-email">
              <a
                href="mailto:contact@alanbernheimer.com"
                className="about__external-link"
              >
                contact@alanbernheimer.com →
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
