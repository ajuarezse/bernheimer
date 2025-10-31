import "./Translations.css";
import PageHeader from "../../components/PageHeader/PageHeader";

function Translations() {
  return (
    <div className="translations">
      <PageHeader
        title="Translation"
        description="Bridging languages and cultures—bringing essential voices from French literature to English-speaking readers through careful, considered translation."
        className="translations__header"
      />

      <section className="translations__section">
        <h2 className="translations__section-title">Published Translation</h2>

        <div className="translations__grid">
          <article className="translations__card">
            <div className="translations__image">
              <div className="translations__book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="translations__content">
              <div className="translations__card-header">
                <h3 className="translations__card-title">The Silent Garden</h3>
                <span className="translations__year">2023</span>
              </div>

              <div className="translations__details">
                <p className="translations__original-info">
                  <strong>Original:</strong> <em>Le Jardin Silencieux</em> by
                  Marie Dubois
                </p>
                <p className="translations__publisher-info">
                  <strong>Publisher:</strong> Archipelago Books
                </p>
                <p className="translations__pages-info">
                  <strong>Pages:</strong> 284
                </p>
              </div>

              <p className="translations__description">
                A haunting meditation on memory and loss set in post-war France.
                Dubois's delicate prose explores the aftermath of trauma through
                the eyes of a young woman returning to her childhood home. This
                translation preserves the lyrical quality of the original while
                making it accessible to contemporary readers.
              </p>

              <div className="translations__links">
                <a
                  href="#"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase
                </a>
                <a
                  href="#"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
                </a>
              </div>
            </div>
          </article>

          <article className="translations__card">
            <div className="translations__image">
              <div className="translations__book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="translations__content">
              <div className="translations__card-header">
                <h3 className="translations__card-title">
                  Letters to an Unknown Poet
                </h3>
                <span className="translations__year">2022</span>
              </div>

              <div className="translations__details">
                <p className="translations__original-info">
                  <strong>Original:</strong> <em>Lettres à un Poète Inconnu</em>{" "}
                  by Jean-Claude Rémy
                </p>
                <p className="translations__publisher-info">
                  <strong>Publisher:</strong> New Directions Publishing
                </p>
                <p className="translations__pages-info">
                  <strong>Pages:</strong> 156
                </p>
              </div>

              <p className="translations__description">
                A collection of prose poems that blur the boundaries between
                autobiography and fiction. Rémy's experimental work challenges
                conventional narrative structures. This translation maintains
                the rhythmic complexity of the French while capturing the
                philosophical depth of the original.
              </p>

              <div className="translations__links">
                <a
                  href="#"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase
                </a>
                <a
                  href="#"
                  className="translations__link"
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

      <section className="translations__section">
        <h2 className="translations__section-title">Selected Translation</h2>

        <div className="translations__selected">
          <div className="translations__selected-item">
            <div className="translations__selected-header">
              <h4 className="translations__selected-title">
                "Three Fragments on Solitude"
              </h4>
              <span className="translations__selected-source">
                by Isabelle Moreau
              </span>
            </div>
            <div className="translations__selected-details">
              <span className="translations__publication">
                The Paris Review, No. 248
              </span>
              <span className="translations__selected-year">2023</span>
            </div>
          </div>

          <div className="translations__selected-item">
            <div className="translations__selected-header">
              <h4 className="translations__selected-title">"Urban Pastoral"</h4>
              <span className="translations__selected-source">
                by Antoine Leclerc
              </span>
            </div>
            <div className="translations__selected-details">
              <span className="translations__publication">
                Poetry International, Vol. 29
              </span>
              <span className="translations__selected-year">2023</span>
            </div>
          </div>

          <div className="translations__selected-item">
            <div className="translations__selected-header">
              <h4 className="translations__selected-title">
                "The Mapmaker's Daughter"
              </h4>
              <span className="translations__selected-source">
                by Sylvie Bertrand
              </span>
            </div>
            <div className="translations__selected-details">
              <span className="translations__publication">Literary Hub</span>
              <span className="translations__selected-year">2022</span>
            </div>
          </div>

          <div className="translations__selected-item">
            <div className="translations__selected-header">
              <h4 className="translations__selected-title">
                "Five Poems from 'Interior Weather'"
              </h4>
              <span className="translations__selected-source">
                by Philippe Rousseau
              </span>
            </div>
            <div className="translations__selected-details">
              <span className="translations__publication">
                The Literary Review, Issue 52
              </span>
              <span className="translations__selected-year">2022</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Translations;
