import React, { useState, useEffect } from "react";
import styles from "./css/busket.module.css";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../AuthUser";

const Busket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { user } = useAuth();

  const handleQuantityChange = (e, itemId) => {
    const newQuantity = Number(e.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const removeFromCart = async (idToRemove) => {
    if (!user) return;

    try {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== idToRemove
      );
      setCartItems(updatedCartItems);

      const cartRef = doc(db, "carts", user.uid);
      await updateDoc(cartRef, { items: updatedCartItems });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const orderNow = async () => {
    if (!user) return;

    try {
      alert("Order placed!");

      setCartItems([]);
      setQuantities({});

      const cartRef = doc(db, "carts", user.uid);
      await updateDoc(cartRef, { items: [] });
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;

      try {
        const cartRef = doc(db, "carts", user.uid);
        const cartSnapshot = await getDoc(cartRef);

        if (cartSnapshot.exists()) {
          const items = cartSnapshot.data().items;
          setCartItems(items);
          const initialQuantities = items.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
          }, {});
          setQuantities(initialQuantities);
        } else {
          console.log("Cart is empty");
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    fetchCartItems();
  }, [user]);

  return (
    <div className={styles.pageBackground}>
      <div className={styles.cart}>
        <h2 className={styles.cartTitle}>Basket</h2>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.img}
              alt="Product"
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <h3 className={styles.cartItemName}>{item.name}</h3>
              <p className={styles.cartItemPrice}>Price: ${item.price}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) => handleQuantityChange(e, item.id)}
                  className={styles.cartItemQuantity}
                />
              </label>
              <p className={styles.cartItemTotal}>
                Total: ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <button onClick={orderNow} className={styles.orderButton}>
            Order Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Busket;
