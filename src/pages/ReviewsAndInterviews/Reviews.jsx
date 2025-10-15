import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__header">
        <h1 className="reviews__title">Reviews & Interviews</h1>
        <div className="reviews__intro">
          <p className="reviews__lead">
            Critical reception, conversations, and media coverage— a collection
            of voices engaging with the work and the craft behind it.
          </p>
        </div>
      </div>

      <section className="reviews__section">
        <h2 className="reviews__section-title">Recent Reviews</h2>

        <ul className="reviews__list">
          <li className="reviews__item">
            <div className="reviews__content">
              <div className="reviews__item-header">
                <h3 className="reviews__source">
                  The New York Review of Books
                </h3>
                <span className="reviews__date">September 2023</span>
              </div>
              <p className="reviews__excerpt">
                "Bernheimer's latest collection demonstrates a masterful command
                of both intimacy and universality. His poems move with the
                precision of a surgeon and the grace of a dancer, finding
                profound meaning in the smallest gestures of daily life."
              </p>
              <div className="reviews__details">
                <span className="reviews__work">
                  On "Evening Correspondences"
                </span>
                <a
                  href="#"
                  className="reviews__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Review →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__item">
            <div className="reviews__content">
              <div className="reviews__item-header">
                <h3 className="reviews__source">Poetry Foundation</h3>
                <span className="reviews__date">July 2023</span>
              </div>
              <p className="reviews__excerpt">
                "What sets Bernheimer apart is his ability to make the act of
                translation itself a poetic subject. His work explores the
                spaces between languages where meaning both dies and is reborn."
              </p>
              <div className="reviews__details">
                <span className="reviews__work">On Translation Work</span>
                <a
                  href="#"
                  className="reviews__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Review →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__item">
            <div className="reviews__content">
              <div className="reviews__item-header">
                <h3 className="reviews__source">Los Angeles Review of Books</h3>
                <span className="reviews__date">March 2023</span>
              </div>
              <p className="reviews__excerpt">
                "Bernheimer's prose reveals an author comfortable with
                complexity, unafraid to let sentences breathe and meanings
                accumulate. His essays read like conversations with a deeply
                thoughtful friend."
              </p>
              <div className="reviews__details">
                <span className="reviews__work">On "Collected Essays"</span>
                <a
                  href="#"
                  className="reviews__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Review →
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className="reviews__section">
        <h2 className="reviews__section-title">Interviews & Features</h2>

        <ul className="reviews__interviews-list">
          <li className="reviews__interview-item">
            <div className="reviews__interview-content">
              <div className="reviews__interview-header">
                <h3 className="reviews__interview-title">
                  "On the Art of Literary Translation"
                </h3>
                <div className="reviews__interview-source">
                  <span className="reviews__publication">
                    The Writer's Studio Podcast
                  </span>
                  <span className="reviews__interview-date">October 2023</span>
                </div>
              </div>
              <p className="reviews__interview-description">
                A deep dive into the creative process of translation, discussing
                the challenges of bringing poetry across linguistic boundaries
                while preserving both meaning and music.
              </p>
              <div className="reviews__interview-details">
                <span className="reviews__interview-type">
                  Audio Interview • 45 minutes
                </span>
                <a
                  href="#"
                  className="reviews__interview-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__interview-item">
            <div className="reviews__interview-content">
              <div className="reviews__interview-header">
                <h3 className="reviews__interview-title">
                  "Writing Between Languages: A Conversation"
                </h3>
                <div className="reviews__interview-source">
                  <span className="reviews__publication">Literary Hub</span>
                  <span className="reviews__interview-date">August 2023</span>
                </div>
              </div>
              <p className="reviews__interview-description">
                An exploration of multilingual identity in contemporary
                literature, touching on themes of displacement, memory, and the
                search for linguistic home.
              </p>
              <div className="reviews__interview-details">
                <span className="reviews__interview-type">
                  Written Interview
                </span>
                <a
                  href="#"
                  className="reviews__interview-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__interview-item">
            <div className="reviews__interview-content">
              <div className="reviews__interview-header">
                <h3 className="reviews__interview-title">
                  "The Craft of Memory: Author Spotlight"
                </h3>
                <div className="reviews__interview-source">
                  <span className="reviews__publication">
                    Poets & Writers Magazine
                  </span>
                  <span className="reviews__interview-date">June 2023</span>
                </div>
              </div>
              <p className="reviews__interview-description">
                A feature interview exploring the role of personal history in
                creative work, the ethics of memoir, and the transformation of
                experience into art.
              </p>
              <div className="reviews__interview-details">
                <span className="reviews__interview-type">Feature Article</span>
                <a
                  href="#"
                  className="reviews__interview-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Online →
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className="reviews__section">
        <h2 className="reviews__section-title">Press Coverage</h2>

        <ul className="reviews__press-list">
          <li className="reviews__press-item">
            <div className="reviews__press-content">
              <h4 className="reviews__press-headline">
                "Local Author Wins Regional Literature Prize"
              </h4>
              <div className="reviews__press-details">
                <div className="reviews__press-source">
                  <span className="reviews__publication">City Arts Weekly</span>
                  <span className="reviews__press-date">November 2023</span>
                </div>
                <a
                  href="#"
                  className="reviews__press-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Article →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__press-item">
            <div className="reviews__press-content">
              <h4 className="reviews__press-headline">
                "The Renaissance of Literary Translation"
              </h4>
              <div className="reviews__press-details">
                <div className="reviews__press-source">
                  <span className="reviews__publication">
                    The Cultural Times
                  </span>
                  <span className="reviews__press-date">September 2023</span>
                </div>
                <a
                  href="#"
                  className="reviews__press-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Feature →
                </a>
              </div>
            </div>
          </li>

          <li className="reviews__press-item">
            <div className="reviews__press-content">
              <h4 className="reviews__press-headline">
                "Poetry Reading Series Celebrates International Voices"
              </h4>
              <div className="reviews__press-details">
                <div className="reviews__press-source">
                  <span className="reviews__publication">University News</span>
                  <span className="reviews__press-date">April 2023</span>
                </div>
                <a
                  href="#"
                  className="reviews__press-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Coverage →
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Reviews;
