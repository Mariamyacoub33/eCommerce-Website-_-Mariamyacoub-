import { Link } from "react-router-dom";
import "./Shoppage.css";
import Cardproduct from "../Pages/Cardproduct"
import Pagination from "./Pagination";
import trophyicon from "../../public/assets/images/trophy-icon.svg";
import warrantyicon from "../../public/assets/images/warranty-icon.svg";
import freeshippingicon from "../../public/assets/images/shipping-icon.svg";
import supporticon from "../../public/assets/images/support-icon.svg";


function Shoppage ({products , addToCart , getpage }){
    
    return(
        <>
       <div className="headershop">
<div className="content">
<h1>shop</h1>
<p>Home &gt; Shop</p>
</div>
       </div>
       <container id="containerdiv">
       {products.length >= 1 ? (products.map((prod)=>{
        return(<Cardproduct key={prod.id} prod={prod} addToCart={addToCart} /> )
       })): <h2 className="text"> Not Found ...</h2>}
       <br/>
       <Pagination getpage={getpage}/>
       </container>
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
    )
}

export default Shoppage;