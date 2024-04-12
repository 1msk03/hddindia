"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);


  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCoursesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);

    setServicesDropdownOpen(false);
  };

 
  return (
    <div className=" bg-white z-50 top-0   py-7 fixed w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden relative flex flex-col justify-center items-start gap-5 ">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Home
          </Link>
          <div 
            onClick={handleCoursesDropdownToggle}
        data-dropdown-toggle="servicesDropdown"
        className="text-black flex items-center font-medium text-[17px]"
       >
       Products
        <svg
         onClick={handleCoursesDropdownToggle}
          className={`w-2.5 h-2.5 ms-3 ${
              isCoursesDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
       </div>
       
       <div
                  id="servicesDropdown"
                  className={`z-10 ${
                      isCoursesDropdownOpen ? "block" : "hidden"
                  }  divide-y divide-gray-100`}
                >
                  <ul
                    class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="servicesDropdown"
                  >
                    
                                <Link
                                       onClick={handleLinkClick}
                                       href={'/products#hdd'}
                                 
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                                >
                           HDD Machines
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={'/products#Digitrak'}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                                >
     Digitrak
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={'/products#Tools'}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                                >
                                Tools & Spares
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={'/products#Rock'}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-gray-500 hover:text-black md:mx-2"
                                >
                              Rock Tools
                                </Link>
                                
                             
                  </ul>
                </div>
          <Link
       href={'/about-us'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
      About
          </Link>
          <Link
        href={'/support'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
       Support
          </Link>
          <Link
         href={'/contact'}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
         Contact
          </Link>
         
        


         
        </ul>
        <div className="lg:hidden flex absolute top-4 right-3 ">
          <span onClick={handleLinkClick}><IoClose className="text-4xl cursor-pointer"/></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
