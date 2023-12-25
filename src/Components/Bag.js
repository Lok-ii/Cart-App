import "./bag.css";
import Item from "./Item";
import data from "./phoneData.json";
import { useState } from "react";

export default function Bag() {
  const [totalPrice, setTotalPrice] = useState(2199.96);
  const [cartItems, setCartItems] = useState(data);
  const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);

  function handleUpdateTotal(title, newCount) {
    // Update the count for the specific item
    const updatedCartItems = cartItems.map((item) =>
      item.title === title ? { ...item, count: newCount } : item
    );

    // Recalculate the total price
    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    // Update both the cart items and total price
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  }

  function handleRemoveItem(title, count) {
    // Remove the item from the cartItems state based on the title and count
    const updatedCartItems = cartItems.filter(
      (item) => !(item.title === title && item.count === count)
    );
    setCartItems(updatedCartItems);

    // Recalculate the total price
    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    setTotalPrice(newTotalPrice);

    // Check if the cart is empty
    setIsCartEmpty(updatedCartItems.length === 0);
  }

  function clearCart() {
    // Clear the cart and update total price
    setCartItems([]);
    setTotalPrice(0);
    setIsCartEmpty(true);
  }

  return (
    <div className="container">
      <h1>YOUR BAG</h1>
      <div className="itemList">
        {cartItems.map((item, index) => {
          return (
            <Item
              title={item.title}
              price={item.price}
              image={item.image}
              key={index}
              count={item.count}
              onRemove={handleRemoveItem}
              onUpdateTotal={handleUpdateTotal}
            />
          );
        })}
      </div>
      <div className="totalContainer">
        <hr />
        <div className="total">
          <p className="totalText">Total</p>
          <p className="totalPrice">
            ${" "}
            {("" + totalPrice).substring(0, ("" + totalPrice).indexOf(".") + 3)}
          </p>
        </div>
        <button className="clearCart" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}
