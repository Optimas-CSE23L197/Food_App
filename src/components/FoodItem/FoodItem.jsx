import React, { useContext } from 'react'
import { assets } from '../../assets/Image/frontend_assets/assets'
import './Fooditem.css'
import { StoreContext } from '../../Context/StoreContext';

function FoodItem({id,name,price,description,image}) {

  const {cartItems,addTocart,removeFromcart} = useContext(StoreContext);

  return (
    <div className="food-item w-[100%] m-auto rounded-[15px]">

      <div className="food-item-img-container relative">
        <img className="food-item-img w-full rounded-t-[15px]"
        src={image} alt="" />
        {!cartItems[id] 
          ? <img  className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]" 
            onClick={() =>addTocart(id)}
            src={assets.add_icon_white} alt=''/>
          : <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img className="w-[30px]"
            onClick={() => removeFromcart(id)}
            src={assets.remove_icon_red} alt="" />
            <p>
              {cartItems[id]}
            </p>
            <img onClick={() => addTocart(id)}
            src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>

      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center m-bottom-[10px]">
            <p className="text-[20px] font-semibold">
                {name}
            </p>
            <img className="w-[70px]"
            src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description text-[#676767] text-[12px]">
            {description}
        </p>
        <p className="food-item-price text-[tomato] text-[22px] font-semibold my-[10px]">
            ${price}
        </p>

      </div>
    </div>
  )
}

export default FoodItem
