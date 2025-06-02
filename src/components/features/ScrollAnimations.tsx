"use client";
import { useEffect, useState } from "react";

export default function ScrollAnimations() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsExperienceVisible(true);
            document.body.style.backgroundColor = "#0a0a0a";
            document.body.style.transition = "background-color 0.5s ease-in-out";
          } else {
            setIsExperienceVisible(false);
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
          }
        });
      },
      { threshold: 0.3 } 
    );

    const experienceSection = document.getElementById("experience-section");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => {
      if (experienceSection) {
        observer.unobserve(experienceSection);
      }
    };
  }, []);

  return null; 
} 