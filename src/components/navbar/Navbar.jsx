import React, { useContext } from 'react'
// import '../../assets/Image/frontend_assets/assets'
import { useState } from 'react';
import { assets } from '../../assets/Image/frontend_assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

function Navbar({setLogin}) {

const [menu, setMenu] = useState("Home");
const {cartTotal} = useContext(StoreContext);

  return (
    <div className="navbar flex items-center justify-between py-5">
      <Link to='/'><img src={assets.logo} alt="Potato" className="w-[150px]"/></Link>
      <ul className="nev-menu flex items-center gap-[20px] text-[#49557e] list-none text-[18px] font-semibold">
        <li className={`cursor-pointer ${menu === "Home"?"active border-b-[2px] border-[#49557e] pb-[2px]":""}`
      }
      onClick={() => setMenu("Home")}
      >Home</li>

        <li className={`cursor-pointer ${menu === "Menu"?"active border-b-[2px] border-[#49557e] pb-[2px]":""}`}
        onClick={() => setMenu("Menu")}
        >Menu</li>

        <li className={`cursor-pointer ${menu === "Mobile-App"?"active border-b-[2px] border-[#49557e] pb-[2px]":""}`}
        onClick={() => setMenu("Mobile-App")}
        >Mobile-App</li>
        
        <li className={`cursor-pointer ${menu === "Contact Us"?"active border-b-[2px] border-[#49557e] pb-[2px]":""}`}
        onClick={() => setMenu("Contact Us")}
        >Contact Us</li>

      </ul>

      <div className="nav-bar-right flex items-center gap-10">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon relative">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          {cartTotal() > 0 && (
            <div className="dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-3px]"></div>
          )}
        </div>
        <button className="bg-white text-[16px] text-[#49557e] border-[1px] border-[tomato] px-[30px] py-[10px] rounded-[50px] cursor-pointer font-semibold transition duration-300 hover:bg-[#fff4f4]"
        onClick={()=>setLogin(true)}
        >Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar;
