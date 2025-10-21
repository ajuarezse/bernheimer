import "./Poetry.css";
import cafeImage from "../../assets/cafe_isotope_250.webp";
import translationBookCover from "../../assets/translationBookCover.webp";
import PageHeader from "../../components/PageHeader/PageHeader";

function Poetry() {
  return (
    <div className="poetry__container">
      <PageHeader
        title="Poetry"
        description="An exploration of language, memory, and the spaces between words—where meaning emerges from silence and truth lives in the pause."
        className="poetry__header"
      />

      <section className="poetry__section">
        <h2 className="poetry__section-title">Published Poetry</h2>

        <div className="poetry__publications-grid">
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={cafeImage}
                alt="Evening Correspondences book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Cafe Isotope</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2023</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">
                  Copper Canyon Press, 2023
                </p>
              </div>

              <p className="poetry__book-description">
                A collection exploring the delicate correspondence between
                memory and present moment, these poems navigate the territories
                of loss, translation, and the search for meaning in everyday
                encounters. Winner of the 2023 Lenore Marshall Poetry Prize.
              </p>

              <div className="poetry__book-links">
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Button
                </a>
              </div>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={translationBookCover}
                alt="Migrations book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Migrations</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2021</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">Graywolf Press, 2021</p>
              </div>

              <p className="poetry__book-description">
                An intimate exploration of displacement and belonging, these
                poems trace journeys both literal and metaphorical. From
                childhood migrations to the movement between languages, this
                debut collection establishes a distinctive voice in contemporary
                poetry.
              </p>

              <div className="poetry__book-links">
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Button
                </a>
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Button
                </a>
              </div>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--journal">
            <div className="poetry__publication-content">
              <div className="poetry__publication-header">
                <h3 className="poetry__publication-title">
                  The Literary Review
                </h3>
                <div className="poetry__publication-meta">
                  <span className="poetry__publication-year">2023</span>
                  <span className="poetry__publication-type">Journal</span>
                </div>
              </div>
              <p className="poetry__publication-details">
                "Migrations" and "Winter Correspondence"
                <span className="poetry__publication-issue">
                  Issue 47, Spring 2023
                </span>
              </p>
              <a
                href="#"
                className="poetry__publication-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Online
              </a>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--journal">
            <div className="poetry__publication-content">
              <div className="poetry__publication-header">
                <h3 className="poetry__publication-title">
                  Poetry International
                </h3>
                <div className="poetry__publication-meta">
                  <span className="poetry__publication-year">2023</span>
                  <span className="poetry__publication-type">Journal</span>
                </div>
              </div>
              <p className="poetry__publication-details">
                "Five Poems on Distance"
                <span className="poetry__publication-issue">
                  Vol. 28, No. 2
                </span>
              </p>
              <a
                href="#"
                className="poetry__publication-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Issue
              </a>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--journal">
            <div className="poetry__publication-content">
              <div className="poetry__publication-header">
                <h3 className="poetry__publication-title">The Paris Review</h3>
                <div className="poetry__publication-meta">
                  <span className="poetry__publication-year">2022</span>
                  <span className="poetry__publication-type">Journal</span>
                </div>
              </div>
              <p className="poetry__publication-details">
                "Autobiography in a Foreign Language"
                <span className="poetry__publication-issue">No. 245</span>
              </p>
              <a
                href="#"
                className="poetry__publication-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Online
              </a>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--journal">
            <div className="poetry__publication-content">
              <div className="poetry__publication-header">
                <h3 className="poetry__publication-title">
                  American Poetry Review
                </h3>
                <div className="poetry__publication-meta">
                  <span className="poetry__publication-year">2022</span>
                  <span className="poetry__publication-type">Journal</span>
                </div>
              </div>
              <p className="poetry__publication-details">
                "Three Translations from Uncertainty"
                <span className="poetry__publication-issue">
                  September/October 2022
                </span>
              </p>
              <a
                href="#"
                className="poetry__publication-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Archive
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Poetry;
