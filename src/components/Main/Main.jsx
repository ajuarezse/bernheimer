import { useState } from "react";
import "./Main.css";
import cafeImage from "../../assets/cafe_isotope_250.jpg"; // Proper image import

function Main() {
  const categories = [
    {
      name: "Poetry",
      image: cafeImage, // Use the imported image
      fallbackColor: "#FF6B6B", // Fallback if image fails
    },
    { name: "Essays", color: "#4ECDC4" },
    { name: "Translations", color: "#45B7D1" },
    { name: "Anthologies", color: "#FFBE85" },
    { name: "Plays", color: "#A78BFA" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="main">
      {categories.map((category, index) => (
        <div
          key={category.name}
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
        </div>
      ))}
    </main>
  );
}

export default Main;
