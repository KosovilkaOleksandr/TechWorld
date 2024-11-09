import React, { useState } from "react";
import styles from "./css/magazine.module.css";
import salesStyles from "./css/sales.module.css";
import icons from "../assets/images/menuic.png";
import icons1 from "../assets/images/logoic.png";
import icons2 from "../assets/images/busketmag.png";
import icons3 from "../assets/images/settings.png";
import icons4 from "../assets/images/profileic.png";
import icons5 from "../assets/images/goods.png";
import { Link } from "react-router-dom";
import slide from "./css/slidermag.module.css";
import notebookImg from "../assets/images/notebook.jpg";
import cpuint from "../assets/images/cpu.jpg";
import cable from "../assets/images/gpu.png";
import headphone from "../assets/images/headphones.jpg";
import smartphone from "../assets/images/smartphones.jpg";
import Label from "../components_elem/Label2";
import Inp from "../components_elem/Forminp";
import Button1 from "../components_elem/Button1";
import foot from "./css/fotter.module.css";
import categoriesStyles from "./css/categories.module.css";
import promoImage1 from "../assets/images/promo1.jpg";
import promoImage2 from "../assets/images/promo2.jpg";
import act from "../assets/images/act.jpg";
import Computers from "../components_elem/computers";
import Processors from "../components_elem/processors";
import HeadPhones from "../components_elem/headphones";
import SmartPhone from "../components_elem/smartphones";
import GPU from "../components_elem/GPU";

function Magazine() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("computers");

  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleBusketClick = () => alert("Busket button clicked");
  const handleSettingsClick = () => alert("Settings button clicked");
  const handleProfileClick = () =>
    (window.location.href = "/main_page/profile");
  const handleGoodsClick = () => alert("Goods are opening...");
  const handleButtonClick = () => (window.location.href = "/");

  const renderSelectedComponent = () => {
    switch (selectedType) {
      case "computers":
        return <Computers />;
      case "processors":
        return <Processors />;
      case "headphones":
        return <HeadPhones />;
      case "smartphones":
        return <SmartPhone />;
      case "GPU":
        return <GPU />;
      default:
        return null;
    }
  };

  return (
    <div className={slide.container}>
      <header className={styles.headerm}>
        <button onClick={handleMenuClick} className={styles.buttonheader}>
          <img src={icons} alt="Menu" className={styles.buttonIcon} />
        </button>
        <img src={icons1} alt="Logo" className={styles.logo} />
        <Link
          to="/main_page/busket"
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
          to="/main_page/profile"
          onClick={handleProfileClick}
          className={styles.buttonheader3}
        >
          <img src={icons4} alt="Profile" className={styles.buttonIcon3} />
        </Link>
        <Link
          to="/main_page/"
          onClick={handleGoodsClick}
          className={styles.buttonheader4}
        >
          <img src={icons5} alt="Goods" className={styles.buttonIcon4} />
        </Link>
      </header>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={handleBusketClick}>
              <Link to="/main_page/busket">
                <img src={icons2} alt="Basket Icon" /> Busket
              </Link>
            </li>
            <li onClick={handleSettingsClick}>
              <img src={icons3} alt="Settings Icon" /> Settings
            </li>
            <button
              onClick={handleProfileClick}
              className={styles.buttonheader3}
            ></button>
            <li onClick={handleProfileClick}>
              <Link to="/main_page/profile">
                <img src={icons4} alt="Profile Icon" /> Profile
              </Link>
            </li>
            <li onClick={handleGoodsClick}>
              <Link to="/main_page">
                <img src={icons5} alt="Goods Icon" /> Goods
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className={slide.section}>
        <div className={slide.leftPane}>
          <div className={slide.sectionAut}>
            <div className={slide.AutorisationContainer}>
              <Label text="PRODUCTION SECTION"></Label>
            </div>
          </div>

          <div className={salesStyles.salesContainer}>
            <div>{renderSelectedComponent()}</div>
          </div>
        </div>
        <div className={slide.rightPane}>
          <div className={categoriesStyles.categoriesContainer}>
            <div className={categoriesStyles.categoriesTitle}>
              Special Offers and Discounts!
            </div>

            <div className={categoriesStyles.bannersContainer}>
              <img
                src={act}
                alt="Promo Banner 1"
                className={categoriesStyles.bannerImage}
              />
            </div>

            <div className={categoriesStyles.promoOffersContainer}>
              <h3 className={categoriesStyles.promoOffersTitle}>Discounts</h3>
              <div className={categoriesStyles.promoOffersGrid}>
                <div className={categoriesStyles.promoOffer}>
                  <img
                    src={promoImage1}
                    alt="Special Offer 1"
                    className={categoriesStyles.promoOfferImage}
                  />
                  <div className={categoriesStyles.promoOfferDetails}>
                    <h4>Special Offer 1</h4>
                    <p>
                      Get 20% discount on all products! Limited offer until the
                      end of the month.
                    </p>
                    <p className={categoriesStyles.offerExpiration}>
                      Discount end in 5 days!
                    </p>
                    <button className={categoriesStyles.promoButton}>
                      <Link>See More</Link>
                    </button>
                  </div>
                </div>
                <div className={categoriesStyles.promoOffer}>
                  <img
                    src={promoImage2}
                    alt="Special Offer 2"
                    className={categoriesStyles.promoOfferImage}
                  />
                  <div className={categoriesStyles.promoOfferDetails}>
                    <h4>Special Offer 2</h4>
                    <p>Buy 2 and get 1 free! For all product categories.</p>
                    <p className={categoriesStyles.offerExpiration}>
                      Hurry up, offer is limited!
                    </p>
                    <button className={categoriesStyles.promoButton}>
                      <Link to="/main_page/promo">See More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={categoriesStyles.categoriesGrid}>
              <div
                className={categoriesStyles.categoryItem}
                onClick={() => setSelectedType("computers")}
              >
                <img
                  src={notebookImg}
                  alt="Notebooks"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Discounted Laptops</h1>
              </div>
              <div
                className={categoriesStyles.categoryItem}
                onClick={() => setSelectedType("processors")}
              >
                <img
                  src={cpuint}
                  alt="CPU"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Processors</h1>
              </div>
              <div
                className={categoriesStyles.categoryItem}
                onClick={() => setSelectedType("GPU")}
              >
                <img
                  src={cable}
                  alt="Cables"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}> GPU on Sales</h1>
              </div>
              <div
                className={categoriesStyles.categoryItem}
                onClick={() => setSelectedType("headphones")}
              >
                <img
                  src={headphone}
                  alt="Headphones"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Headphones on sale</h1>
              </div>
              <div
                className={categoriesStyles.categoryItem}
                onClick={() => setSelectedType("smartphones")}
              >
                <img
                  src={smartphone}
                  alt="Smartphones"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Smartphones</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={foot.fotter}>
        <div className={foot.container}>
          <div className={foot.link}>
            <Link to="/">About Us</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Confidention Policy</Link>
          </div>
          <p className={foot.text}>© 2024 All Rights Reserved.</p>
          <p className={foot.text1}>
            Thank you for your visit! We hope, that you liked our service.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Magazine;
