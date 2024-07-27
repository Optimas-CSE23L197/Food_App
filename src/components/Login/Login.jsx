import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/Image/frontend_assets/assets'

function Login({setLogin}) {

    const [currentstate, setCurrentstate] = useState("Login")

  return (
    <div className="login-popup absolute z-[1] w-full h-full bg-[#00000090] grid">
      <from className="login-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[25px] py-[30px] rounded-[8px] text-[14px]">
        <div className="login-title text-black font-bold">
            <h2 className="flex items-center justify-between">
                {currentstate}
                <img  className="w-[16px] cursor-pointer"
                onClick={()=>setLogin(false)}
                src={assets.cross_icon} alt="" />
            </h2>
        </div>
        <div className="login-inputs flex flex-col gap-[20px]">
            {currentstate === "Login" ? <></> : <input className="outline-none border-[1px] border-[#c9c9c9] p-[4px] rounded-[4px]"
            type='text' placeholder='Name' required/>}
            <input className="outline-none border-[1px] border-[#c9c9c9] p-[4px] rounded-[4px]"
            type='email' placeholder='Email' required/>
            <input className="outline-none border-[1px] border-[#c9c9c9] p-[4px] rounded-[4px]"
            type='password' placeholder='Password' required/>
        </div>
        <button className="border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer">
            {currentstate === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition flex items-start gap-2 mt-[-16px]">
            <input  className="mt-[5px]"
            type="checkbox" required/>
            <p>
                By continuing, i agree to the terms of use & privacy policy.
            </p>
        </div>
        {currentstate === "Login" ? 
        <p>
            Create a new account? <span className="text-[tomato] font-[500] cursor-pointer" onClick={() => setCurrentstate("Sign Up")}>Click Here</span>
        </p> :
        <p>
            Already Have an account? <span className="text-[tomato] font-[500] cursor-pointer" onClick={() => setCurrentstate("Login")}>Login Here</span>
        </p>
}
      </from>
    </div>
  )
}

export default Login
