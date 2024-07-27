import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';

function Test() {

    const { food_list, cartItems, removeFromcart } = useContext(StoreContext);

  return (
    <div>
      {food_list.map((item,index)=> {
        if([item._id] > 0){
        return (
            <div key={index} className="test">
                <img src={item.image} alt="" />
                {/* <p>{item._id}</p> */}
                <p>{item.name}</p>
                <p>$${[item._id]}</p>
                <p>${item.price}</p>
                <p>{item.price * [item._id]}</p>
            </div>
        )
      }
      })}
    </div>
  )
}

export default Test
