import "./AlanBernheimerPages.css";
import pa12Image from "../../assets/pa12.webp";

function AlanBernheimerPages() {
  return (
    <section className="pages">
      <div className="pages__wrapper">
        <div className="pages__container">
          <div className="pages__header">
            <img
              src={pa12Image}
              alt="San Francisco Poets Theater"
              className="pages__header-image"
            />
            <div className="pages__overlay">
              <h2 className="pages__title">Alan Bernheimer Pages</h2>
              <div className="pages__links">
                <a
                  href="https://writing.upenn.edu/pennsound/x/Bernheimer.php"
                  className="pages__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PennSound
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Alan_Bernheimer"
                  className="pages__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
                <a
                  href="https://writing.upenn.edu/epc/authors/bernheimer/"
                  className="pages__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic Poetry Center
                </a>
                <a
                  href="https://www.thegrandpiano.org/poetstheater.html"
                  className="pages__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SF Poets Theater
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlanBernheimerPages;
