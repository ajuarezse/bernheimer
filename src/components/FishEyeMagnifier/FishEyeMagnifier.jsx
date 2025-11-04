import React, { useRef, useState } from "react";
import "./FishEyeMagnifier.css";

function FishEyeMagnifier({
  src,
  alt,
  magnifierSize = 160,
  zoom = 2,
  className = "",
}) {
  const imgRef = useRef(null);
  const magnifierRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const magnifier = magnifierRef.current;
    if (!img || !magnifier) return;

    const rect = img.getBoundingClientRect();

    // Mouse position relative to image
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move magnifier lens
    magnifier.style.left = `${x - magnifierSize / 2}px`;
    magnifier.style.top = `${y - magnifierSize / 2}px`;

    // Calculate background size and position for zoom effect
    const imgWidth = img.width;
    const imgHeight = img.height;
    magnifier.style.backgroundSize = `${imgWidth * zoom}px ${
      imgHeight * zoom
    }px`;

    // Calculate background position (allow negative values for edges)
    const bgX = x * zoom - magnifierSize / 2;
    const bgY = y * zoom - magnifierSize / 2;
    magnifier.style.backgroundPosition = `${-bgX}px ${-bgY}px`;
  };

  const handleMouseEnter = () => {
    magnifierRef.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    magnifierRef.current.style.display = "none";
  };

  return (
    <div
      className={`fisheye-magnifier-container ${className}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="fisheye-magnifier-image"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onLoad={() => setImgLoaded(true)}
        draggable={false}
        style={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 8,
          boxShadow: "6px 8px 16px rgba(0,0,0,0.3)",
          border: "1px solid #eee",
        }}
      />
      <div
        ref={magnifierRef}
        className="fisheye-magnifier-lens"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
          width: magnifierSize,
          height: magnifierSize,
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          border: "2px solid #fff",
          backgroundColor: "#fff",
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default FishEyeMagnifier;
