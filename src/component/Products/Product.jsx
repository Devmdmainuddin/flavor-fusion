import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const Product = ({products,addToCart}) => {
    const {image,name,description,preparingTime,calories,ingredients}=products
    return (
        <div className="p-6 border-[#d0cdcd] border-2 rounded-[18px]">
            <img className='rounded-[18px] h-[300px] w-full object-cover' src={image} alt="" />
            <h2 className='text-xl text-[#282828] font-semibold leading-6 mt-4'>{name}</h2>
            <p className='text-[16px] text-[#878787] font-normal leading-6 mt-4'>{description}</p>
            <div className='text-lg text-[#282828] font-medium leading-6 mt-4'>ingredients : {ingredients.length}{ingredients.map((item,idx)=><ul key={idx}><li className='text-lg text-[#878787] font-normal leading-8 list-disc ml-6'>{item}</li></ul>)}</div>
            
            <div className='flex justify-between items-center mt-10'><p className='flex items-center text-[16px] text-[#282828cc] font-normal leading-5 gap-x-3'><IoTimeOutline></IoTimeOutline>{preparingTime} minutes</p>
                <p className='flex items-center text-[16px] text-[#282828cc] font-normal leading-5 gap-x-3'><RiFireLine></RiFireLine>{calories} calories</p>
            </div>
            <button href="#" onClick={()=>addToCart(products)} className='text-[20px] mt-6 font-semibold leading-6 text-[#150b2bb3] bg-[#0BE58A] py-3 px-6 rounded-[50px] inline-block'>want to Cock</button> 
        </div>
    );
};


Product.propTypes = {
    products:PropTypes.object.isRequired,
    addToCart:PropTypes.func
   
}
export default Product;