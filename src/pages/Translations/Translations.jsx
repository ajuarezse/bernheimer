import "./Translations.css";
import PageHeader from "../../components/PageHeader/PageHeader";

function Translations() {
  return (
    <div className="translations">
      <PageHeader
        title="Translation"
        description=""
        className="translations__header"
      />

      <section className="translations__section">


        <div className="translations__grid">
          {/* Paris by Night */}
          <article className="translations__card">
            <div className="translations__image">
              <div className="translations__book-cover-placeholder">
                <span>Cover photo</span>
              </div>
            </div>
            <div className="translations__content">
              <div className="translations__card-header">
                <h3 className="translations__card-title">Paris by Night</h3>
                <span className="translations__year">Slacks Books, 2023</span>
              </div>
              <p className="translations__description">
                Louis Aragon’s 1923 Surrealist chamber piece. The work
                masquerades as a guide to the underbelly of Paris nightlife, but
                readers quickly find themselves in a surreal, phantasmagoric
                dream that unspools during the course of a night, starting with
                a walk along the Seine and finishing in a café at dawn, with
                shapeshifting, hallucinatory detours into literature, works of
                art, and religious history.
              </p>
              <div className="translations__links">
                <button
                  className="translations__link"
                  style={{ cursor: "pointer" }}
                  disabled
                >
                  Order (email form coming soon)
                </button>
              </div>
            </div>
          </article>

          {/* Lost Profiles */}
          <article className="translations__card">
            <div className="translations__image">
              <div className="translations__book-cover-placeholder">
                <span>Cover photo</span>
              </div>
            </div>
            <div className="translations__content">
              <div className="translations__card-header">
                <h3 className="translations__card-title">Lost Profiles</h3>
                <span className="translations__year">City Lights, 2016</span>
              </div>
              <p className="translations__description">
                A retrospective of a crucial period in modernism, written by the
                co-founder of the Surrealist Movement. Philippe Soupault
                profiles a gallery of contemporaries and heroes that he knew,
                including Proust, Joyce, Apollinaire, Cendrars, Reverdy, and
                others.
                <br />
                <br />
                <em>
                  “The chapter about Proust alone is worth the price of
                  admission, and then there is more, much more packed into the
                  pages of this small, indelible book." –Paul Auster
                </em>
                <br />
                <em>
                  “Lost Profiles signals a necessary reminder of how much joy
                  there is to be found in discovering terrific, epochal texts
                  freshly translated.” ––Patrick Dunagan, the Northwest Review
                  of Books
                </em>
              </p>
              <div className="translations__links">
                <a
                  href="https://citylights.com/city-lights-published/lost-profiles-memoirs-of-cubism-dada/"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more and purchase
                </a>
                <a
                  href="https://hyperallergic.com/314726/philippe-soupaults-lost-profiles/"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hyperallergic (Review)
                </a>
              </div>
            </div>
          </article>

          {/* The Hamlet of the Bees */}
          <article className="translations__card">
            <div className="translations__image">
              <div className="translations__book-cover-placeholder">
                <span>Cover photo</span>
              </div>
            </div>
            <div className="translations__content">
              <div className="translations__card-header">
                <h3 className="translations__card-title">
                  The Hamlet of the Bees
                </h3>
                <span className="translations__year">
                  Whale Cloth Press, 1981
                </span>
              </div>
              <p className="translations__description">
                Valery Larbaud’s nostalgic tribute to the tiny citizens that
                inhabit a small colony at his family home, and their fellowship
                to humankind.
              </p>
              <div className="translations__links">
                <a
                  href="#"
                  className="translations__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View flappable page images (PDF)
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>


    </div>
  );
}

export default Translations;
