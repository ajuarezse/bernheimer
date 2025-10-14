import "./Poetry.css";

function Poetry() {
  return (
    <div className="poetry__container">
      <div className="poetry__header">
        <h1 className="poetry__title">Poetry</h1>
        <div className="poetry__intro">
          <p className="poetry__lead">
            An exploration of language, memory, and the spaces between words—
            where meaning emerges from silence and truth lives in the pause.
          </p>
        </div>
      </div>

      <section className="poetry__section">
        <h2 className="poetry__section-title">Published Poetry</h2>

        <div className="poetry__publications-grid">
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <div className="poetry__book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Evening Correspondences</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2023</span>
                  <span className="poetry__publication-type">Book</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">
                  <strong>Publisher:</strong> Copper Canyon Press
                </p>
                <p className="poetry__pages-info">
                  <strong>Pages:</strong> 96
                </p>
                <p className="poetry__isbn-info">
                  <strong>ISBN:</strong> 978-1-55659-612-3
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
                  Purchase
                </a>
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
                </a>
              </div>
            </div>
          </article>

          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <div className="poetry__book-cover-placeholder">
                <span>Book Cover</span>
              </div>
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Migrations</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2021</span>
                  <span className="poetry__publication-type">Book</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">
                  <strong>Publisher:</strong> Graywolf Press
                </p>
                <p className="poetry__pages-info">
                  <strong>Pages:</strong> 72
                </p>
                <p className="poetry__isbn-info">
                  <strong>ISBN:</strong> 978-1-64445-087-2
                </p>
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
                  Purchase
                </a>
                <a
                  href="#"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
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

      <section className="poetry__section">
        <h2 className="poetry__section-title">Selected Poems</h2>

        <div className="poetry__poems-grid">
          <div className="poetry__poem-card">
            <h3 className="poetry__poem-title">Evening Light</h3>
            <div className="poetry__poem-content">
              The last hour holds itself like water in cupped hands—
              translucent, fleeting, too precious to drink. Through windows,
              shadows lengthen their daily arguments with light, while somewhere
              a child learns the weight of growing quiet. This is how we measure
              time: not in minutes but in moments when the ordinary world
              reveals its hidden grammar.
            </div>
            <div className="poetry__poem-meta">
              <span className="poetry__poem-year">2023</span>
            </div>
          </div>

          <div className="poetry__poem-card">
            <h3 className="poetry__poem-title">Translation</h3>
            <div className="poetry__poem-content">
              Between languages lives a country I have never visited but somehow
              know— where words shed their familiar clothes and stand naked in
              foreign air, where meaning travels like light through water, bent
              but not broken, arriving changed. Here, in this borderland, I am
              both translator and translated, finding myself in the spaces
              between what was said and what was heard.
            </div>
            <div className="poetry__poem-meta">
              <span className="poetry__poem-year">2022</span>
            </div>
          </div>

          <div className="poetry__poem-card">
            <h3 className="poetry__poem-title">Library, Late Afternoon</h3>
            <div className="poetry__poem-content">
              Dust motes dance in slanted light, each particle a tiny world
              spinning through the cathedral of accumulated silence. Between the
              stacks, centuries converse in whispered arguments over love and
              war and time. I pull a book from its shelf, feel the weight of
              other hands that turned these pages, searching for the same
              inexplicable comfort that comes from knowing we are not the first
              to wonder at the mystery of being briefly, beautifully alive.
            </div>
            <div className="poetry__poem-meta">
              <span className="poetry__poem-year">2023</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Poetry;
