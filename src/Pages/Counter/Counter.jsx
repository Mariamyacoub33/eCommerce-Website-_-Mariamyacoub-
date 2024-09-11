import { useState } from "react";
import "./Counter.css";

function Counter({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default Counter;