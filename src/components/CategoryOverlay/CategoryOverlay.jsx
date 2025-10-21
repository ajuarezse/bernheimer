import "./CategoryOverlay.css";

function CategoryOverlay({
  pageLabel,
  workLabel = "Featured work:",
  workTitle,
  workAuthor,
  workDetails,
  workYear,
}) {
  return (
    <div className="category-overlay">
      <div className="category-overlay__page-link">
        <p className="category-overlay__page-label">{pageLabel}</p>
      </div>
      <div className="category-overlay__work-info">
        <p className="category-overlay__work-label">{workLabel}</p>
        <h3 className="category-overlay__work-title">{workTitle}</h3>
        <p className="category-overlay__work-author">{workAuthor}</p>
        <p className="category-overlay__work-details">{workDetails}</p>
        <p className="category-overlay__work-year">{workYear}</p>
      </div>
    </div>
  );
}

export default CategoryOverlay;
