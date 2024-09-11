import { useState } from "react";
import * as yup from "yup"
import "./Contactpage.css";
import Logoimg from "../../public/assets/images/logo.png";
import trophyicon from "../../public/assets/images/trophy-icon.svg";
import warrantyicon from "../../public/assets/images/warranty-icon.svg";
import freeshippingicon from "../../public/assets/images/shipping-icon.svg";
import supporticon from "../../public/assets/images/support-icon.svg";
import iconaddress from "../../public/assets/images/address.svg";
import iconphone from "../../public/assets/images/phone.svg";
import icontime from "../../public/assets/images/time.svg";

function Contactpage() {
    const [FormData, setFormData] = useState({
        yourName: "",
        Emailaddress: "",
        Subject: "",
        message:"",
        checkacceptance: false,
      });

      const userSchema = yup.object().shape({
        yourName: yup.string().min(4, "PLEASE TAKECARE ENTER MORE THAN 4 CHAR"),
        Emailaddress: yup.string().email("must be valid email").required(),
        message: yup.string(),
        checkacceptance: yup.boolean()
      })

      async function testValidation() {

        try {
    
          await userSchema.validate(FormData, { abortEarly: false });
    
          console.log("Validation passed");
    
        } catch (err) {
    
          err.inner.forEach((error) => {
    
            alert(`${error.path}: ${error.message}`);
    
          });
    
        }
    
      }

      function handleonSubmit(event){
        testValidation()
        event.preventDefault();
        console.log(FormData)
      }

      function handleonChange(event){
        const KeyName = event.target.name;
        var keyValue = event.target.value;
        // console.log(value)
        const type = event.target.type;
        // console.log(key)
       
        if(type == "checkbox"){
          keyValue = event.target.checked;
        }
        if(KeyName == "age"){
          keyValue = Number(keyValue);
        }
    
        setFormData ({
          ...FormData, 
    
          [KeyName]: keyValue,
    
        })
      }

  return (
    <>
      <div className="headershop">
        <div className="content">
          <img className="LogoimgCon" src={Logoimg} />
          <h1>Contact</h1>
          <p>Home &gt; Contact</p>
        </div>
      </div>
      <container className="containercontact">
        <div className="Upperdivcon">
          <h3 className="Get">Get In Touch With Us</h3>
          <p className="formore">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="Bottomdivcon">
        <div className="cardinfo">
      <div className="section">
        <img src={iconaddress} className="iconimg"/>
        <div className="textLS">
            <label>Address</label>
        <span>236 5th Avenue, New York NY10000, United States</span>
        </div>
      </div>
      <div className="section">
        <img src={iconphone} className="iconimg"/>
        <div className="textLS">
            <label>Phone</label>
        <span>Mobile: +(84) 546-6789</span>
        <span>Hotline: +(84) 456-6789</span>
        </div>
      </div>
      <div className="section">
        <img src={icontime} className="iconimg"/>
        <div className="textLS">
            <label>Working Time</label>
        <span>Monday-Friday: 9:00 - 22:00</span>
        <span>Saturday-Sunday: 9:00 - 21:00</span>
        </div>
      </div>
    </div>
    <form onSubmit={handleonSubmit}>
<div className="labelwinput">
<label htmlFor='firstname'>yourName</label>
<input 
id='yourName' 
name='yourName'
value={FormData.yourName} 
onChange={handleonChange}
type="text" placeholder="  Abc"
></input>
</div>
<div className="labelwinput">
<label htmlFor='Emailaddress'>Email address</label>
<input 
id='Emailaddress' 
name='Emailaddress'
value={FormData.Emailaddress} 
onChange={handleonChange}
type="text" placeholder="  Abc@def.com"
></input>
</div>
<div className="labelwinput">
<label htmlFor='Subject'>Subject</label>
<input 
id='Subject' 
name='Subject'
value={FormData.Subject} 
onChange={handleonChange}
type="text" placeholder="  This is an optional"
></input>
</div>
<div className="labelwinputmes">
<label htmlFor='message'>Message</label>
<input 
id='message' 
name='message'
value={FormData.message} 
onChange={handleonChange}
type="text" placeholder="  Hi! I'd like to ask about"
></input>
</div>
<button class="submit-button">Submit</button>
    </form>
        </div>
      </container>
      <div id="infoaboutservic">
        <div className="Servic">
          <img className="icon" src={trophyicon} />
          <div className="bottomservic">
            <label className="servicname">High Quality</label>
            <p className="servicdis">crafted from top materials</p>
          </div>
        </div>
        <div className="Servic">
          <img className="icon" src={warrantyicon} />
          <div className="bottomservic">
            <label className="servicname">Warranty Protection</label>
            <p className="servicdis">Over 2 years</p>
          </div>
        </div>
        <div className="Servic">
          <img className="icon" src={freeshippingicon} />
          <div className="bottomservic">
            <label className="servicname">Free Shipping</label>
            <p className="servicdis">Order over 150 $</p>
          </div>
        </div>
        <div className="Servic">
          <img className="icon" src={supporticon} />
          <div className="bottomservic">
            <label className="servicname">24 / 7 Support</label>
            <p className="servicdis">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
