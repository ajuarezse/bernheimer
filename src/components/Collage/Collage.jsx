import "./Collage.css";

// Collage images
import collage1 from "../../assets/collage/3SomeCrop.webp";
import collage2 from "../../assets/collage/702Some.webp";
import collage3 from "../../assets/collage/aAndLily.webp";
import collage4 from "../../assets/collage/abReadingHolloway.webp";
import collage5 from "../../assets/collage/athens.webp";
import collage6 from "../../assets/collage/bridge.webp";
import collage7 from "../../assets/collage/galerie2.webp";
import collage8 from "../../assets/collage/hat.webp";
import collage9 from "../../assets/collage/pointing.webp";
import collage10 from "../../assets/collage/sailing1.webp";

function Collage() {
  return (
    <div className="collage">
      <div className="collage__stack">
        <img src={collage2} alt="Alan Bernheimer" className="collage__image" />
        <img
          src={collage4}
          alt="Alan Bernheimer"
          className="collage__image collage__image--span-2"
        />
        <img src={collage6} alt="Alan Bernheimer" className="collage__image" />
        <img
          src={collage1}
          alt="Alan Bernheimer"
          className="collage__image collage__image--span-2"
        />
        <img src={collage8} alt="Alan Bernheimer" className="collage__image" />
        <img src={collage10} alt="Alan Bernheimer" className="collage__image" />
        <img src={collage9} alt="Alan Bernheimer" className="collage__image" />
        <img
          src={collage3}
          alt="Alan Bernheimer"
          className="collage__image collage__image--span-2"
        />
        <img src={collage5} alt="Alan Bernheimer" className="collage__image" />
        <img
          src={collage7}
          alt="Alan Bernheimer"
          className="collage__image collage__image--span-2"
        />
      </div>
    </div>
  );
}

export default Collage;
