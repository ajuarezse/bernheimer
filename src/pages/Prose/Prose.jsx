import "./Prose.css";

function Prose() {
  return (
    <div className="prose-container">
      <h1 className="prose-title">Prose</h1>

      <div className="prose-intro">
        <p className="prose-lead">
          Essays, stories, and reflections on the art of living— where narrative
          meets memory and experience becomes literature.
        </p>
      </div>

      <section className="prose-section">
        <h2 className="section-title">Essays & Memoir</h2>

        <div className="prose-grid">
          <article className="prose-card">
            <h3 className="prose-title-item">The Language of Leaving</h3>
            <p className="prose-excerpt">
              There are words in my mother's language that have no translation,
              concepts that exist only in the space between what was left behind
              and what was found. This is a meditation on displacement, memory,
              and the stories we tell ourselves about home...
            </p>
            <div className="prose-meta">
              <span className="prose-type">Personal Essay</span>
              <span className="prose-year">2023</span>
            </div>
          </article>

          <article className="prose-card">
            <h3 className="prose-title-item">On Translation as Time Travel</h3>
            <p className="prose-excerpt">
              Every act of translation is an act of resurrection—bringing words
              back from the dead, across centuries and cultures. In this essay,
              I explore how translating medieval texts became a way of
              understanding my own relationship with time and meaning...
            </p>
            <div className="prose-meta">
              <span className="prose-type">Literary Essay</span>
              <span className="prose-year">2022</span>
            </div>
          </article>

          <article className="prose-card">
            <h3 className="prose-title-item">The Collector of Silences</h3>
            <p className="prose-excerpt">
              My grandfather kept a notebook of things he never said. After his
              death, I inherited this archive of silence—pages filled with
              thoughts that never became words, conversations that existed only
              in potential. This is the story of learning to read the language
              of what was never spoken...
            </p>
            <div className="prose-meta">
              <span className="prose-type">Memoir</span>
              <span className="prose-year">2023</span>
            </div>
          </article>
        </div>
      </section>

      <section className="prose-section">
        <h2 className="section-title">Short Fiction</h2>

        <div className="prose-grid">
          <article className="prose-card">
            <h3 className="prose-title-item">The Archivist's Daughter</h3>
            <p className="prose-excerpt">
              She discovered the letters by accident, filed incorrectly between
              reports from 1943. Love letters in a language she didn't
              recognize, but somehow understood. As the city's newest archivist,
              she faced a choice: preserve the secret or reveal the truth that
              could rewrite her family's history...
            </p>
            <div className="prose-meta">
              <span className="prose-type">Short Story</span>
              <span className="prose-year">2022</span>
            </div>
          </article>

          <article className="prose-card">
            <h3 className="prose-title-item">
              Night Shift at the Translation Bureau
            </h3>
            <p className="prose-excerpt">
              In a 24-hour translation service, the night shift gets the strange
              cases—suicide notes in extinct languages, love letters from
              parallel dimensions, diplomatic cables from countries that don't
              exist. Marcus had seen it all, until the night someone submitted
              their dreams for translation...
            </p>
            <div className="prose-meta">
              <span className="prose-type">Short Story</span>
              <span className="prose-year">2023</span>
            </div>
          </article>
        </div>
      </section>

      <section className="prose-section">
        <h2 className="section-title">Published Prose</h2>

        <div className="publications-grid">
          <div className="publication-card">
            <h3 className="publication-title">Granta Magazine</h3>
            <p className="publication-details">
              "Inventory of Lost Things"
              <span className="publication-issue">
                Issue 160: The Map is Not the Territory
              </span>
            </p>
            <a
              href="#"
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Online
            </a>
          </div>

          <div className="publication-card">
            <h3 className="publication-title">The Sun Magazine</h3>
            <p className="publication-details">
              "What We Save, What We Burn"
              <span className="publication-issue">March 2023</span>
            </p>
            <a
              href="#"
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Issue
            </a>
          </div>

          <div className="publication-card">
            <h3 className="publication-title">Literary Hub</h3>
            <p className="publication-details">
              "The Translator's Dilemma: When Meaning Gets Lost"
              <span className="publication-issue">June 2023</span>
            </p>
            <a
              href="#"
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Essay
            </a>
          </div>

          <div className="publication-card">
            <h3 className="publication-title">The Atlantic</h3>
            <p className="publication-details">
              "Growing Up Between Languages"
              <span className="publication-issue">September 2022</span>
            </p>
            <a
              href="#"
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prose;
