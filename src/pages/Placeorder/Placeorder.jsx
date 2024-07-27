import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

function Placeorder() {

  const {cartTotal} = useContext(StoreContext);

  return (
    <form className="placeorder flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-bold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='First name' />
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='Last name' />
        </div>
        <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
        type="email" placeholder='Email'/>
        <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
        type="text" placeholder='Street'/>
        <div className="multi-fields flex gap-[10px]">
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='City' />
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='State' />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='Zip Code' />
          <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
          type="text" placeholder='Country' />
        </div>
        <input className="mb-[15px] w-[100%] p-[10px] border-[1px] border-[tomato] rounded-[4px]"
        type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
                    <button
                    className='border-none flex items-end justify-center text-white bg-[tomato] py-[12px] rounded-[50px] cursor-pointer mt-[30px]'>
                    Proceed To Payment
                </button>
                </div>
      </div>
    </form>
  )
}

export default Placeorder
