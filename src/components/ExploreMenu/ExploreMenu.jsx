import React from 'react'
import { menu_list } from '../../assets/Image/frontend_assets/assets'

function ExploreMenu({category, setCategory}) {
  return (
    <div className="explore-menu flex flex-col gap-[20px] mt-[30px]"
    id="explore-menu">
      <h1 className="text-[#262626] font-bold text-[2.5vw]">
        Explore our menu
      </h1>
      <p className="explore-menu-text max-w-[60%] text-black font-semibold">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your carvings and elevate your dining exprience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll"
      style={{ "-ms-overflow-style": "none", "scrollbar-width": "none", "overflow": "scroll hidden" }}
      >
        {menu_list.map((item,index) => {
            return (
                <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s] ${category===item.menu_name?"active border-[4px] border-[tomato] p-1": ""}`} src={item.menu_image} alt="" />
                    <p className="mt-[10px] text-[#747474] text-[1.4vw] cursor-pointer font-serif">
                        {item.menu_name}
                    </p>
                </div>
            )
        })}
      </div>
      <hr className="bg-[#e2e2e2] border-none my-[10px] mx-0 h-[2px]"/>
    </div>
  )
}

export default ExploreMenu
