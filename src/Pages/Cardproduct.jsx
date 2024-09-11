import { useState } from "react";
import "./Cardproduct.css";
import mensclothing from "../../public/assets/images/mensclothing.png"
import { Link, useParams } from "react-router-dom";
import Formatcurruncy from "./Formatcurruncy";

function Cardproduct ({prod , addToCart }) {
const [isHovered, setIsHovered] = useState(false);
const handleClick = () => {
    addToCart(prod);
    alert('Item added to cart!');
  };

    return(
        <Link to = {`/product/${prod.id}`}>
        <div
         className={`product-ad ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src={prod.image} alt={prod.title} className={isHovered ? 'hovered' : ''}/>
            {isHovered && (
          <button onClick={handleClick} className="add-to-cart">Add To Cart</button>
        )}
            <div className="infoproduct">
            <h2 className="product-name">{prod.title}</h2>
      {/* <p className="product-description">{prod.description}</p> */}
      <p className="product-price"> Price : {Formatcurruncy(prod.price)}</p>
            </div>
    </div>
    </Link>
    )
}

export default Cardproduct;