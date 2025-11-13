import { useEffect } from "react";
import "./ImageGallery.css";

function ImageGallery({ images, isOpen, onClose, title }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("gallery__backdrop")) {
      onClose();
    }
  };

  return (
    <div className="gallery__backdrop" onClick={handleBackdropClick}>
      <div className="gallery__container">
        <button className="gallery__close" onClick={onClose}>
          ×
        </button>

        <div className="gallery__header">
          <h3 className="gallery__title">{title}</h3>
          <span className="gallery__counter">{images.length} pages</span>
        </div>

        <div className="gallery__images-scroll">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - Page ${index + 1}`}
              className="gallery__image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
