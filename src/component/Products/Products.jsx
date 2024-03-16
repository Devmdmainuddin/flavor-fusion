import { useEffect, useState } from "react";
import Product from "./Product";
import PropTypes from 'prop-types';



const Products = ({addToCart}) => {

    const [products,setproducts]=useState([])

useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setproducts(data))
},[])



    return (
        
        <div className='grid lg:grid-cols-2 gap-6 '>
            {
              products.map((products,idx)=><Product key={idx} products={products} addToCart={addToCart}></Product>)  
            }
            
        </div>
    );
};

Products.propTypes = {
    addToCart:PropTypes.func
   
}

export default Products;