import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/magazine.module.css";
import foot from "./css/fotter.module.css";
import icons from "../assets/images/menuic.png";
import icons1 from "../assets/images/logoic.png";
import icons2 from "../assets/images/busketmag.png";
import icons3 from "../assets/images/settings.png";
import icons4 from "../assets/images/profileic.png";
import icons5 from "../assets/images/goods.png";
import promoStyles from "./css/promotions.module.css";
import promo1 from "../assets/images/promo1.jpg";
function Promo() {
  const [isOpen, setIsOpen] = useState(false);

  const promotionsData = [
    {
      id: 1,
      title: "20% Off All Products",
      description:
        "Enjoy a 20% discount on your favorite items. Limited time only!",
      imageUrl: promo1,
    },
    {
      id: 2,
      title: "Buy One Get One Free",
      description: "Purchase one item and get another for free!",
      imageUrl: promo1,
    },
    {
      id: 3,
      title: "Free Shipping on Orders Over $50",
      description: "Get free shipping when you spend $50 or more.",
      imageUrl: promo1,
    },
    {
      id: 4,
      title: "Free Heaphones for purchases over 1000$",
      description: "Get free shipping when you spend $50 or more.",
      imageUrl: promo1,
    },
  ];

  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleBasketClick = () => alert("Basket clicked");
  const handleSettingsClick = () => alert("Settings clicked");
  const handleProfileClick = () =>
    (window.location.href = "/main_page/profile");
  const handleGoodsClick = () => alert("Opening goods...");

  return (
    <div>
      <header className={styles.headerm}>
        <button onClick={handleMenuClick} className={styles.buttonheader}>
          <img src={icons} alt="Menu" className={styles.buttonIcon} />
        </button>
        <img src={icons1} alt="Logo" className={styles.logo} />
        <Link
          to="/main_page/busket"
          onClick={handleBasketClick}
          className={styles.buttonheader1}
        >
          <img src={icons2} alt="Basket" className={styles.buttonIcon1} />
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
        <button onClick={handleGoodsClick} className={styles.buttonheader4}>
          <Link to="/main_page">
            <img src={icons5} alt="Goods" className={styles.buttonIcon4} />
          </Link>
        </button>
      </header>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={handleBasketClick}>
              <img src={icons2} alt="Basket" /> Basket
            </li>
            <li onClick={handleSettingsClick}>
              <img src={icons3} alt="Settings" /> Settings
            </li>
            <li onClick={handleProfileClick}>
              <img src={icons4} alt="Profile" /> Profile
            </li>
            <li onClick={handleGoodsClick}>
              <img src={icons5} alt="Goods" /> Goods
            </li>
          </ul>
        </div>
      )}

      <section className={promoStyles.promotionsSection}>
        <h2 className={promoStyles.title}>Current Promotions</h2>
        <div className={promoStyles.promotionsGrid}>
          {promotionsData.map((promotion) => (
            <div key={promotion.id} className={promoStyles.promotionCard}>
              <img
                src={promotion.imageUrl}
                alt={promotion.title}
                className={promoStyles.image}
              />
              <div className={promoStyles.promotionContent}>
                <h3 className={promoStyles.promotionTitle}>
                  {promotion.title}
                </h3>
                <p className={promoStyles.description}>
                  {promotion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={foot.fotter}>
        <div className={foot.container}>
          <div className={foot.link}>
            <Link to="/">About Us</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <p className={foot.text}>© 2024 All Rights Reserved.</p>
          <p className={foot.text1}>
            Thank you for your visit! We hope you enjoyed our service!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Promo;
