import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Layoutpage.css";
import Logoimg from "../../public/assets/images/logo.png";
import iconcart from "../../public/assets/images/icon-cart.svg";

function Layoutpage (){
  // const [Clicked, setClicked] = useState(false);
  

  // function handleclick() {
  //   setClicked(true);
  // }

    return(
<div id="layoutdiv">
      <nav>
        <div id="startnav">
        <img id="Logoimg" src={Logoimg} />
        <label id="Furniro">Furniro</label>
        </div>
        <ul className="linknav">
          <li>
            <Link to="/Homepage">Home</Link>
          </li>
          <li>
            <Link to="/Shoppage">Shop</Link>
          </li>
          <li>
            <Link to="/Contactpage">Contact</Link>
          </li>
          <li>
            <Link to="/Cartpage">
            <img id="iconcart" src={iconcart} />
            </Link>
          </li>
        </ul>
        {/* <button>
        <a href="" className="Btncart"
        disabled={Clicked}
        onClick={handleclick}
        ><img id="iconcart" src={iconcart} /></a>
        </button>
        {Clicked == true ? (
      <div className="shopping-cart">
      <h2>Shopping Cart</h2>
            <div className="subtotal">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toLocaleString()}</span>
      </div>
    </div>
    ) : null} */}
      </nav>
      <footer>
<div id="infodiv">
  <div id="Leftdiv">
<label id="funlabel">Funiro.</label>
<div id="Prightdiv">
<p >400 University Drive Suite 200 Coral Gables,</p>
<p >FL 33134 USA</p>
</div>
  </div>
  <div id="Rightdiv">
<div id="linkscolumn">
<label className="labelfooterlink">link</label>
<ul className="linkfooter">
          <li>
            <Link to="Homepage">Home</Link>
          </li>
          <li >
            <Link to="Shoppage">Shop</Link>
          </li>
          <li >
            <Link to="Contactpage">Contact</Link>
          </li>
        </ul>
</div>
<div id="helpcolumn">
<label className="labelfooterlink">Help</label>
<div id="bottomhelp">
<label className="labelhelp">Payment Options</label>
<label className="labelhelp">Returns</label>
<label className="labelhelp">Privacy Policies</label>
</div>
</div>
<div id="newscolumn">
<label className="labelfooterlink">Newsletter</label>
<div id="texbtn">
  <textarea id="Enteryouremail"></textarea>
  <button id="subbtn">SUBSCRIBE</button>
</div>
</div>
  </div>
</div>
  <p id="Pbottom">2023 furino. All rights reverved</p>

</footer>
      <Outlet />
      
    </div>
    )
}

export default Layoutpage ;