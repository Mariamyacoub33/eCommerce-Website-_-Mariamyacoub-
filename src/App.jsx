import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./Pages/Homepage";
import Shoppage from "./Pages/Shoppage";
import Contactpage from "./Pages/Contactpage";
import Layoutpage from "./Pages/Layoutpage";
import Productpage from "./Pages/Productpage";
import Catagorypage from "./Pages/Catagorypage";
import Cartpage from "./Pages/Cartpage";
import { useEffect, useState } from "react";
import { number } from "yup";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      // console.log(data); // تأكد من طباعة البيانات الصحيحة هنا

    } 
    catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const [catagories, setCatagories] = useState([]);
  const getCatagory = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/${catagory.id}');
      const data = await response.json();
      setCatagories(data);
      // console.log(data); // تأكد من طباعة البيانات الصحيحة هنا

    } 
    catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getpage = async (page) => {
      const response = await fetch('https://fakestoreapi.com/products?limit=${page}');
      const data = await response.json();
      setProducts(data);
    };

  useEffect(() => {
    fetchData();
  }, []);

  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
  // };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layoutpage />}>
      <Route path="Homepage" element={<Homepage catagories={catagories} />}></Route>
      <Route index element={<Homepage catagories={catagories} />}></Route>
      <Route path="Shoppage" element={<Shoppage products={products} getpage={getpage} addToCart={addToCart}/>}></Route>
      <Route path="Contactpage" element={<Contactpage/>}></Route>
      <Route path="/product/:id" element={<Productpage addToCart={addToCart}/>} ></Route>
      <Route path="/catagory/:id" element={<Catagorypage catagories={catagories} />} ></Route>
      <Route path="Cartpage" element={<Cartpage cartItems={cartItems} removeFromCart={removeFromCart}/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
