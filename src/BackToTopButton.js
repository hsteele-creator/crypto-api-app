import React from "react";
import "./BackToTopButton.css";
import { useEffect, useState } from "react";
import upArrow from "./up-arrow.png"

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button className="back-to-top-btn" onClick={() => scrollUp()}>
          <img className="up-arrow" src={upArrow} /> 
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
