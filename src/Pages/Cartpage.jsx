import "./Cartpage.css"
import Logoimg from "../../public/assets/images/logo.png";
import deleticon from "../../public/assets/images/delete.svg";

function Cartpage  ({ cartItems, removeFromCart }) {
    return (
      <>
      <div className="headershop">
        <div className="content">
          <img className="LogoimgCon" src={Logoimg} />
          <h1>Cart</h1>
          <p>Home &gt; Cart</p>
        </div>
      </div>
        <div className="containercart">
          <div className="leftcart">
          <div className="navtoproduct">
<label>Product</label>
<label>Price</label>
<label>Quantity</label>
<label>Subtotal</label>
          </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="Cartdiv" key={item.id}>
            <img className="imgincart" src={item.image}/>
            {/* <h3>{item.title}</h3> */}
            <p>{item.price}</p>
            <input type="number" value={item.quantity} min="1" />
                <p>{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
            <img className="deleticon" src={deleticon} />
            </button>
        </div>
      ))
    ) : (
      <p>Your cart is empty</p>
    )}
    </div>
    <div className="carttotal">
    <h2>Cart Totals</h2>
  <div className="Subtotal">
  <label>Subtotal</label>     
    <p>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
  </div>
  <div className="total">
  <label>Total</label>     
    <p>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
  </div>
  <button className="CheckOut">Check Out</button>
    </div>
  </div>
  </>
);
    };


export default Cartpage;