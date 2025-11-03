import { useEffect, useLayoutEffect } from "react";
import "./ScrollFadeIn.css";

function ScrollFadeIn({
  children,
  selector = ".fade-in-section",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}) {
  // Use useLayoutEffect to run synchronously before browser paint
  useLayoutEffect(() => {
    const sections = document.querySelectorAll(selector);

    sections.forEach((section) => {
      // Check if element is substantially in viewport BEFORE applying any classes
      const rect = section.getBoundingClientRect();
      const elementHeight = rect.height;
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibilityRatio = visibleHeight / elementHeight;

      // Add both classes at once if already visible to prevent flash
      if (visibilityRatio >= 0.8 && rect.top >= 0) {
        section.classList.add("fade-in", "fade-in-visible");
      } else {
        section.classList.add("fade-in");
      }
    });
  }, [selector]);

  useEffect(() => {
    const observerOptions = {
      threshold: threshold,
      rootMargin: rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    // Observe all sections matching the selector
    const sections = document.querySelectorAll(selector);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [selector, threshold, rootMargin]);

  return <>{children}</>;
}

export default ScrollFadeIn;
