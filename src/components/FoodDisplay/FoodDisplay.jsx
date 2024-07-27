import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'

function FoodDisplay({ category }) {

    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display mt-[30px]" 
        id="food-display">
            <h2 className="text-[2vw] font-[600]">
                Top dishes near you
            </h2>
            <div className="food-display-list mt-[30px] gap-8 cursor-pointer ">
                {food_list && food_list.map((item, index) => {
                    if(category === "All" || category===item.category){
                        return <FoodItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        price={item.price} 
                        description={item.description} 
                        image={item.image}
                    />
                    }
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
