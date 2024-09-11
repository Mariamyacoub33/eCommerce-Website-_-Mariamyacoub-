import { Link } from "react-router-dom";
import "./Homepage.css";
import wallDec from "../../public/assets/images/casualclothes.png";
import Womenimg from "../../public/assets/images/womenclothing.png";
import jeweleryimg from "../../public/assets/images/jewelery.png";
import electronicsimg from "../../public/assets/images/electronics.png";
import menimg from "../../public/assets/images/mensclothing.png";
import trophyicon from "../../public/assets/images/trophy-icon.svg";
import warrantyicon from "../../public/assets/images/warranty-icon.svg";
import freeshippingicon from "../../public/assets/images/shipping-icon.svg";
import supporticon from "../../public/assets/images/support-icon.svg";


function Homepage (){

    const arrayofproducts = [
        { "id": 1,
          "catagory": "women's clothing", 
          "image": Womenimg },
          { "id": 2, 
            "catagory": "jewelery",
            "image": jeweleryimg },
            { "id": 3, 
            "catagory": "electronics", 
            "image": electronicsimg },
            { "id": 3, 
              "catagory": "men's clothing", 
              "image": menimg }
      ]
      return(
        <>
        <img id="wallDec" src={wallDec} alt="Cropped Image"/>
        <div id="Homepagediv">
          <div id="Categprod">
        <label id="Categ">Categories</label>
        <div id="AllProducts">
        {arrayofproducts.map((product) => (
            <Link key={product.id} id="linkCategory" to={`/catagory/${product.catagory}`}>
            <div className="productbox">
              <img className="imgproduct" src={product.image}></img>
              <h1 className="nameproduct">{product.catagory}</h1>
            </div>
            </Link>
          ))}
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
        </div>
        </>
    )
}

export default Homepage;