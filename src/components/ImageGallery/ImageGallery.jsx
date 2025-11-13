import { useState } from "react";
import "./ImageGallery.css";

function ImageGallery({ images, isOpen, onClose, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
          <span className="gallery__counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="gallery__image-container">
          <img
            src={images[currentIndex]}
            alt={`${title} - Page ${currentIndex + 1}`}
            className="gallery__image"
          />
        </div>

        {images.length > 1 && (
          <div className="gallery__controls">
            <button
              className="gallery__button gallery__button--prev"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              ‹ Previous
            </button>
            <button
              className="gallery__button gallery__button--next"
              onClick={goToNext}
              disabled={currentIndex === images.length - 1}
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
