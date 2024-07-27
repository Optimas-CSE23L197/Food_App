// Cart.jsx
import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css';
import {useNavigate} from 'react-router-dom'

function Cart() {
    const { cartItems, food_list, removeFromcart, cartTotal } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart mt-[100px]">
            <div className="cart-item">
                <div className="cart-item-title items-center text-gray-500 text-[max(1vw,12px)]">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    const itemQuantity = cartItems[item._id];
                    if (itemQuantity > 0) {
                        return (
                            <>
                                <div key={item._id} className="cart-item-title cart-items-item my-[10px] mx-[0px] text-black">
                                    <img className="w-[50px]" src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{itemQuantity}</p>
                                    <p>${item.price * itemQuantity}</p>
                                    <p className="minus cursor-pointer text-red-500" onClick={()=> removeFromcart(item._id)}>
                                        x
                                    </p>
                                </div>
                                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
                            </>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)]">
                <>
                <div className="cart-total flex-1 flex flex-col gap-5">
                    <h2 className='flex items-center h-[50px] justify-center font-bold text-[30px]'>Cart Total</h2>
                    <hr className='my-[10px] mx-[0px]'/>
                    <div className="cart-total-details flex justify-between">
                        <p>
                            Subtotal
                        </p>
                        <p>{cartTotal()}</p>
                    </div>
                    <hr className='my-[10px] mx-[0px]'/>
                    <div className="cart-total-details flex justify-between text-[#555]">
                        <p>
                            Delivary Fee
                        </p>
                        <p>{cartTotal()===0?0:2}</p>
                    </div>
                    <hr className='mx-[10px] my-[0px]'/>
                    <div className="cart-total-details flex justify-between text-[#555]">
                        <p className="font-[500] text-[20px]">
                            Total
                        </p>
                        <p className="font-[500] text-[20px]">{cartTotal()===0?0:cartTotal()+2}</p>
                    </div>
                    <button onClick={()=> navigate('/order')}
                    className='border-none flex items-end justify-center text-white bg-[tomato] py-[12px] rounded-[50px] cursor-pointer mt-[15px]'>
                    Proceed To Checkout
                </button>
                </div>
                </>
                <div className="cart-promo-code flex-1">
                    <p className="text-[#555]">
                        If you have a promo code, Enter it here
                    </p>
                    <div className="promo-code-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                        <input className="bg-transparent border-none outline-none pl-[10px]"
                        type="text" placeholder='Promo code'/>
                        <button className="w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]">
                            Enter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
