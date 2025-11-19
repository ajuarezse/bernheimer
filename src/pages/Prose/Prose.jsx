import { useState } from "react";
import "./Prose.css";
import Button from "../../components/Button/Button";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ytyPg01 from "../../assets/prose/yty/youngerThanYesterday-01.webp";
import ytyPg02 from "../../assets/prose/yty/youngerThanYesterday-02.webp";
import ytyPg03 from "../../assets/prose/yty/youngerThanYesterday-03.webp";
import ytyPg04 from "../../assets/prose/yty/youngerThanYesterday-04.webp";
import ytyPg05 from "../../assets/prose/yty/youngerThanYesterday-05.webp";
import ytyPg06 from "../../assets/prose/yty/youngerThanYesterday-06.webp";
import ytyPg07 from "../../assets/prose/yty/youngerThanYesterday-07.webp";
import ytyPg08 from "../../assets/prose/yty/youngerThanYesterday-08.webp";
import ytyPg09 from "../../assets/prose/yty/youngerThanYesterday-09.webp";
import ytyPg10 from "../../assets/prose/yty/youngerThanYesterday-10.webp";
import ytyPg11 from "../../assets/prose/yty/youngerThanYesterday-11.webp";
import ytyPg12 from "../../assets/prose/yty/youngerThanYesterday-12.webp";
import ytyPg13 from "../../assets/prose/yty/youngerThanYesterday-13.webp";
import ytyPg14 from "../../assets/prose/yty/youngerThanYesterday-14.webp";
import ytyPg15 from "../../assets/prose/yty/youngerThanYesterday-15.webp";
import ytyPg16 from "../../assets/prose/yty/youngerThanYesterday-16.webp";
import ytyPg17 from "../../assets/prose/yty/youngerThanYesterday-17.webp";
import ytyPg18 from "../../assets/prose/yty/youngerThanYesterday-18.webp";
import ytyPg19 from "../../assets/prose/yty/youngerThanYesterday-19.webp";
import ytyPg20 from "../../assets/prose/yty/youngerThanYesterday-20.webp";

function Prose() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState({
    images: [],
    title: "",
  });

  const openGallery = (images, title) => {
    setCurrentGallery({ images, title });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <div className="prose-container">
      {/* <PageHeader title="Prose" description="" className="prose-header" /> */}

      <section className="prose-section">
        <div className="prose-list">
          <div className="prose-group">
            <h3 className="prose-venue">Nowhere Magazine</h3>
            <ul className="prose-items">
              <li className="prose-item">
                <span className="prose-title-text">Retroscope</span>
                <Button
                  href="https://nowheremag.com/category/retroscope/"
                  external
                >
                  Read
                </Button>
              </li>
              <li className="prose-item">
                <span className="prose-title-text">
                  A Little Tour of Provence
                </span>
                <Button
                  href="https://nowheremag.com/?s=bernheimer+provence"
                  external
                >
                  Read
                </Button>
              </li>
              <li className="prose-item">
                <span className="prose-title-text">Paris Journal</span>
                <Button
                  href="https://nowheremag.com/?s=bernheimer+paris"
                  external
                >
                  Read
                </Button>
              </li>
            </ul>
          </div>

          <ul className="prose-items">
            <li className="prose-item">
              <span className="prose-title-text">Younger Than Yesterday</span>
              <Button
                onClick={() =>
                  openGallery(
                    [
                      ytyPg01,
                      ytyPg02,
                      ytyPg03,
                      ytyPg04,
                      ytyPg05,
                      ytyPg06,
                      ytyPg07,
                      ytyPg08,
                      ytyPg09,
                      ytyPg10,
                      ytyPg11,
                      ytyPg12,
                      ytyPg13,
                      ytyPg14,
                      ytyPg15,
                      ytyPg16,
                      ytyPg17,
                      ytyPg18,
                      ytyPg19,
                      ytyPg20,
                    ],
                    "Younger Than Yesterday"
                  )
                }
              >
                Read
              </Button>
            </li>
            <li className="prose-item">
              <span className="prose-title-text">Subject Matter</span>
              <Button
                href="https://eclipsearchive.org/projects/HILLS/Hills8/pictures/004.html"
                external
              >
                Read
              </Button>
            </li>
            <li className="prose-item">
              <span className="prose-title-text">
                Sailing Alone around the Word
              </span>
              <span className="prose-subtitle"> introduction</span>
              <Button disabled>PDF coming soon</Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="prose-section prose-section--reviews">
        <div className="prose-group">
          <h3 className="prose-venue">Reviews</h3>

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

      <ImageGallery
        images={currentGallery.images}
        title={currentGallery.title}
        isOpen={galleryOpen}
        onClose={closeGallery}
      />
    </div>
  );
}

export default Prose;
