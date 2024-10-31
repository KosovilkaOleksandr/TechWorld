import React, { useState } from "react";
import styles from "../components/css/sl.module.css";
import image1 from "../assets/images/sl1.jpg";
import image2 from "../assets/images/sl2.jpg";
import image3 from "../assets/images/cables.jpg";
import image4 from "../assets/images/headphones.jpg";
import image5 from "../assets/images/smartphones.jpg";

const images = [image1, image2, image3, image4, image5];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={styles.slideImage}
      />
      <button onClick={handlePrev} className={styles.prevButton}>
        {"<"}
      </button>
      <button onClick={handleNext} className={styles.nextButton}>
        {">"}
      </button>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
