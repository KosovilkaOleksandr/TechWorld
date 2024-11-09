import React, { useState } from "react";
import "./css/Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={prevSlide} className="slider-button">
        Previous
      </button>
      <button onClick={nextSlide} className="slider-button">
        Next
      </button>
    </div>
  );
};

export default Slider;
