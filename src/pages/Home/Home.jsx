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
      path: "about", // Added path
    },
    {
      name: "Poetry",
      image: cafeImage,
      fallbackColor: "#4ECDC4",
      path: "poetry", // Added path
    },
    {
      name: "Prose",
      fallbackColor: "#45B7D1",
      path: "prose", // Added path
    },
    {
      name: "Reviews & Interviews",
      color: "#FFBE85",
      path: "reviews", // Added path
    },
    {
      name: "Translations",
      image: LostProfiles,
      color: "#A78BFA",
      path: "translations", // Added path
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="home">
      {categories.map((category, index) => (
        <NavLink
          key={category.name}
          to={category.path}
          className={`category ${hoveredIndex === index ? "hovered" : ""}`}
          style={{
            backgroundColor: category.color || category.fallbackColor,
            ...(category.image && {
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }),
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h2>{category.name}</h2>
        </NavLink>
      ))}
    </main>
  );
}

export default Home;
