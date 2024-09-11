

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Catagorypage.css";
import Cardproduct from "../Pages/Cardproduct"
import trophyicon from "../../public/assets/images/trophy-icon.svg";
import warrantyicon from "../../public/assets/images/warranty-icon.svg";
import freeshippingicon from "../../public/assets/images/shipping-icon.svg";
import supporticon from "../../public/assets/images/support-icon.svg";


function Catagorypage() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getProductsByCategory = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  }, [id]);

  return (

    <>
    <div className="headershop">
<div className="content">
<h1>shop</h1>
<p>Home &gt; Shop</p>
</div>
    </div>
    {/* <container id="containerdiv">
    {products.length >= 1 ? (products.map((prod)=>{
     return(<Cardproduct key={prod.id} prod={prod} addToCart={addToCart} /> )
    })): <h2 className="text"> Not Found ...</h2>}
    </container> */}
    <div className="category-page">
      <h1>Category: {id}</h1>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <Cardproduct key={product.id} prod={product} />
          ))
        ) : (
          <h2>No products found...</h2>
        )}
      </div>
    </div>
    <div id="infoaboutservic">
<div className="Servic">
<img className="icon" src={trophyicon}/>
<div className="bottomservic">
<label className="servicname">High Quality</label>
<p className="servicdis">crafted from top materials</p>
</div>
</div>
<div className="Servic">
<img className="icon" src={warrantyicon}/>
<div className="bottomservic">
<label className="servicname">Warranty Protection</label>
<p className="servicdis">Over 2 years</p>
</div>
</div>
<div className="Servic">
<img className="icon" src={freeshippingicon}/>
<div className="bottomservic">
<label className="servicname">Free Shipping</label>
<p className="servicdis">Order over 150 $</p>
</div>
</div>
<div className="Servic">
<img className="icon" src={supporticon}/>
<div className="bottomservic">
<label className="servicname">24 / 7 Support</label>
<p className="servicdis">Dedicated support</p>
</div>
</div>
     </div>
    
    </>
  );
}

export default Catagorypage;