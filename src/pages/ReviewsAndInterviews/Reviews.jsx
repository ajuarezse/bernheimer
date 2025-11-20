import { useState } from "react";
import "./Reviews.css";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
import interviewImage from "../../assets/interview2.webp";
import lupaMaziarPg1 from "../../assets/reviews/lupaMaziarPg1.webp";
import lupaMaziarPg2 from "../../assets/reviews/lupaMaziarPg2.webp";
import andrewOsbornReview from "../../assets/reviews/andrewOsbornReview.webp";
import billMohrReviewPg1 from "../../assets/reviews/billMohrReviewPPN-1.webp";
import billMohrReviewPg2 from "../../assets/reviews/billMohrReviewPPN-2.webp";
import billMohrReviewPg3 from "../../assets/reviews/billMohrReviewPPN-3.webp";
import greggBiglieriPg1 from "../../assets/reviews/aprGregg-1.webp";
import greggBiglieriPg2 from "../../assets/reviews/aprGregg-2.webp";
import ppNews10QuestionsPg1 from "../../assets/reviews/poetryProjectNewsletter/ppNews10QuestionsForAb-1.webp";
import ppNews10QuestionsPg2 from "../../assets/reviews/poetryProjectNewsletter/ppNews10QuestionsForAb-2.webp";
import ppNews10QuestionsPg3 from "../../assets/reviews/poetryProjectNewsletter/ppNews10QuestionsForAb-3.webp";
import bBrownPg1 from "../../assets/reviews/brown/bBReviewFromNature-1.webp";
import bBrownPg2 from "../../assets/reviews/brown/bBReviewFromNature-2.webp";
import bBrownPg3 from "../../assets/reviews/brown/bBReviewFromNature-3.webp";
import bBrownPg4 from "../../assets/reviews/brown/bBReviewFromNature-4.webp";

function Reviews() {
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
    <div className="reviews">
      {/* <PageHeader
        title="Reviews & Interviews"
        description=""
        className="reviews__header"
      /> */}

      <section className="reviews__section">
        <div className="reviews__group">
          <h3 className="reviews__venue">Interviews</h3>

          <img
            src={interviewImage}
            alt="Alan Bernheimer interview"
            className="reviews__section-image"
          />

          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Rain Taxi</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">
                    "From Nature: An Interview with Alan Bernheimer," Caleb
                    Beckwith
                  </span>
                  <Button
                    href="https://raintaxi.com/from-nature-an-interview-with-alan-bernheimer/"
                    external
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Poetry Project Newsletter</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">
                    "10 Questions for Alan Bernheimer," Stephanie Young
                  </span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [
                          ppNews10QuestionsPg1,
                          ppNews10QuestionsPg2,
                          ppNews10QuestionsPg3,
                        ],
                        "Poetry Project Newsletter - 10 Questions for Alan Bernheimer"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Penn Sound</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">
                    Conversation with Ariel Resnikoff
                  </span>
                  <Button
                    href="https://media.sas.upenn.edu/app/public/watch.php?file_id=208528"
                    external
                  >
                    Watch
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Nowhere Magazine</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Hannah McBride</span>
                  <Button href="https://nowheremag.com/2012/10/2920/" external>
                    Read
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="reviews__section">
        <div className="reviews__group">
          <h3 className="reviews__venue">Reviews</h3>

          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">American Poetry Review</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">
                    Lorraine Lupo and Paul Maziar, November-December, 2020
                  </span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [lupaMaziarPg1, lupaMaziarPg2],
                        "American Poetry Review - Lorraine Lupo and Paul Maziar"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Poetry Project Newsletter</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Bill Mohr</span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [
                          billMohrReviewPg1,
                          billMohrReviewPg2,
                          billMohrReviewPg3,
                        ],
                        "Poetry Project Newsletter - Bill Mohr"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">
                    Introduction to Segue reading
                  </h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Tom Donovan</span>
                  <Button
                    href="https://whof.blogspot.com/2009/12/alan-bernheimer-segue-series.html?fbclid=IwAR0JebmVtuKsfKBDTIcgxfdYnHYwTsTpjvJubo07r6MAc2AOZ9K6BVLP2EU"
                    external
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Brandon Brown</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Brandon Brown</span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [bBrownPg1, bBrownPg2, bBrownPg3, bBrownPg4],
                        "B Brown Review - From Nature"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">
                    Los Angeles Review of Books
                  </h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Paul Maziar</span>
                  <Button
                    href="https://lareviewofbooks.org/article/a-beautiful-space-that-slips-away-philippe-soupault-and-the-french-avant-garde/?fbclid=IwY2xjawJ7gmZleHRuA2FlbQIxMQBicmlkETFxUDJtMlNteUtWMGs0NGpyAR54ruxovxIiY11cG_6wrlIyQZ43TayINQGhDuY_rIwr4hAbcvyTkW-ULNsdEg_aem_PosPKPpPMGYd2HoSzkkaLw"
                    external
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Hyperallergic</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Joseph Nechvatal</span>
                  <Button
                    href="https://hyperallergic.com/362955/a-french-surrealists-eclectic-remembrances-of-his-cohort-finally-in-english/?fbclid=IwY2xjawJ7gztleHRuA2FlbQIxMQBicmlkETFxUDJtMlNteUtWMGs0NGpyAR7MJST6t4OjXsE97zymNGpEkc50FN7xT5Bd7szHIF_0giWfctqVy5LV3IL7vA_aem_qZhTq8iP5KIlV4x7potkKQ"
                    external
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">American Poetry Review</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">
                    Gregg Bigglieri, March-April, 2010
                  </span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [greggBiglieriPg1, greggBiglieriPg2],
                        "American Poetry Review - Gregg Bigglieri"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">
                    Il Bloggio de Plainfeather
                  </h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Jim Mitchell</span>
                  <Button
                    href="https://plainfeather.blogspot.com/search?q=bernheimer"
                    external
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>

            <li className="reviews__item">
              <div className="reviews__content">
                <div className="reviews__item-header">
                  <h3 className="reviews__source">Poetry Project Newsletter</h3>
                </div>
                <div className="reviews__details">
                  <span className="reviews__work">Andrew Osborn</span>
                  <Button
                    onClick={() =>
                      openGallery(
                        [andrewOsbornReview],
                        "Poetry Project Newsletter - Andrew Osborn"
                      )
                    }
                  >
                    Read
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ImageGallery
        images={currentGallery.images}
        isOpen={galleryOpen}
        onClose={closeGallery}
        title={currentGallery.title}
      />
    </div>
  );
}

export default Reviews;
