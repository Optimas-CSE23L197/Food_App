import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="Header border-[2px] h-[70vh] relative bg-no-repeat bg-contain"
    style={{background: "url('./header_img.png')"}}
    >
      <div className="header-containt flex flex-col absolute items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-semibold text-white text-[4.5vw]">
        Order Your Favorite Food here
        </h2>

        <p className="text-white text-[1.10vw] font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ab veniam iure ducimus natus accusamus molestiae nostrum fuga placeat id.
        </p>
        <button className="text-[#747474] font-[500] px-10 py-5 bg-white text-[1vw] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
