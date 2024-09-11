import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Productpage.css";
import Counter from "./Counter/Counter"

function Productpage ( {addToCart}){
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    
    const param = useParams();
console.log(param.id)

const getproductdetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${param.id}`);
      const data = await response.json();
      setProduct(data);
      console.log(data); // تأكد من طباعة البيانات الصحيحة هنا
  
  };

  useEffect(() => {
    getproductdetails();
  }, []);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
    
  const handleClick = () => {
    addToCart({ ...product, quantity });
    alert('Item added to cart!');
  };

    return(
        <>
        <nav aria-label="breadcrumbn" className="navdiv">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Shop</li>
        <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
      </ol>
    </nav>
    <div className="product-container">
    <div className="upperdiv">
<img src={product.image} alt={product.title} />
<div className="Infoproduct">
      <h1 className="popp">{product.title}</h1>
      <p className="price">Price: ${product.price}</p>
      <p  className="price">Category: {product.category}</p>
      <div className="ContBtn">
      <Counter onQuantityChange={handleQuantityChange}/>
      <button onClick={handleClick} className="BtnCart">Add To Cart</button>
      </div>
      {/* <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
      </div>
      </div>
      <div>
      <p className="destitle"> description </p>
      <p className="description"> {product.description}</p>
      </div>
    </div>
        </>
       
   
    ) 
}

export default Productpage;