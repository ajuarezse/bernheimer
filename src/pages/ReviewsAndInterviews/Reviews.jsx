import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1 className="reviews-title">Reviews & Interviews</h1>
        <div className="reviews-intro">
          <p className="reviews-lead">
            Critical reception, conversations, and media coverage— a collection
            of voices engaging with the work and the craft behind it.
          </p>
        </div>
      </div>

      <section className="reviews-section">
        <h2 className="section-title">Recent Reviews</h2>

        <ul className="reviews-list">
          <li className="review-item">
            <div className="review-content">
              <div className="review-header">
                <h3 className="review-source">The New York Review of Books</h3>
                <span className="review-date">September 2023</span>
              </div>
              <p className="review-excerpt">
                "Bernheimer's latest collection demonstrates a masterful command
                of both intimacy and universality. His poems move with the
                precision of a surgeon and the grace of a dancer, finding
                profound meaning in the smallest gestures of daily life."
              </p>
              <div className="review-details">
                <span className="review-work">
                  On "Evening Correspondences"
                </span>
                <a
                  href="#"
                  className="review-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Review →
                </a>
              </div>
            </div>
          </li>

          <li className="review-item">
            <div className="review-content">
              <div className="review-header">
                <h3 className="review-source">Poetry Foundation</h3>
                <span className="review-date">July 2023</span>
              </div>
              <p className="review-excerpt">
                "What sets Bernheimer apart is his ability to make the act of
                translation itself a poetic subject. His work explores the
                spaces between languages where meaning both dies and is reborn."
              </p>
              <div className="review-details">
                <span className="review-work">On Translation Work</span>
                <a
                  href="#"
                  className="review-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Review →
                </a>
              </div>
            </div>
          </li>

          <li className="review-item">
            <div className="review-content">
              <div className="review-header">
                <h3 className="review-source">Los Angeles Review of Books</h3>
                <span className="review-date">March 2023</span>
              </div>
              <p className="review-excerpt">
                "Bernheimer's prose reveals an author comfortable with
                complexity, unafraid to let sentences breathe and meanings
                accumulate. His essays read like conversations with a deeply
                thoughtful friend."
              </p>
              <div className="review-details">
                <span className="review-work">On "Collected Essays"</span>
                <a
                  href="#"
                  className="review-link"
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

      <section className="reviews-section">
        <h2 className="section-title">Interviews & Features</h2>

        <ul className="interviews-list">
          <li className="interview-item">
            <div className="interview-content">
              <div className="interview-header">
                <h3 className="interview-title">
                  "On the Art of Literary Translation"
                </h3>
                <div className="interview-source">
                  <span className="publication">
                    The Writer's Studio Podcast
                  </span>
                  <span className="interview-date">October 2023</span>
                </div>
              </div>
              <p className="interview-description">
                A deep dive into the creative process of translation, discussing
                the challenges of bringing poetry across linguistic boundaries
                while preserving both meaning and music.
              </p>
              <div className="interview-details">
                <span className="interview-type">
                  Audio Interview • 45 minutes
                </span>
                <a
                  href="#"
                  className="interview-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen →
                </a>
              </div>
            </div>
          </li>

          <li className="interview-item">
            <div className="interview-content">
              <div className="interview-header">
                <h3 className="interview-title">
                  "Writing Between Languages: A Conversation"
                </h3>
                <div className="interview-source">
                  <span className="publication">Literary Hub</span>
                  <span className="interview-date">August 2023</span>
                </div>
              </div>
              <p className="interview-description">
                An exploration of multilingual identity in contemporary
                literature, touching on themes of displacement, memory, and the
                search for linguistic home.
              </p>
              <div className="interview-details">
                <span className="interview-type">Written Interview</span>
                <a
                  href="#"
                  className="interview-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read →
                </a>
              </div>
            </div>
          </li>

          <li className="interview-item">
            <div className="interview-content">
              <div className="interview-header">
                <h3 className="interview-title">
                  "The Craft of Memory: Author Spotlight"
                </h3>
                <div className="interview-source">
                  <span className="publication">Poets & Writers Magazine</span>
                  <span className="interview-date">June 2023</span>
                </div>
              </div>
              <p className="interview-description">
                A feature interview exploring the role of personal history in
                creative work, the ethics of memoir, and the transformation of
                experience into art.
              </p>
              <div className="interview-details">
                <span className="interview-type">Feature Article</span>
                <a
                  href="#"
                  className="interview-link"
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

      <section className="reviews-section">
        <h2 className="section-title">Press Coverage</h2>

        <ul className="press-list">
          <li className="press-item">
            <div className="press-content">
              <h4 className="press-headline">
                "Local Author Wins Regional Literature Prize"
              </h4>
              <div className="press-details">
                <div className="press-source">
                  <span className="publication">City Arts Weekly</span>
                  <span className="press-date">November 2023</span>
                </div>
                <a
                  href="#"
                  className="press-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Article →
                </a>
              </div>
            </div>
          </li>

          <li className="press-item">
            <div className="press-content">
              <h4 className="press-headline">
                "The Renaissance of Literary Translation"
              </h4>
              <div className="press-details">
                <div className="press-source">
                  <span className="publication">The Cultural Times</span>
                  <span className="press-date">September 2023</span>
                </div>
                <a
                  href="#"
                  className="press-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Feature →
                </a>
              </div>
            </div>
          </li>

          <li className="press-item">
            <div className="press-content">
              <h4 className="press-headline">
                "Poetry Reading Series Celebrates International Voices"
              </h4>
              <div className="press-details">
                <div className="press-source">
                  <span className="publication">University News</span>
                  <span className="press-date">April 2023</span>
                </div>
                <a
                  href="#"
                  className="press-link"
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
