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
import cable from "../assets/images/cables.jpg";
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

function Magazine() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState("name");

  const salesItems = [
    { id: 1, name: "Notebook", image: notebookImg, price: 999 },
    { id: 2, name: "Processor", image: cpuint, price: 299 },
    { id: 3, name: "Cables", image: cable, price: 19.99 },
    { id: 4, name: "Headphones", image: headphone, price: 49.99 },
    { id: 5, name: "Smartphone", image: smartphone, price: 699 },
  ];

  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleBusketClick = () => alert("Busket button clicked");
  const handleSettingsClick = () => alert("Settings button clicked");
  const handleProfileClick = () =>
    (window.location.href = "/main_page/profile");
  const handleGoodsClick = () => alert("Goods are opening...");
  const handleButtonClick = () => (window.location.href = "/");

  const sortedSalesItems = [...salesItems].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className={slide.container}>
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

      <div className={slide.section}>
        <div className={slide.leftPane}>
          <div className={slide.sectionAut}>
            <div className={slide.AutorisationContainer}>
              <Label text={"Fast Autorisation"} />
              <Inp placeholder="Email" type="text" />
              <Inp placeholder="Password" type="password" />
              <Button1 onClick={handleButtonClick}>Log in</Button1>
            </div>
          </div>

          <div className={salesStyles.salesContainer}>
            <div className={salesStyles.salesTitle}>SALES</div>
            <div className={salesStyles.sortButtonsContainer}>
              <button
                className={salesStyles.sortButton}
                onClick={() => setSortType("name")}
              >
                Sort by Name
              </button>
              <button
                className={salesStyles.sortButton}
                onClick={() => setSortType("price")}
              >
                Sort by Price
              </button>
            </div>
            <div className={salesStyles.salesGrid}>
              {sortedSalesItems.map((item) => (
                <div key={item.id} className={salesStyles.salesItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={salesStyles.salesItemImage}
                  />
                  <div className={salesStyles.salesItemDetails}>
                    <h3>{item.name}</h3>
                    <p style={{ color: "#000", fontWeight: "bold" }}>
                      ${item.price.toFixed(2)}
                    </p>
                    <button
                      className={salesStyles.salesButton}
                      onClick={() => alert(`${item.name} added to busket!`)}
                    >
                      Add to Busket
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
                      See More
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
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={categoriesStyles.categoriesGrid}>
              <div className={categoriesStyles.categoryItem}>
                <img
                  src={notebookImg}
                  alt="Notebooks"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Discounted Laptops</h1>
              </div>
              <div className={categoriesStyles.categoryItem}>
                <img
                  src={cpuint}
                  alt="CPU"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Processors</h1>
              </div>
              <div className={categoriesStyles.categoryItem}>
                <img
                  src={cable}
                  alt="Cables"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Cables on Sales</h1>
              </div>
              <div className={categoriesStyles.categoryItem}>
                <img
                  src={headphone}
                  alt="Headphones"
                  className={categoriesStyles.categoryImage}
                />
                <h1 className={categoriesStyles.pod}>Headphones on sale</h1>
              </div>
              <div className={categoriesStyles.categoryItem}>
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
