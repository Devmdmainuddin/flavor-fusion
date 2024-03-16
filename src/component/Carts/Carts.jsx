
import PropTypes from 'prop-types';
import Cart from './Cart';


const Carts = ({cartItems,addToCock,cock}) => {
    return (
        <div className='border-[#d0cdcd] border-2 rounded-[16px]'>
            <h2 className='text-2xl text-[#150b2b] font-semibold leading-[30px] mt-8 text-center'>Want to cook:{cartItems.length} </h2>
            <div className='h-[1px] w-2/3 mx-auto bg-slate-200 mt-4'></div>
            <div>
            <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       cartItems.map((c,idx)=> 
                    <tr key={idx} className='bg-base-200'>
                        <th>{idx + 1}</th>
                        <td>{c.name}</td>
                        <td>{c.preparingTime} minutes</td>
                        <td>{c.calories} calories</td>
                        <td><button href="#" onClick={()=>addToCock(c)} className='text-[20px] mt-6 font-semibold leading-6 text-[#150b2bb3] bg-[#0BE58A] py-3 px-6 rounded-[50px] inline-block'>Preparing</button> </td>
                    </tr>  )}
               
                    

                    </tbody>
                </table>
            </div>      
            </div>
            <Cart cock={cock}></Cart>
           
            
           
            
            
        </div>
    );
};

Carts.propTypes = {
    cartItems:PropTypes.array,
    cock:PropTypes.array,
    addToCock:PropTypes.func
   
}

export default Carts;