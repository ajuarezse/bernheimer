import { useState } from "react";
import "./Main.css";

function Main() {
  const categories = [
    { name: "Poetry", color: "#FF6B6B" },
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
          style={{ backgroundColor: category.color }}
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
