import "./Poetry.css";
import cafeImage from "../../assets/cafeIsotope.webp";
import fromNatureImage from "../../assets/From Nature.webp";
import spoonlightImage from "../../assets/The Spoonlight Institute.webp";
import cloudEightImage from "../../assets/Cloud Eight.webp";
import billionesqueImage from "../../assets/Billionesque.webp";
import stateLoungeImage from "../../assets/State Lounge.webp";
import PageHeader from "../../components/PageHeader/PageHeader";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import PublicationCard from "../../components/PublicationCard/PublicationCard";

function Poetry() {
  return (
    <ScrollFadeIn selector=".poetry__publication-card">
      <div className="poetry__container">
        <PageHeader title="Books" description="" className="poetry__header" />

        <section className="poetry__section">
          <div className="poetry__publications-grid">
            <PublicationCard
              coverImage={fromNatureImage}
              title="From Nature"
              publisher="Cuneiform Press"
              year="2019"
              quote={
                <>
                  "Grounded in vernacular and yet displacing it, Alan Bernheimer
                  makes poetry that is somehow aphoristic, surreal, and down to
                  earth."
                  <br />
                  <span className="poetry__book-attribution">—Alli Warren</span>
                </>
              }
              links={[
                {
                  url: "https://www.cuneiformpress.com/collections/catalog/products/alan-bernheimer-from-nature",
                  text: "Order",
                },
              ]}
              className="poetry__publication-card poetry__publication-card--book"
            />

            <PublicationCard
              coverImage={spoonlightImage}
              title="The Spoonlight Institute"
              publisher="Adventures in Poetry"
              year="2009"
              quote={
                <>
                  "The Spoonlight Institute positively glows in the dark with
                  brilliant writing."
                  <br />
                  <span className="poetry__book-attribution">
                    —Ron Silliman
                  </span>
                </>
              }
              links={[
                {
                  url: "https://www.zephyrpress.org/product-page/the-spoonlight-institute",
                  text: "Order",
                },
              ]}
              className="poetry__publication-card poetry__publication-card--book"
            />

            <PublicationCard
              coverImage={cloudEightImage}
              title="Cloud Eight"
              publisher="Sound & Language"
              year="1999"
              description={
                <>
                  <p className="poetry__book-collaboration">
                    with Kit Robinson
                  </p>
                  (out of print, unavailable)
                </>
              }
              className="poetry__publication-card poetry__publication-card--book"
            />

            <PublicationCard
              coverImage={billionesqueImage}
              title="Billionesque"
              publisher="The Figures"
              year="1999"
              quote={
                <>
                  "But prolonged scrutiny of the world has discovered it to be
                  not only vertiginously strange but also in the act of
                  disappearing. As these works suggest, living at language's
                  command, we inevitably find ourselves at a loss. The result,
                  for Bernheimer, is not melancholy but wonder."
                  <br />
                  <span className="poetry__book-attribution">
                    —Lyn Hejinian
                  </span>
                </>
              }
              links={[
                {
                  url: "/contact",
                  text: "Use contact form to order from author",
                },
              ]}
              className="poetry__publication-card poetry__publication-card--book"
            />

            <PublicationCard
              coverImage={stateLoungeImage}
              title="State Lounge"
              publisher="Tuumba"
              year="1981"
              links={[
                {
                  url: "https://eclipsearchive.org/projects/TUUMBA/TUUMBA33/html/",
                  text: "Read/download PDF",
                },
              ]}
              className="poetry__publication-card poetry__publication-card--book"
            />

            <PublicationCard
              coverImage={cafeImage}
              title="Café Isotope"
              publisher="The Figures"
              year="1980"
              description="Out of print"
              links={[
                {
                  url: "https://www.biblio.com/search.php?stage=1&author=alan+bernheimer&title=cafe+isotope&isbn=&keyisbn=&publisher=&illustrator=&mindate=&maxdate=&minprice=&maxprice=&country=&format=&cond=&days_back=&order=priceasc&pageper=20&dist=50&zip=&quantity=",
                  text: "Buy used",
                },
              ]}
              className="poetry__publication-card poetry__publication-card--book"
            />
          </div>
        </section>
      </div>
    </ScrollFadeIn>
  );
}

export default Poetry;
