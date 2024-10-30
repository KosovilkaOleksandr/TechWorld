import React, { useState } from "react";
import sty from "./css/tovar.module.css";
import styles from "./css/magazine.module.css";
import icons from "../assets/images/menuic.png";
import icons1 from "../assets/images/logoic.png";
import icons2 from "../assets/images/busketmag.png";
import icons3 from "../assets/images/settings.png";
import icons4 from "../assets/images/profileic.png";
import icons5 from "../assets/images/goods.png";
import foot from "./css/fotter.module.css";
import { Link } from "react-router-dom";
import test from "../assets/images/sl2.jpg";
import diagonalic from "../assets/images/diagonal.png";
import color from "../assets/images/paint-bucket.png";
import producer from "../assets/images/city.png";
import memory from "../assets/images/memory.png";
import proc from "../assets/images/proc.png";
import product from "../assets/images/product.png";
import gpu from "../assets/images/gpu.png";

function Tovar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleBusketClick = () => alert("Busket button clicked");
  const handleSettingsClick = () => alert("Settings button clicked");
  const handleProfileClick = () =>
    (window.location.href = "/main_page/profile");
  const handleGoodsClick = () => alert("Goods are opening...");
  return (
    <div>
      <header className={styles.headerm}>
        <button onClick={handleMenuClick} className={styles.buttonheader}>
          <img src={icons} alt="Menu" className={styles.buttonIcon} />
        </button>
        <img src={icons1} alt="Logo" className={styles.logo} />
        <Link
          to="/"
          onClick={handleBusketClick}
          className={styles.buttonheader1}
        >
          <img src={icons2} alt="Busket" className={styles.buttonIcon1} />
        </Link>
        <Link
          to="/"
          onClick={handleSettingsClick}
          className={styles.buttonheader2}
        >
          <img src={icons3} alt="Settings" className={styles.buttonIcon2} />
        </Link>
        <Link
          to="/"
          onClick={handleProfileClick}
          className={styles.buttonheader3}
        >
          <img src={icons4} alt="Profile" className={styles.buttonIcon3} />
        </Link>
        <button onClick={handleGoodsClick} className={styles.buttonheader4}>
          <img src={icons5} alt="Goods" className={styles.buttonIcon4} />
        </button>
      </header>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={handleBusketClick}>
              <img src={icons2} alt="Basket Icon" /> Busket
            </li>
            <li onClick={handleSettingsClick}>
              <img src={icons3} alt="Settings Icon" /> Settings
            </li>
            <button
              onClick={handleProfileClick}
              className={styles.buttonheader3}
            ></button>
            <li onClick={handleProfileClick}>
              <img src={icons4} alt="Profile Icon" /> Profile
            </li>
            <li onClick={handleGoodsClick}>
              <img src={icons5} alt="Goods Icon" /> Goods
            </li>
          </ul>
        </div>
      )}

      <div className={sty.base}>
        <div className={sty.first}>
          <img src={test} alt="Product Icon" className={sty.productIcon} />
        </div>
        <div className={sty.second}>
          <div className={sty.char}>
            <div className={sty.charup}>
              <p>CHARACTERISTICS</p>
            </div>
            <ul>
              <li>
                <img src={product} alt="Name" className={sty.charIcon} />
                <span className={sty.charDescription}>Product Name:</span>
              </li>
              <li>
                <img src={producer} alt="Producer" className={sty.charIcon} />
                <span className={sty.charDescription}>Producer:</span>
              </li>
              <li>
                <img src={color} alt="Color" className={sty.charIcon} />
                <span className={sty.charDescription}>Color:</span>
              </li>
              <li>
                <img src={diagonalic} alt="Diagonal" className={sty.charIcon} />
                <span className={sty.charDescription}>Diagonal:</span>
              </li>
              <li>
                <img src={memory} alt="Memory" className={sty.charIcon} />
                <span className={sty.charDescription}>Memory: _/_</span>
              </li>
              <li>
                <img src={proc} alt="Processor" className={sty.charIcon} />
                <span className={sty.charDescription}>Processor:</span>
              </li>
              <li>
                <img src={gpu} alt="GPU" className={sty.charIcon} />
                <span className={sty.charDescription}>GPU:</span>
              </li>
            </ul>
            <button
              className={sty.addToBasketButton}
              onClick={() => alert("Item are added to Busket")}
            >
              ADD TO BUSKET
            </button>
          </div>
        </div>
      </div>

      <footer className={foot.fotter}>
        <div className={foot.container}>
          <div className={foot.link}>
            <Link to="/">About Us</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Confidential Policy</Link>
          </div>
          <p className={foot.text}>© 2024 All Rights Reserved.</p>
          <p className={foot.text1}>
            Thank you for your visit! We hope that you liked our service!
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Tovar;
