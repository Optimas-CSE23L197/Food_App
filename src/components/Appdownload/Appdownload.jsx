import React from 'react';
import { assets } from '../../assets/Image/frontend_assets/assets';

function Appdownload() {
  return (
    <div className="app-download m-auto mt-[100px] items-center font-[500] text-center" id="app-download">
      <p className="text-[max(3vw,22px)]">
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-[40px]">
        <img src={assets.play_store} alt="Download from Play Store" className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer  hover:transform hover:scale-[1.05] transition-transform duration-200" />
        <img src={assets.app_store} alt="Download from App Store" className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer hover:transform hover:scale-[1.05] transition-transform duration-200" />
      </div>
    </div>
  );
}

export default Appdownload;
