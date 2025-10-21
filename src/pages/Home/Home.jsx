import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import CategoryOverlay from "../../components/CategoryOverlay/CategoryOverlay";
import cafeImage from "../../assets/cafe_isotope_250.webp";
import LostProfiles from "../../assets/LostProfiles.webp";
import translationBookCover from "../../assets/translationBookCover.webp";
import heroImage from "../../assets/heroImage.webp";

function Home() {
  const categories = [
    {
      name: "About",
      image: heroImage,
      fallbackColor: "#FF6B6B",
      path: "about",
      overlay: {
        pageLabel: "Learn More About the Author →",
        workTitle: "Literary Journey",
        workAuthor: "Personal Biography",
        workDetails: "Writing & Background",
        workYear: "Current",
      },
    },
    {
      name: "Poetry",
      image: cafeImage,
      fallbackColor: "#4ECDC4",
      path: "poetry",
      overlay: {
        pageLabel: "Explore Poetry Collections →",
        workTitle: "Café Isotope",
        workAuthor: "Recent Collection",
        workDetails: "Poetry Chapbook",
        workYear: "2023",
      },
    },
    {
      name: "Prose",
      fallbackColor: "#45B7D1",
      path: "prose",
      overlay: {
        pageLabel: "Read Prose Works →",
        workTitle: "Featured Story",
        workAuthor: "Short Fiction",
        workDetails: "Published Work",
        workYear: "2023",
      },
    },
    {
      name: "Reviews & Interviews",
      color: "#FFBE85",
      path: "reviews",
      overlay: {
        pageLabel: "View Reviews & Interviews →",
        workTitle: "Recent Review",
        workAuthor: "Literary Criticism",
        workDetails: "Published Article",
        workYear: "2023",
      },
    },
    {
      name: "Translation",
      image: translationBookCover,
      color: "#A78BFA",
      path: "translations",
      overlay: {
        pageLabel: "View Translation Work →",
        workTitle: "Work Name",
        workAuthor: "by Author Name",
        workDetails: "Short Details Here",
        workYear: "2023",
      },
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
          >
            {category.overlay && (
              <CategoryOverlay
                pageLabel={category.overlay.pageLabel}
                workTitle={category.overlay.workTitle}
                workAuthor={category.overlay.workAuthor}
                workDetails={category.overlay.workDetails}
                workYear={category.overlay.workYear}
              />
            )}
          </div>
        </NavLink>
      ))}
    </main>
  );
}

export default Home;
