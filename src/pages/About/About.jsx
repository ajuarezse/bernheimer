import { useState } from "react";
import "./About.css";
import heroImage from "../../assets/heroImage.webp";
import poetsComposite from "../../assets/poets composite.webp";
import reflectograph from "../../assets/reflectograph.webp";
import pa12Image from "../../assets/pa12.webp";
import alanReadingImage from "../../assets/alanReading.webp";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import FishEyeMagnifier from "../../components/FishEyeMagnifier/FishEyeMagnifier";

function About() {
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
        "Tom Raworth Memorial Reading, University of California, Berkeley (April 6, 2018)",
        "Ted Greenwald Memorial Reading, Moe's Books (October 5, 2016)",
        "Holloway Series, UC Berkeley, with Jane Gregory (November 12, 2009)",
        "Moe's Books w Robert Harris",
        "Julia Morgan Center, with David Bromige (June 16, 1980)",
        "KPFA 94.1 FM, 'In the American Tree: New Writing by Poets,' radio program hosted by Lyn Hejinian and Kit Robinson (November 10, 1978)",
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
        "DIA Chelsea, with Jean Day (May 14, 2019)",
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
        "Woodberry Poetry Room, Harvard University Library (November 6, 2009)",
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
    <ScrollFadeIn selector=".about__section, .about__bio-section">
      <div className="about__container">
        <div className="about__bio-section">
          <div className="about__bio-content">
            <div className="about__image-container">
              <img
                src={heroImage}
                alt="Alan Bernheimer"
                className="about__image"
              />
            </div>

            <div className="about__bio-text">
              <p>
                Alan Bernheimer is a poet, writer, and translator, living in
                Berkeley. He was born in 1948 in New York City, where he grew
                up, spending summers at a rustic science colony on the north
                shore of Long Island with his microbiologist parents. He
                graduated from Yale in 1970 with a degree in English literature
                and spent several years in NYC and on Cape Cod before settling
                in the San Francisco Bay Area.
              </p>
              <p>
                Bernheimer wrote for and performed in San Francisco Poets
                Theater and produced and hosted In the American Tree, a weekly
                radio program of new writing by poets. He is the author of five
                volumes of poetry as well as several translations from French.
                He was contributing editor at Nowhere magazine, where his
                "Retroscope" series featured literary travel writing from the
                past. He received a creative writing fellowship from the
                National Endowment for the Arts.
              </p>
            </div>
          </div>
        </div>

        <div className="about__content">
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

          <section className="about__section about__section--centered about__section--pages">
            <div className="about__pages-wrapper">
              <div className="about__pages-container">
                <div className="about__pages-header">
                  <img
                    src={pa12Image}
                    alt="San Francisco Poets Theater"
                    className="about__pages-header-image"
                  />
                  <div className="about__pages-overlay">
                    <h2 className="about__pages-title">
                      Alan Bernheimer Pages
                    </h2>
                    <div className="about__pages-links">
                      <a
                        href="https://writing.upenn.edu/pennsound/x/Bernheimer.php"
                        className="about__pages-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PennSound
                      </a>
                      <a
                        href="https://en.wikipedia.org/wiki/Alan_Bernheimer"
                        className="about__pages-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wikipedia
                      </a>
                      <a
                        href="https://writing.upenn.edu/epc/authors/bernheimer/"
                        className="about__pages-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Electronic Poetry Center
                      </a>
                      <a
                        href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                        className="about__pages-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SF Poets Theater
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about__section about__section--centered">
            <h2>Photography</h2>
            <div className="about__photography">
              <div className="about__photo-grid">
                <article className="about__photo-card about__photo-card--landscape">
                  <div className="about__photo-content">
                    <h3 className="about__photo-title">Poets Reading</h3>
                    <p className="about__photo-description">
                      1,000 portraits of poets reading, from 2008 to the present
                    </p>
                    <div className="about__photo-image-landscape">
                      <a
                        href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-block", cursor: "pointer" }}
                        className="about__photo-link-image"
                      >
                        <FishEyeMagnifier
                          src={poetsComposite}
                          alt="Composite of poets reading"
                          magnifierSize={160}
                          zoom={2}
                          className="about__photo-landscape"
                        />
                      </a>
                    </div>
                    <div className="about__photo-links">
                      <a
                        href="https://www.flickr.com/photos/alanbernheimer/albums/72157604126064313/"
                        className="about__photo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Collection
                      </a>
                    </div>
                  </div>
                </article>

                <article className="about__photo-card about__photo-card--landscape">
                  <div className="about__photo-content">
                    <h3 className="about__photo-title">Reflectographs</h3>
                    <p className="about__photo-description">
                      My father's cameraless photographs made by a point of
                      light reflected onto photosensitive paper
                    </p>
                    <div className="about__photo-image-landscape">
                      <img
                        src={reflectograph}
                        alt="Reflectograph artwork"
                        className="about__photo-landscape"
                      />
                    </div>
                    <div className="about__photo-links">
                      <a
                        href="https://reflectographs.com/reflectographs/"
                        className="about__photo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore Series
                      </a>
                    </div>
                  </div>
                </article>

                <article className="about__photo-card">
                  <div className="about__photo-image">
                    <div className="about__photo-placeholder">
                      <span>Instagram Preview</span>
                    </div>
                  </div>
                  <div className="about__photo-content">
                    <h3 className="about__photo-title">Instagram Gallery</h3>
                    <p className="about__photo-description">
                      The quick brown fox jumps over the lazy dog. The quick
                      brown fox jumps over the lazy dog. The quick brown fox
                      jumps over the lazy dog.
                    </p>
                    <div className="about__photo-links">
                      <a
                        href="#"
                        className="about__photo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow on Instagram
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="about__section about__section--contact">
            <div className="about__contact-simple">
              <h2>Contact</h2>
              <p>For inquiries, please fill out this form:</p>
              <form className="about__form-compact">
                <div className="about__form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="about__form-input-compact"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="about__form-input-compact"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  className="about__form-textarea-compact"
                  required
                ></textarea>
                <button type="submit" className="about__form-submit-compact">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </ScrollFadeIn>
  );
}

export default About;
