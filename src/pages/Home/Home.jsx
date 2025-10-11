import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import cafeImage from "../../assets/cafe_isotope_250.webp";
import LostProfiles from "../../assets/LostProfiles.webp";

function Home() {
  const categories = [
    {
      name: "About",
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
      name: "Translations",
      image: LostProfiles,
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
          className={`category-section ${
            hoveredIndex === index ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h2 className="category-title">{category.name}</h2>
          <div
            className="category"
            style={{
              backgroundColor: category.color || category.fallbackColor,
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
