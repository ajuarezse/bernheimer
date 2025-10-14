import "./Translations.css";

function Translations() {
  return (
    <div className="translations-container">
      <div className="translations-header">
        <h1 className="translations-title">Translations</h1>
        <div className="translations-intro">
          <p className="translations-lead">
            Bridging languages and cultures—bringing essential voices from
            French literature to English-speaking readers through careful,
            considered translation.
          </p>
        </div>
      </div>

      <section className="translations-section">
        <h2 className="section-title">Published Translations</h2>

        <div className="translations-grid">
          <article className="translation-card">
            <div className="translation-image">
              <div className="book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="translation-content">
              <div className="translation-header">
                <h3 className="translation-title">The Silent Garden</h3>
                <span className="translation-year">2023</span>
              </div>

              <div className="translation-details">
                <p className="original-info">
                  <strong>Original:</strong> <em>Le Jardin Silencieux</em> by
                  Marie Dubois
                </p>
                <p className="publisher-info">
                  <strong>Publisher:</strong> Archipelago Books
                </p>
                <p className="pages-info">
                  <strong>Pages:</strong> 284
                </p>
              </div>

              <p className="translation-description">
                A haunting meditation on memory and loss set in post-war France.
                Dubois's delicate prose explores the aftermath of trauma through
                the eyes of a young woman returning to her childhood home. This
                translation preserves the lyrical quality of the original while
                making it accessible to contemporary readers.
              </p>

              <div className="translation-links">
                <a
                  href="#"
                  className="translation-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase
                </a>
                <a
                  href="#"
                  className="translation-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
                </a>
              </div>
            </div>
          </article>

          <article className="translation-card">
            <div className="translation-image">
              <div className="book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="translation-content">
              <div className="translation-header">
                <h3 className="translation-title">
                  Letters to an Unknown Poet
                </h3>
                <span className="translation-year">2022</span>
              </div>

              <div className="translation-details">
                <p className="original-info">
                  <strong>Original:</strong> <em>Lettres à un Poète Inconnu</em>{" "}
                  by Jean-Claude Rémy
                </p>
                <p className="publisher-info">
                  <strong>Publisher:</strong> New Directions Publishing
                </p>
                <p className="pages-info">
                  <strong>Pages:</strong> 156
                </p>
              </div>

              <p className="translation-description">
                A collection of prose poems that blur the boundaries between
                autobiography and fiction. Rémy's experimental work challenges
                conventional narrative structures. This translation maintains
                the rhythmic complexity of the French while capturing the
                philosophical depth of the original.
              </p>

              <div className="translation-links">
                <a
                  href="#"
                  className="translation-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase
                </a>
                <a
                  href="#"
                  className="translation-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="translations-section">
        <h2 className="section-title">Selected Translations</h2>

        <div className="selected-translations">
          <div className="selected-item">
            <div className="selected-header">
              <h4 className="selected-title">"Three Fragments on Solitude"</h4>
              <span className="selected-source">by Isabelle Moreau</span>
            </div>
            <div className="selected-details">
              <span className="publication">The Paris Review, No. 248</span>
              <span className="selected-year">2023</span>
            </div>
          </div>

          <div className="selected-item">
            <div className="selected-header">
              <h4 className="selected-title">"Urban Pastoral"</h4>
              <span className="selected-source">by Antoine Leclerc</span>
            </div>
            <div className="selected-details">
              <span className="publication">Poetry International, Vol. 29</span>
              <span className="selected-year">2023</span>
            </div>
          </div>

          <div className="selected-item">
            <div className="selected-header">
              <h4 className="selected-title">"The Mapmaker's Daughter"</h4>
              <span className="selected-source">by Sylvie Bertrand</span>
            </div>
            <div className="selected-details">
              <span className="publication">Literary Hub</span>
              <span className="selected-year">2022</span>
            </div>
          </div>

          <div className="selected-item">
            <div className="selected-header">
              <h4 className="selected-title">
                "Five Poems from 'Interior Weather'"
              </h4>
              <span className="selected-source">by Philippe Rousseau</span>
            </div>
            <div className="selected-details">
              <span className="publication">The Literary Review, Issue 52</span>
              <span className="selected-year">2022</span>
            </div>
          </div>
        </div>
      </section>

      <section className="translations-section">
        <h2 className="section-title">Translation Philosophy</h2>

        <div className="philosophy-content">
          <p className="philosophy-text">
            Translation is not merely conversion between languages—it is an act
            of creative interpretation that requires deep understanding of both
            cultures, sensibilities, and literary traditions. My approach
            prioritizes preserving the emotional resonance and artistic
            integrity of the original work while ensuring accessibility for
            contemporary readers.
          </p>

          <p className="philosophy-text">
            Working primarily with French literature, I focus on authors whose
            voices offer unique perspectives on universal themes: memory,
            identity, and the search for meaning in an increasingly complex
            world. Each translation project becomes a dialogue between
            languages, an exploration of how meaning travels across cultural
            boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Translations;
