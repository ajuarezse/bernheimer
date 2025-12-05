import "./Photography.css";
import poetsComposite from "../../assets/poets composite.webp";
import reflectograph from "../../assets/reflectograph.webp";
import instagramWall from "../../assets/instagramWall.webp";
import FishEyeMagnifier from "../FishEyeMagnifier/FishEyeMagnifier";
import Button from "../Button/Button";

function Photography() {
  return (
    <section className="photography">
      <h2 className="photography__title">Photography</h2>
      <div className="photography__container">
        <div className="photography__grid">
          <article className="photography__card photography__card--landscape">
            <div className="photography__content">
              <h3 className="photography__card-title">Poets Reading</h3>
              <p className="photography__description">
                1,000 portraits of poets reading, from 2008 to the present
              </p>
              <div className="photography__image-landscape">
                <a
                  href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", cursor: "pointer" }}
                  className="photography__link-image"
                >
                  <FishEyeMagnifier
                    src={poetsComposite}
                    alt="Composite of poets reading"
                    magnifierSize={160}
                    zoom={2}
                    className="photography__landscape"
                  />
                </a>
              </div>
              <div className="photography__links">
                <Button
                  href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                  external
                >
                  View Collection
                </Button>
              </div>
            </div>
          </article>

          <article className="photography__card photography__card--landscape">
            <div className="photography__content">
              <h3 className="photography__card-title">Reflectographs</h3>
              <p className="photography__description">
                My father's cameraless photographs made by a point of light
                reflected onto photosensitive paper
              </p>
              <div className="photography__image-landscape">
                <img
                  src={reflectograph}
                  alt="Reflectograph artwork"
                  className="photography__landscape"
                />
              </div>
              <div className="photography__links">
                <Button
                  href="https://reflectographs.com/reflectographs/"
                  external
                >
                  Explore Series
                </Button>
              </div>
            </div>
          </article>

          <article className="photography__card photography__card--instagram">
            <h3 className="photography__card-title">Instagram</h3>
            <div className="photography__instagram-wrapper">
              <a
                href="https://www.instagram.com/alanbernheimer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramWall}
                  alt="Instagram gallery preview"
                  className="photography__instagram-image"
                />
              </a>
            </div>
            <div className="photography__links">
              <Button href="https://www.instagram.com/alanbernheimer" external>
                Follow on Instagram
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Photography;
