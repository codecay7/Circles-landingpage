import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full h-16 font-semibold text-black flex items-center justify-between px-4 gap-96 md:justify-around">
            {/* Logo or Title */}
            <div className="text-l  bg-red">
               <h1 className="text-[3vw]">Circles</h1>
            </div>

            {/* Menu for larger screens */}
            <div className=" hidden md:flex justify-start space-x-8 ml-36 text-white text-sm ">
                <a className="bg-black flex justify-center items-center pt-1 pb-1 pl-5 pr-5  rounded-3xl border-2 border-black" href="">HOME</a>
                <a className="bg-black  flex justify-center items-center pt-1 pb-1 pl-5 pr-5  rounded-3xl border-2 border-black" href="">FAQs</a>
                <a className="bg-black  flex justify-center items-center pt-1 pb-1 pl-5 pr-5  rounded-3xl border-2 border-black" href="">ABOUT</a>
                <a className="bg-black  flex justify-center items-center pt-1 pb-1 pl-5 pr-5  rounded-3xl border-2 border-black" href="">CONTACT</a>

               
            </div>

            {/* Hamburger Icon for Small Screens */}
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-12 left-0 w-full bg-cardbg border-dashed border-4 border-black shadow-lg flex flex-col space-y-4 py-4 px-6 md:hidden rounded-3xl">
                    <a href="" className="hover:text-primary">HOME</a>
                    <a href="" className="hover:text-primary">ABOUT</a>
                    <a href="" className="hover:text-primary">FAQ</a>
                    <a href="" className="hover:text-primary">BLOGS</a>
                </div>
            )}
        </div>
    );
}
