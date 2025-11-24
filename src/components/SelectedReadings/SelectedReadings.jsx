import { useState } from "react";
import "./SelectedReadings.css";
import alanReadingImage from "../../assets/alanReading.webp";

function SelectedReadings() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (location) => {
    setExpandedSections((prev) => ({
      ...prev,
      [location]: !prev[location],
    }));
  };

  const readingsData = [
    {
      location: "San Francisco",
      readings: [
        {
          text: "Bird & Beckett Bookstore, with Kit Robinson and Neeli Cherkovski (August 4, 2022)",
          link: "https://www.youtube.com/watch?v=nQTP3lHCLO0",
        },
        {
          text: "The Lab, with Stephanie Young and Matvei Yankelevich (March 14, 2017)",
          link: "https://archive.org/details/thelabsf_2017-03-14_False-Starts-Bernheimer.mp4",
        },
        {
          text: "Berkeley Arts Festival, Stephen Rodefer memorial (November 21, 2015)",
          link: "https://diva.sfsu.edu/collections/poetrycenter/bundles/227958",
        },
        "The Green Arcade, with Sophia Dahlin (October 6, 2019)",
        {
          text: "The Green Arcade, Michael Gizzi's Collected Poems, a Celebration (October 2, 2015)",
          link: "https://diva.sfsu.edu/collections/poetrycenter/bundles/227796",
        },
        {
          text: "The Green Arcade, Frank O'Hara's Lunch Poems 50th Anniversary Reading (February 6, 2015)",
          link: "https://diva.sfsu.edu/collections/poetrycenter/bundles/231110",
        },
        "Books & Bookshelves, with Dawn-Michelle Baude (February 24, 2010)",
        "Small Press Traffic, with Carla Harryman (December 4, 2009)",
        "The Poetry Center, SF State University, with Merrill Gilfillan (2003)",
        "Small Press Traffic, with Tom Mandel (February 23. 1983)",
        "Tassajara Bakery, with Robert Harris",
        "Intersection for the Arts (1981)",
        "80 Langton Street (June 16, 1980)",
        "The Poetry Center, SF State University, with Chris Dewdney (February 25,1980?)",
        "The Grand Piano, with Erica Hunt and Rodger Kamenetz (June 13, 1978); with Ted Pearson (June 7, 1977)",
        "Julliette's Teashop, with Jean Day (June 22, 197?)",
        "New College of California, with Steve Benson (October 10, 197?)",
        "Third Floor Bookstore, with Kit Robinson (1977)",
      ],
    },
    {
      location: "Berkeley",
      readings: [
        "Harry Bernstein's living room. with Jacob Kahn (August 10, 2025)",
        "2727 California St., with Aaron Simon and Keith Donnell Jr (July 16, 2023); with Lorraine Lupo and Claudia La Rocco (March 26, 2023)",
        {
          text: "Tom Raworth Memorial Reading, University of California, Berkeley (April 6, 2018)",
          link: "https://diva.sfsu.edu/collections/poetrycenter/bundles/235814",
        },
        "Ted Greenwald Memorial Reading, Moe's Books (October 5, 2016)",
        {
          text: "Holloway Series, UC Berkeley, with Jane Gregory (November 12, 2009)",
          link: "https://www.youtube.com/watch?v=4Py0_6Auejc",
        },
        "Moe's Books w Robert Harris",
        "Julia Morgan Center, with David Bromige (June 16, 1980)",
        {
          text: "KPFA 94.1 FM, 'In the American Tree: New Writing by Poets,' radio program hosted by Lyn Hejinian and Kit Robinson (November 10, 1978)",
          link: "https://writing.upenn.edu/pennsound/x/Bernheimer.php",
        },
      ],
    },
    {
      location: "Oakland",
      readings: [
        "E.M. Wolfman Books, with Ariel Resnikoff, and Kit Robinson, (December 22, 2015)",
        "Diesel Books (November 15, 2016); with Kit Robinson (October, 1994)",
      ],
    },
    {
      location: "Los Angeles",
      readings: [
        "Poetic Research Bureau, with Martha Ronk (March 8, 2020); with Aaron Kunin and Matt Timmons (February 7, 2010)",
        "Artbook (November 20, 2016)",
        "Book Soup, with Jed Rasula (November 21, 2016)",
        "Beyond Baroque, with Kit Robinson (1977)",
      ],
    },
    {
      location: "San Diego",
      readings: [
        "University of California, San Diego, with Kit Robinson (November 5, 1986)",
      ],
    },
    {
      location: "Point Reyes Station, Calif.",
      readings: ["The Dance Palace, with Kit Robinson and Alex Smith (1971)"],
    },
    {
      location: "Mill Valley, Calif.",
      readings: ["Mill Valley Book Depot, with Stephen Rodefer (May 12, 1982)"],
    },
    {
      location: "Ashland, Ore.",
      readings: [
        "Coburn Art Gallery, Ashland University, with Brandon Downing and Clark Coolidge (February 19, 2014)",
      ],
    },
    {
      location: "Portland, Ore.",
      readings: [
        "Passages Bookshop (Dec. 6, 2016); with Anabel Lee (June 24, 2023); with (January 31, 2021); with Seann McCollum (June 8, 2019)",
        "Spare Room at Glyph Café, with Stephanie Strickland (Feb. 23, 2014)",
      ],
    },
    {
      location: "Chicago",
      readings: ["Danny's Tavern, with Karyna McGlynn (December 9, 2009)"],
    },
    {
      location: "Seattle",
      readings: [
        "AWP Book Fair (February 27, 2014)",
        "Margin Shift, Seattle University, with Allison Cobb, Jen Coleman, and Laura Goldstein (February 27, 2014)",
      ],
    },
    {
      location: "Baltimore",
      readings: [
        "Community College of Baltimore, with Rodger Kamenetz (November 27, 1979)",
      ],
    },
    {
      location: "New York City",
      readings: [
        {
          text: "DIA Chelsea, with Jean Day (May 14, 2019)",
          link: "https://diaart.org/media/watch-listen/alan-bernheimer-and-jean-day-video-from-readings-in-contemporary-poetry",
        },
        "Berl's Poetry Shop (January 22, 2017)",
        "Unnameable Books, Jackie Wang, Oki Sogumi, and Nat Raha (June 6, 2015)",
        "192 Books (January 19, 2017)",
        "KGB Bar, with Aaron Simon and Genya Turovskaya (February 8, 2016)",
        "Segue Series at the Bowery Poetry Club, with Daniel Snelson (December 12, 2009)",
        "The Poetry Project, with Paul Metcalf (1979); with Tim Davis (April 18, 2001); Bill Berkson memorial (September 14, 2016); Ted Greenwald memorial (September 16, 2016)",
        "The Ear Inn (197?)",
        "98 Greene St. Gallery (197?)",
      ],
    },
    {
      location: "Philadelphia",
      readings: [
        "Frank O'Hara's Last Lover at Sam's Morning Glory Diner, with Ryan Dobran and Quyen Nghiem (May 13, 2019)",
        "Kelly Writers House, University of Pennsylvania, with Ariel Resnikoff (January 17, 2017)",
      ],
    },
    {
      location: "Cambridge, Mass.",
      readings: [
        "MIT Press Bookstore, with Donald Wellman (May 4, 2019)",
        {
          text: "Woodberry Poetry Room, Harvard University Library (November 6, 2009)",
          link: "https://mps.lib.harvard.edu/sds/audio/457621023",
        },
      ],
    },
    {
      location: "Great Barrington, Mass.",
      readings: [
        "Geoff Young Gallery, with",
        "Familiar Trees, with Cynthia Zarin (September 28, 2024)",
      ],
    },
    {
      location: "Washington, D.C.",
      readings: [
        "Bridge Street Books (January 16, 2017); with Jean Day and Tina Darragh, (May 12, 2019); ComputerLand Poets Reading, with Ron Silliman, Bill Luoma and Kit Robinson (August, 1990)",
      ],
    },
    {
      location: "Milwaukee",
      readings: [
        "Woodland Pattern (January 25, 2017); with Karl Gartung (October 2, 2019)",
      ],
    },
    {
      location: "Providence",
      readings: ["Symposium Books, with Claire Donato (November 5, 2009)"],
    },
  ];

  return (
    <section className="about__section about__section--centered">
      <h2>Selected Readings</h2>
      <img
        src={alanReadingImage}
        alt="Alan Bernheimer reading"
        className="about__reading-image"
      />
      <div className="about__readings-container">
        {readingsData.map((cityData) => (
          <div key={cityData.location} className="about__readings-city">
            <button
              className="about__readings-city-header"
              onClick={() => toggleSection(cityData.location)}
              aria-expanded={expandedSections[cityData.location]}
            >
              <span className="about__readings-city-name">
                {cityData.location}
              </span>
              <span className="about__readings-city-count">
                {cityData.readings.length}{" "}
                {cityData.readings.length === 1 ? "reading" : "readings"}
              </span>
              <span
                className={`about__readings-toggle ${
                  expandedSections[cityData.location] ? "expanded" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {expandedSections[cityData.location] && (
              <ul className="about__readings-list">
                {cityData.readings.map((reading, index) => (
                  <li key={index} className="about__readings-item">
                    {typeof reading === "string" ? (
                      reading
                    ) : (
                      <a
                        href={reading.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about__readings-link"
                      >
                        {reading.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SelectedReadings;
