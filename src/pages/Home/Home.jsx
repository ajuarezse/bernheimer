import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import cafeImage from "../../assets/cafe_isotope_250.webp";
import translationBookCover from "../../assets/theHamletOfTheBees.webp";
import heroImage from "../../assets/heroImage.webp";

function Home() {
  const categories = [
    {
      name: "About",
      image: heroImage,
      fallbackColor: "#FF6B6B",
      path: "about",
    },
    {
      name: "Poetry",
      image: cafeImage,
      fallbackColor: "#4ECDC4",
      path: "poetry",
    },
    {
      name: "Prose",
      fallbackColor: "#45B7D1",
      path: "prose",
    },
    {
      name: "Reviews & Interviews",
      color: "#FFBE85",
      path: "reviews",
    },
    {
      name: "Translation",
      image: translationBookCover,
      color: "#A78BFA",
      path: "translations",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="home">
      {categories.map((category, index) => (
        <NavLink
          key={category.name}
          to={category.path}
          className={`home__category-section ${
            hoveredIndex === index ? "home__category-section--hovered" : ""
          } ${
            category.name === "About" ? "home__category-section--about" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h2 className="home__category-title">{category.name}</h2>
          <div
            className="home__category"
            style={{
              backgroundColor: category.image
                ? "white"
                : category.color || category.fallbackColor,
              ...(category.image && {
                backgroundImage: `url(${category.image})`,
                backgroundSize: "auto 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }),
            }}
          ></div>
        </NavLink>
      ))}
    </main>
  );
}

export default Home;
