import axios from 'axios'
import {useState,useEffect} from 'react'
import {HomePage} from './pages/home/HomePage';


import { Routes,Route} from 'react-router';
import './App.css'
import { CheckOutPage} from './pages/checkout/CheckOutPage';
import { OrderPage } from './pages/orders/OrderPage';
import {TrackingPage} from './pages/TrackingPage'
function App() {
   const [cart,setCart] = useState([]);

    const loadCart =async ()=>{
    const response = await axios.get('/api/cart-items?expand=product')
        
          setCart(response.data);
    }
   useEffect(()=>{
        loadCart();
   },[]);
    
  

  return (

    <Routes>
      <Route path="/" element={ < HomePage cart ={cart} loadCart={loadCart} />}></Route>
      <Route path = "checkout" element ={< CheckOutPage cart ={cart} loadCart={loadCart} />}></Route>
      <Route path = "orders" element={ <OrderPage cart={cart}  />}></Route>
      <Route path = "tracking" element={<TrackingPage/>}></Route>
    </Routes>
   
    
  )
}

export default App
