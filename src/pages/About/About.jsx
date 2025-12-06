import "./About.css";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn";
import SelectedReadings from "../../components/SelectedReadings/SelectedReadings";
import Collage from "../../components/Collage/Collage";
import AlanBernheimerPages from "../../components/AlanBernheimerPages/AlanBernheimerPages";
import Photography from "../../components/Photography/Photography";
import { useEmailForm } from "../../hooks/useEmailForm";

function About() {
  const {
    formData,
    formStatus,
    canSubmit,
    isFormValid,
    handleChange,
    handleSubmit,
  } = useEmailForm({
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    storageKey: "lastContactSubmit",
  });
  return (
    <ScrollFadeIn selector=".about__section, .about__bio-section">
      <div className="about__container">
        <div className="about__layout">
          {/* Left side - Stacked Collage */}
          <Collage />

          {/* Right side - Content */}
          <div className="about__content-column">
            <div className="about__bio-text">
              <p>
                <strong>Alan Bernheimer</strong> is a poet, writer, and
                translator, living in Berkeley. He was born in 1948 in New York
                City, where he grew up, spending summers at a rustic science
                colony on the north shore of Long Island with his microbiologist
                parents. He graduated from Yale in 1970 with a degree in English
                literature and spent several years in NYC and on Cape Cod before
                settling in the San Francisco Bay Area.
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

            <SelectedReadings />
          </div>
          {/* End of about__content-column */}
        </div>
        {/* End of about__layout */}

        {/* Pages section and below - outside the collage layout */}
        <AlanBernheimerPages />

        <Photography />

        <section className="about__section about__section--contact">
          <div className="about__contact-simple">
            <div className="about__contact-header">
              <h2>Contact</h2>
            </div>
            <div className="about__contact-form-wrapper">
              <p>For inquiries, please fill out this form:</p>
              {formStatus.success && (
                <div className="about__form-message about__form-message--success">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {formStatus.error && (
                <div className="about__form-message about__form-message--error">
                  {formStatus.error}
                </div>
              )}
              <form className="about__form-compact" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="about__form-row">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="about__form-input-compact"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    disabled={formStatus.loading}
                  />
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    className="about__form-input-compact"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    disabled={formStatus.loading}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  className="about__form-textarea-compact"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus.loading}
                ></textarea>
                <button
                  type="submit"
                  className="about__form-submit-compact"
                  disabled={formStatus.loading || !canSubmit || !isFormValid}
                >
                  {formStatus.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </ScrollFadeIn>
  );
}

export default About;
