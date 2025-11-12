import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import cafeImage from "../../assets/cafeIsotope.webp";
import translationBookCover from "../../assets/theHamletOfTheBees.webp";
import heroImage from "../../assets/heroImage.webp";
import fromNatureImage from "../../assets/From Nature.webp";
import parisMapImage from "../../assets/parisMap.webp";

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
      image: parisMapImage,
      fallbackColor: "#45B7D1",
      path: "prose",
    },
    {
      name: "Reviews & Interviews",
      image: fromNatureImage,
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
          } ${
            category.name === "Prose" ? "home__category-section--prose" : ""
          } ${
            category.name === "Poetry" ? "home__category-section--poetry" : ""
          } ${
            category.name === "Reviews & Interviews"
              ? "home__category-section--reviews"
              : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h2 className="home__category-title">{category.name}</h2>
          <div
            className={`home__category ${
              category.name === "Prose" ? "home__category--prose" : ""
            } ${category.name === "Poetry" ? "home__category--poetry" : ""} ${
              category.name === "Reviews & Interviews"
                ? "home__category--reviews"
                : ""
            }`}
            style={{
              backgroundColor:
                category.image &&
                category.name !== "Prose" &&
                category.name !== "Poetry" &&
                category.name !== "Reviews & Interviews"
                  ? "white"
                  : (category.name === "Prose" ||
                      category.name === "Poetry" ||
                      category.name === "Reviews & Interviews") &&
                    category.image
                  ? "transparent"
                  : category.color || category.fallbackColor,
              ...(category.image &&
                category.name !== "Prose" &&
                category.name !== "Poetry" &&
                category.name !== "Reviews & Interviews" && {
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }),
            }}
          >
            {(category.name === "Prose" ||
              category.name === "Poetry" ||
              category.name === "Reviews & Interviews") &&
              category.image && (
                <>
                  <div
                    className="home__category-bg-mask"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  />
                  <div
                    className="home__category-main-image"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  />
                </>
              )}
          </div>
        </NavLink>
      ))}
    </main>
  );
}

export default Home;
