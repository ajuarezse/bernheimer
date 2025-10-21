import "./PageHeader.css";

function PageHeader({ title, description, className = "" }) {
  return (
    <div className={`page-header ${className}`}>
      <h1 className="page-header__title">{title}</h1>
      <div className="page-header__intro">
        <p className="page-header__lead">{description}</p>
      </div>
    </div>
  );
}

export default PageHeader;
