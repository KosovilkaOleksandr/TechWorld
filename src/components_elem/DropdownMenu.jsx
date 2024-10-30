import React, { useState } from "react";
import styles from "./DropdownMenu.module.css";
import icons from "./path/to/icon.png";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={handleMenuClick} className={styles.buttonheader}>
        <img src={icons} alt="Menu" className={styles.buttonIcon} />
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
