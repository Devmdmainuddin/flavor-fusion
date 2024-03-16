
import {totaltime} from './../../App'
import {totalcalories} from './../../App'
import PropTypes from 'prop-types';

const Cart = ({cock}) => {
    return (
        <div>
             <h2 className='text-2xl text-[#150b2b] font-semibold leading-[30px] mt-8 text-center'>Currently cooking: {cock.length}</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>time</th>
                                    <th>calories</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                   cock.map((p,idx)=>
                                   <tr key={idx} className='bg-base-200'>
                                        <th>{idx + 1 }</th>
                                        <td>{p.name}</td>
                                        <td>{p.preparingTime}</td>
                                        <td>{p.calories}</td>
                                    </tr>
                                   )}
                                
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-between items-center mt-4 mb-4 p-4'>
                            <p>total time = {totaltime} minutes</p>
                            <p>total Calories = {totalcalories} calories</p>
                        </div>
            
        </div>
    );
};
Cart.propTypes = {
    cock:PropTypes.array
    
   
}
export default Cart;