import React from 'react'
import logo from '../img/logo.png'
import {MdShoppingBasket} from 'react-icons/md';
import user from '../img/avatar.png'

const Header = () => {
  return (
    <header className="fixed z-50  w-screen p-6 px-16">
      {/* Desktop & Tabets  */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className='flex items-center gap-8'>
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <img className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' src={user} alt="" />
        </div>
      </div>

      {/* Mobile */}

      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
}

export default Header