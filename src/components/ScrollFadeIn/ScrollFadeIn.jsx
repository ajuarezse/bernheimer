import { useEffect } from "react";
import "./ScrollFadeIn.css";

function ScrollFadeIn({
  children,
  selector = ".fade-in-section",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}) {
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
      section.classList.add("fade-in");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [selector, threshold, rootMargin]);

  return <>{children}</>;
}

export default ScrollFadeIn;
