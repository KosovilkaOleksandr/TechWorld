import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import sty from "./css/tovar.module.css";
import styles from "./css/magazine.module.css";
import icons from "../assets/images/menuic.png";
import icons1 from "../assets/images/logoic.png";
import icons2 from "../assets/images/busketmag.png";
import icons3 from "../assets/images/settings.png";
import icons4 from "../assets/images/profileic.png";
import icons5 from "../assets/images/goods.png";
import foot from "./css/fotter.module.css";
import diagonalic from "../assets/images/diagonal.png";
import color from "../assets/images/paint-bucket.png";
import producer from "../assets/images/city.png";
import memory from "../assets/images/memory.png";
import proc from "../assets/images/proc.png";
import productIcon from "../assets/images/product.png";
import gpuIcon from "../assets/images/gpu.png";
import { useAuth } from "../AuthUser";

function Tovar3() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const docRef = doc(db, "smartphone", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProductData(docSnap.data());
        } else {
          console.log("Product not found!");
        }
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };
    fetchProductData();
  }, [id]);

  const addToCart = async () => {
    if (!user) {
      alert("You don`t enter account");
      return;
    }

    if (!productData) {
      console.log("Item is not loaded");
      return;
    }

    try {
      const cartRef = doc(db, "carts", user.uid);
      const cartSnapshot = await getDoc(cartRef);

      let cartData = cartSnapshot.exists() ? cartSnapshot.data().items : [];

      const productWithId = { ...productData, id };

      const isProductInCart = cartData.some(
        (item) => item.id === productWithId.id
      );

      if (isProductInCart) {
        alert("This product is already in your basket!");
        return;
      }

      cartData.push(productWithId);

      await setDoc(cartRef, { items: cartData });
      alert("Product added to basket!");
    } catch (error) {
      console.error("Error: product wasn't added to basket: ", error);
    }
  };

  const handleMenuClick = () => setIsOpen(!isOpen);
  const handleBasketClick = () => alert("Basket clicked");
  const handleSettingsClick = () => alert("Settings clicked");
  const handleProfileClick = () =>
    (window.location.href = "/main_page/profile");
  const handleGoodsClick = () => alert("Opening goods...");

  if (!productData) return <p>Loading product data...</p>;

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
              <Link to="main_page/busket">
                <img src={icons2} alt="Basket" /> Basket
              </Link>
            </li>
            <li onClick={handleSettingsClick}>
              <img src={icons3} alt="Settings" /> Settings
            </li>
            <li onClick={handleProfileClick}>
              <Link to="main_page/profile">
                <img src={icons4} alt="Profile" /> Profile
              </Link>
            </li>
            <li onClick={handleGoodsClick}>
              <Link to="main_page">
                <img src={icons5} alt="Goods" /> Goods
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className={sty.base}>
        <div className={sty.first}>
          <img
            src={productData.img}
            alt="Product"
            className={sty.productIcon}
          />
        </div>
        <div className={sty.second}>
          <div className={sty.char}>
            <div className={sty.charup}>
              <p>CHARACTERISTICS</p>
            </div>
            <ul>
              <li>
                <img src={productIcon} alt="Name" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Product Name: {productData.name}
                </span>
              </li>
              <li>
                <img src={producer} alt="Vendor" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Diagonal: {productData.diagonal}
                </span>
              </li>
              <li>
                <img src={color} alt="Color" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Camera: {productData.camera}
                </span>
              </li>
              <li>
                <img
                  src={diagonalic}
                  alt="Energy Efficiency"
                  className={sty.charIcon}
                />
                <span className={sty.charDescription}>
                  Memory: {productData.memory}
                </span>
              </li>
              <li>
                <img src={memory} alt="Memory" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Processor&GPU: {productData.procgpu}
                </span>
              </li>
              <li>
                <img src={proc} alt="Processor" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Vendor: {productData.vendor}
                </span>
              </li>
              <li>
                <img src={gpuIcon} alt="GPU" className={sty.charIcon} />
                <span className={sty.charDescription}>
                  Battery: {productData.battery}
                </span>
              </li>
            </ul>
            <button className={sty.addToBasketButton} onClick={addToCart}>
              Add to Basket
            </button>
          </div>
        </div>
      </div>

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

export default Tovar3;
