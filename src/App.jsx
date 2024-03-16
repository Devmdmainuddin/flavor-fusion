
import './App.css'
import { IoIosContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Products from './component/Products/Products';
import Carts from './component/Carts/Carts';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export let totaltime=0;
export let totalcalories=0;

function App() {

const [cartItems,setCartItems]= useState([])
const [cock,setcok]= useState([])

const addToCart =item =>{
  
  const alredyExists = cartItems.find(c=>c.id==item.id);
  if(!alredyExists){
    toast.success("recipes Want to cook added !")
      setCartItems([...cartItems,item]) 
      return
    
  }else{
    return  toast.error("recipes alredey Want to cook !")
  }
  
}
const addToCock = item=>{
  const time =cock.reduce((p,c)=>p+c.preparingTime,0);
    totaltime =(time + item.preparingTime)
 const calories =cock.reduce((p,c)=>p+c.calories,0);
 totalcalories = (calories + item.calories )
 
  setcok([...cock,item])
  const updatedCartItems = cartItems.filter(p => p.id !== item.id);
    if(updatedCartItems){
      toast.success("recipes Currently cooking added !")
       setCartItems(updatedCartItems)
       return 
    }else{
      return   toast.error("recipes alredey in Currently cooking !")
    }
  

}



  return (
    <>
      <header className='max-w-[1320px] py-[50px] mx-auto'>
    <nav className="flex justify-between items-center">
        <div className="logo"><img src="" alt="" /><a href="#" className='text-[32px] font-bold leading-10 text-[#150b2b]'>Recipe Calories</a></div>
        <ul className=" md:flex hidden items-center gap-x-12">
            <li><a className='text-4 font-normal leading-5 text-[#150b2bb3]' href="#">home</a></li>
            <li><a className='text-4 font-normal leading-5 text-[#150b2bb3]' href="#">recipes</a></li>
            <li><a className='text-4 font-normal leading-5 text-[#150b2bb3]' href="#">about</a></li>
            <li><a className='text-4 font-normal leading-5 text-[#150b2bb3]' href="#">search</a></li>
        </ul>
        <div className="right-bar flex gap-x-4  justify-between items-center">
            <form className='bg-[#150b2b0d] rounded-[50px] text-[#150b2bb3] gap-x-3  flex justify-between py-4 px-7 items-center'>
              <label className='text-4 font-normal' htmlFor="search"><FaSearch ></FaSearch></label>
              <input className=' rounded-xl text-4 font-normal bg-[#150b2b0d] inline-block outline-0'  type="search" name="" id="search" placeholder='search' />
            </form>
            <a href="#" className='text-[#150b2bb3] flex justify-center items-center bg-[#0BE58A] text-[24px] w-12 h-12 p-2 rounded-full'><IoIosContact ></IoIosContact></a>
        </div>
    </nav>
  </header>
  <div className="banner mx-auto max-w-[1320px]">
    <div className="container flex justify-center items-center flex-col max-w-[1320px] bg-cover bg-center bg-[url('https://i.ibb.co/hB8hz3w/banner-1.jpg')] h-[600px] rounded-[20px]">
      <h1 className='text-[52px] text-white font-bold leading-[76px] max-w-[897px] text-center'>Discover an exceptional cooking class tailored for you!</h1>
      <p className='text-[18px] font-normal leading-7 max-w-[933px] text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className="buttons mt-10">
      <a href="#" className='text-[20px] font-semibold leading-6 text-[#150b2bb3] bg-[#0BE58A] py-5 px-8 rounded-[50px] inline-block'>Explore Now</a> 
      <a href="#" className='text-[20px] font-semibold leading-6 text-white  py-5 px-8 rounded-[50px] inline-block border-current border-2 ml-7' >Our Feedback</a>
      </div>



    </div> 
  </div>        
  <section className='mt-[100px] mx-auto max-w-[1320px]'>
    <div className="container ">
      <div className="section-title">
        <h2 className='text-4xl text-[#150b2b] font-semibold leading-[50px]  text-center'>Our Recipes</h2>
        <p className='text-[16px] font-normal leading-6 text-center max-w-[823px] mx-auto mt-6 '>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className='mt-[48px] flex justify-between gap-x-4'>
          <div className="main ">
            <Products addToCart={addToCart}></Products>

            </div>
            <div className="sidebar">
              <Carts cartItems={cartItems} addToCock={addToCock} cock={cock}></Carts>

            </div>
      </div>
      

      <ToastContainer />
       
    </div>
  </section>

    </>
  )
}

export default App
