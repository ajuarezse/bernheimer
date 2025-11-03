import PropTypes from "prop-types";
import "./PublicationCard.css";

function PublicationCard({
  coverImage,
  title,
  publisher,
  year,
  description,
  quote,
  links = [],
  className = "",
}) {
  return (
    <article className={`publication-card ${className}`}>
      <div className="publication-card__image">
        <img
          src={coverImage}
          alt={`${title} book cover`}
          className="publication-card__cover"
        />
      </div>

      <div className="publication-card__content">
        <div className="publication-card__header">
          <h3 className="publication-card__title">{title}</h3>
        </div>

        {(publisher || year) && (
          <div className="publication-card__details">
            <p className="publication-card__publisher-info">
              {publisher}
              {year && `, ${year}`}
            </p>
          </div>
        )}

        {description && (
          <p className="publication-card__description">{description}</p>
        )}

        {quote && <p className="publication-card__quote">{quote}</p>}

        {links.length > 0 && (
          <div className="publication-card__links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="publication-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

PublicationCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  quote: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default PublicationCard;
