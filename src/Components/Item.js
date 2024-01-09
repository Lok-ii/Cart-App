import "./item.css";
import { useState, useEffect } from "react";

export default function Item(props) {
  let [count, setCount] = useState(props.count);

  useEffect(() => {
    // Update the count when the props.count changes
    setCount(props.count);
  }, [props.count]);

  function increaseCount() {
    setCount(count + 1);
    props.onUpdateTotal(props.title, count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
        const newCount = count - 1;
  
        // If the count reaches 0, remove the item immediately
        if (newCount === 0) {
          props.onRemove(props.title, 1);
        } else {
          setCount(newCount);
          props.onUpdateTotal(props.title, newCount);
        }
      }
  }

  function removeItem() {
    // Call the onRemove callback with the item's title and count
    props.onRemove(props.title, count);
  }

  // Add a function to update the total price in the parent component
  function updateTotalPrice(newCount) {
    // Calculate the new total price based on the updated count
    const newTotalPrice = newCount * props.price;
    // Call a callback function to update the total price in the parent component
    props.onUpdateTotal(newTotalPrice);
  }
  return (
    <div className="item">
      <div className="phone">
        <div className="imageContainer">
          <img src={props.image} alt="" className="phoneImage" />
        </div>
        <div className="phoneDetails">
          <p className="title">{props.title}</p>
          <p className="price">$ {props.price}</p>
          <p className="remove" onClick={removeItem}>remove</p>
        </div>
      </div>
      <div className="quantity">
        <i className="fa-solid fa-angle-up" onClick={increaseCount}></i>
        <p className="unit">{count}</p>
        <i className="fa-solid fa-angle-down" onClick={decreaseCount}></i>
      </div>
    </div>
  );
}
