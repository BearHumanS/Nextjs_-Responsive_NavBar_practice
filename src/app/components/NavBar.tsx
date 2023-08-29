"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallScreenNav = () => {
    setMenuIcon(!menuIcon);
  };

  const onCloseBurger = () => {
    setMenuIcon(false);
  };
  return (
    <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fiexd top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href="/" onClick={onCloseBurger}>
            <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase">
              next.js
            </span>
          </Link>
        </div>
        {/*large screen*/}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/">home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/about">about</Link>
          </li>
          <li className="hover:text-[#CEFF00]">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex ">
          <div className="flex ">
            <Link href="/login">
              <button className="mr-5 bg-[#CEFF00] text-slate-800 hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2">
                로그인
              </button>
            </Link>
            <Link href="/signup">
              <button className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold px-8 py-2 hover:bg-slate-800 hover:text-[#CEFF00]">
                회원가입
              </button>
            </Link>
          </div>
        </div>
        {/*smaller screen*/}
        <div onClick={handleSmallScreenNav} className="flex md:hidden ">
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#CEFF00]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#CEFF00]" />
          )}
        </div>
        {/*smaller screen- NavBar*/}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300 text-center"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }
        >
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl">
              <li className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/" onClick={onCloseBurger}>
                  home
                </Link>
              </li>
              <li className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/about" onClick={onCloseBurger}>
                  about
                </Link>
              </li>
              <li className="py-5 hover:text-[#CEFF00] cursor-pointer">
                <Link href="/contact" onClick={onCloseBurger}>
                  contact
                </Link>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center mt-16">
              <Link href="/login" onClick={onCloseBurger}>
                <button className="bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5 ">
                  로그인
                </button>
              </Link>
              <Link href="/signup" onClick={onCloseBurger}>
                <button className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold py-3 w-[250px] mb-5">
                  회원가입
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
