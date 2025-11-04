import "./Prose.css";
import PageHeader from "../../components/PageHeader/PageHeader";

function Prose() {
  return (
    <div className="prose-container">
      <PageHeader title="Prose" description="" className="prose-header" />

      <section className="prose-section">
        <div className="prose-list">
          <div className="prose-group">
            <h3 className="prose-venue">Nowhere Magazine</h3>
            <ul className="prose-items">
              <li className="prose-item">
                <span className="prose-title-text">Retroscope</span>
                <a
                  href="https://nowheremag.com/category/retroscope/"
                  className="prose-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>
              </li>
              <li className="prose-item">
                <span className="prose-title-text">
                  A Little Tour of Provence
                </span>
                <a
                  href="https://nowheremag.com/?s=bernheimer+provence"
                  className="prose-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>
              </li>
              <li className="prose-item">
                <span className="prose-title-text">Paris Journal</span>
                <a
                  href="https://nowheremag.com/?s=bernheimer+paris"
                  className="prose-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>
              </li>
            </ul>
          </div>

          <ul className="prose-items">
            <li className="prose-item">
              <span className="prose-title-text">Younger Than Yesterday</span>
              <button className="prose-button" disabled>
                PDF
              </button>
            </li>
            <li className="prose-item">
              <span className="prose-title-text">Subject Matter</span>
              <a
                href="https://eclipsearchive.org/projects/HILLS/Hills8/pictures/004.html"
                className="prose-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </a>
            </li>
            <li className="prose-item">
              <span className="prose-title-text">
                Sailing Alone around the Word
              </span>
              <span className="prose-subtitle"> introduction</span>
              <button className="prose-button" disabled>
                PDF
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="prose-section prose-section--reviews">
        <h2 className="section-title">Reviews</h2>

        <div className="prose-list">
          <ul className="prose-items prose-items--reviews">
            <li className="prose-item prose-item--review">
              <span className="prose-title-text">Devotional Cinema</span>,
              Nathaniel Dorsky
              <span className="prose-publication">
                {" "}
                — Poetry Project Newsletter (April/May 2004)
              </span>
            </li>
            <li className="prose-item prose-item--review">
              <span className="prose-title-text">Here Come the Warm Jets</span>,
              Alli Warren
              <span className="prose-publication">
                {" "}
                — Poetry Project Newsletter (October-November 2013)
              </span>
            </li>
            <li className="prose-item prose-item--review">
              <span className="prose-title-text">Warren Sonbert</span>
              <span className="prose-publication">
                {" "}
                — Poetry Project Newsletter (October-November 1995)
              </span>
            </li>
            <li className="prose-item prose-item--review">
              <span className="prose-title-text">Larry Fagin</span>
              <span className="prose-publication">
                {" "}
                — Poetry Project Newsletter (October-November 2017)
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Prose;
