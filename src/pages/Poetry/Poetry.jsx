import "./Poetry.css";
import cafeImage from "../../assets/cafe_isotope_250.webp";
import fromNatureImage from "../../assets/From Nature.webp";
import spoonlightImage from "../../assets/The Spoonlight Institute.webp";
import cloudEightImage from "../../assets/Cloud Eight.webp";
import billionesqueImage from "../../assets/Billionesque.webp";
import stateLoungeImage from "../../assets/State Lounge.webp";
import PageHeader from "../../components/PageHeader/PageHeader";

function Poetry() {
  return (
    <div className="poetry__container">
      <PageHeader title="Books" description="" className="poetry__header" />

      <section className="poetry__section">
        <div className="poetry__publications-grid">
          {/* From Nature - 2019 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={fromNatureImage}
                alt="From Nature book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">From Nature</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2019</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">Cuneiform Press, 2019</p>
              </div>

              <p className="poetry__book-description">
                "Grounded in vernacular and yet displacing it, Alan Bernheimer
                makes poetry that is somehow aphoristic, surreal, and down to
                earth."
                <br />
                <span className="poetry__book-attribution">—Alli Warren</span>
              </p>

              <div className="poetry__book-links">
                <a
                  href="https://www.cuneiformpress.com/collections/catalog/products/alan-bernheimer-from-nature"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order
                </a>
              </div>
            </div>
          </article>

          {/* The Spoonlight Institute - 2009 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={spoonlightImage}
                alt="The Spoonlight Institute book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">The Spoonlight Institute</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">2009</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">
                  Adventures in Poetry, 2009
                </p>
              </div>

              <p className="poetry__book-description">
                "The Spoonlight Institute positively glows in the dark with
                brilliant writing."
                <br />
                <span className="poetry__book-attribution">—Ron Silliman</span>
              </p>

              <div className="poetry__book-links">
                <a
                  href="https://www.zephyrpress.org/product-page/the-spoonlight-institute"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order
                </a>
              </div>
            </div>
          </article>

          {/* Cloud Eight - 1999 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={cloudEightImage}
                alt="Cloud Eight book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Cloud Eight</h3>
                <p className="poetry__book-collaboration">with Kit Robinson</p>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">1999</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">Sound & Language, 1999</p>
              </div>

              <p className="poetry__book-description">
                (out of print, unavailable)
              </p>
            </div>
          </article>

          {/* Billionesque - 1999 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={billionesqueImage}
                alt="Billionesque book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Billionesque</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">1999</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">The Figures, 1999</p>
              </div>

              <p className="poetry__book-description">
                "But prolonged scrutiny of the world has discovered it to be not
                only vertiginously strange but also in the act of disappearing.
                As these works suggest, living at language's command, we
                inevitably find ourselves at a loss. The result, for Bernheimer,
                is not melancholy but wonder."
                <br />
                <span className="poetry__book-attribution">—Lyn Hejinian</span>
              </p>

              <div className="poetry__book-links">
                <a href="/contact" className="poetry__book-link">
                  Use contact form to order from author
                </a>
              </div>
            </div>
          </article>

          {/* State Lounge - 1981 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={stateLoungeImage}
                alt="State Lounge book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">State Lounge</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">1981</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">Tuumba, 1981</p>
              </div>

              <div className="poetry__book-links">
                <a
                  href="https://eclipsearchive.org/projects/TUUMBA/TUUMBA33/html/"
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read/download PDF
                </a>
              </div>
            </div>
          </article>

          {/* Café Isotope - 1980 */}
          <article className="poetry__publication-card poetry__publication-card--book">
            <div className="poetry__book-image">
              <img
                src={cafeImage}
                alt="Café Isotope book cover"
                className="poetry__book-cover"
              />
            </div>

            <div className="poetry__book-content">
              <div className="poetry__book-header">
                <h3 className="poetry__book-title">Café Isotope</h3>
                <div className="poetry__book-meta">
                  <span className="poetry__book-year">1980</span>
                </div>
              </div>

              <div className="poetry__book-details">
                <p className="poetry__publisher-info">The Figures, 1980</p>
              </div>

              <p className="poetry__book-description">Out of print</p>

              <div className="poetry__book-links">
                <a
                  href="https://www.biblio.com/search.php?stage=1&author=alan+bernheimer&title=cafe+isotope&isbn=&keyisbn=&publisher=&illustrator=&mindate=&maxdate=&minprice=&maxprice=&country=&format=&cond=&days_back=&order=priceasc&pageper=20&dist=50&zip=&quantity="
                  className="poetry__book-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy used
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Poetry;
