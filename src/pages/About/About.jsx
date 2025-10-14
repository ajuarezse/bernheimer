import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Adam Berneruner</h1>

      <div className="about-hero">
        <div className="about-image-container">
          <div className="about-image-placeholder">
            <span>Author Photo</span>
          </div>
        </div>

        <div className="about-intro">
          <p className="about-lead">
            A distinguished voice in contemporary literature, exploring the
            intersections of memory, language, and human experience through
            poetry, prose, and translation.
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Biography</h2>
          <p>
            Charles Bernheimer is an acclaimed author whose work spans multiple
            genres and languages. His writing explores the delicate boundaries
            between personal narrative and universal truth, weaving together
            themes of displacement, identity, and the transformative power of
            literature.
          </p>
          <p>
            Born into a multilingual household, Bernheimer developed an early
            fascination with the nuances of language and translation. This
            linguistic sensitivity permeates his work, whether in his original
            poetry and prose or his celebrated translations of contemporary
            European literature.
          </p>
        </section>

        <section className="about-section">
          <h2>Literary Focus</h2>
          <p>
            Bernheimer's poetry is characterized by its precise yet lyrical
            language, often drawing from personal experience to illuminate
            broader human conditions. His prose work demonstrates a keen eye for
            psychological depth and narrative innovation, while his translations
            have brought important voices in world literature to
            English-speaking audiences.
          </p>
          <p>
            His writing has been featured in numerous literary journals and
            publications, earning recognition for its thoughtful engagement with
            complex themes and its commitment to artistic excellence.
          </p>
        </section>

        <section className="about-section">
          <h2>Recognition</h2>
          <p>
            Bernheimer's contributions to literature have been recognized
            through various awards and fellowships. His work continues to
            resonate with readers and critics alike, establishing him as a
            significant voice in contemporary literary culture.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
