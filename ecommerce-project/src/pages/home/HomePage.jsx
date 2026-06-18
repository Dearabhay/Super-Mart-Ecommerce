import axios from 'axios';
import {ProductsGrid} from './ProductsGrid'
import {useEffect,useState } from 'react';
import './HomePage.css';
import {Header} from '../../components/Header'


export function HomePage({cart ,loadCart}){
  

  const [products, setProducts] = useState([]);
 
  useEffect(()=>{
    const getHomeData = async ()=>{
         const response = await axios.get('/api/products')
          setProducts( response.data);
    };

getHomeData();
    
  },[])
  
  


    return ( 
        <>
        <Header cart={cart}/>
         <title>HomePage</title>
        
    <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart} />
    </div>
    </>
    )
}