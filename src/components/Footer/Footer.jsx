import React from 'react';
import { assets } from '../../assets/Image/frontend_assets/assets';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] px-[8vw] py-[20px] pt-[80px] mt-[100px]" 
    id="footer">
      <div className="footer-content w-full">
        <div className="footer-content-left flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum accusamus, officia mollitia earum ipsa, vero, nisi aspernatur inventore cupiditate quod odit consectetur quidem! Ducimus nobis inventore minima earum harum!
          </p>
          <div className="footer-social-icon flex">
            <img className="w-[40px] mr-[15px]" src={assets.facebook_icon} alt="Facebook" />
            <img className="w-[40px] mr-[15px]" src={assets.twitter_icon} alt="Twitter" />
            <img className="w-[40px] mr-[15px]" src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-[20px]">
        <h2 className="text-white text-[25px] font-[500]">
            COMPANY
        </h2>
          <ul className="list-none mb-[10px] cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right flex flex-col items-start gap-[20px]">
        <h2 className="text-white text-[25px] font-[500]">
            GET IN TOUCH
        </h2>
          <ul className="list-none mb-[10px] cursor-pointer">
            <li>+91-000-000-0000</li>
            <li>Contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] mx-[20px] my-[0px] bg-gray-500 border-none"/>
      <p className="footer-copy-right">
        Copyright 2024 © Tomato.com - All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
