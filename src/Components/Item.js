import "./item.css";
import { useState } from "react";

export default function Item(props) {
  let [count, setCount] = useState(1);
  return (
    <div className="item">
      <div className="phone">
        <div className="imageContainer">
          <img src={props.image} alt="" className="phoneImage" />
        </div>
        <div className="phoneDetails">
          <p className="title">{props.title}</p>
          <p className="price">{props.price}</p>
          <p className="remove">remove</p>
        </div>
      </div>
      <div className="quantity">
        <i class="fa-solid fa-angle-up"></i>
        <p className="unit">{count}</p>
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
}
