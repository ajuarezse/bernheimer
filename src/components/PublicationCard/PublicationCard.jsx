import PropTypes from "prop-types";
import "./PublicationCard.css";
import Button from "../Button/Button";

function PublicationCard({
  coverImage,
  title,
  publisher,
  year,
  description,
  quote,
  links = [],
  customButton,
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
          <div className="publication-card__description">{description}</div>
        )}

        {quote && <div className="publication-card__quote">{quote}</div>}

        {customButton && (
          <div className="publication-card__links">{customButton}</div>
        )}

        {links.length > 0 && (
          <div className="publication-card__links">
            {links.map((link, index) => (
              <Button key={index} href={link.url} external>
                {link.text}
              </Button>
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
  description: PropTypes.node,
  quote: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  customButton: PropTypes.node,
  className: PropTypes.string,
};

export default PublicationCard;
