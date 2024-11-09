import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import styles from "../components/css/itemsgreed.module.css";

const GPU = function () {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cards"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className={styles.salesContainer}>
      <div className={styles.sortButtonsContainer}>
        <button
          className={styles.sortButton}
          onClick={() => setSortType("name")}
        >
          Sort by Name
        </button>
        <button
          className={styles.sortButton}
          onClick={() => setSortType("price")}
        >
          Sort by Price
        </button>
      </div>
      <div className={styles.salesGrid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={styles.salesItem}>
            <img
              src={product.img}
              className={styles.salesItemImage}
              alt={product.name}
            />
            <div className={styles.salesItemDetails}>
              <h3>{product.name}</h3>
              <p style={{ color: "#000", fontWeight: "bold" }}>
                ${product.price}
              </p>
              <Link
                className={styles.salesButton}
                to={`/main_page/tovar/${product.id}`}
              >
                Open Item
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPU;
