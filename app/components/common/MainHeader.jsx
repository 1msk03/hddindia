'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNav from './MobileNav';

const MainHeader = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=' shadow-lg'>
      <div className='flex justify-between items-center px-[25px] py-[19px]'>
        <div>
          <Link href={'/'} className='text-[24px] font-bold'>
            <span className='text-primary'>CB</span> Machinery Solutions Pvt.
            LTD.
          </Link>
        </div>
        <ul className='flex justify-center items-center'>
          <li>
            <Link
              href='/'
              className={`hidden lg:flex text-[16px] px-[20px] uppercase ${
                activeLink === '/' ? 'text-primary' : 'text-black'
              } hover:text-primary`}
              onClick={() => handleSetActiveLink('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/support'
              className={`hidden lg:flex text-[16px] px-[20px] uppercase ${
                activeLink === '/support' ? 'text-primary' : 'text-black'
              } hover:text-primary`}
              onClick={() => handleSetActiveLink('/support')}
            >
              SUPPORT
            </Link>
          </li>
          <li className='hidden lg:flex relative group'>
            <div className={`flex justify-center items-center  space-x-3 px-[20px] text-[16px]  text-black uppercase ${
                  activeLink.includes('/products')
                    ? 'text-primary'
                    : ' '
                }`}>
              <div
              
               
              >
                Products
              </div>
              <svg
   
    className={`w-2.5 h-2.5  `}
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
              className={`absolute top-0 -left-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}
            >
              <div className='relative top-7 py-3 bg-white border-t-2 border-t-primary px-4 shadow-lg w-full'>
                <div className='relative z-10'>
                  <div className='flex flex-col gap-3 justify-center items-center'>
                    <Link
                      href={'/products#hdd'}
                      className={`w-full text-[16px] text-start uppercase ${
                        activeLink === '/products#hdd'
                          ? 'text-primary'
                          : 'text-black'
                      } hover:text-primary`}
                      onClick={() => handleSetActiveLink('/products#hdd')}
                    >
                      HDD Machines
                    </Link>
                    <Link
                      href={'/products#Digitrak'}
                      className={`w-full text-[16px] text-start uppercase ${
                        activeLink === '/products#Digitrak'
                          ? 'text-primary'
                          : 'text-black'
                      } hover:text-primary`}
                      onClick={() => handleSetActiveLink('/products#Digitrak')}
                    >
                      Digitrak
                    </Link>
                    <Link
                      href={'/products#Tools'}
                      className={`w-full text-[16px] text-start uppercase ${
                        activeLink === '/products#Tools'
                          ? 'text-primary'
                          : 'text-black'
                      } hover:text-primary`}
                      onClick={() => handleSetActiveLink('/products#Tools')}
                    >
                      Tools & Spares
                    </Link>
                    <Link
                      href={'/products#Rock'}
                      className={`w-full text-[16px] text-start uppercase ${
                        activeLink === '/products#Rock'
                          ? 'text-primary'
                          : 'text-black'
                      } hover:text-primary`}
                      onClick={() => handleSetActiveLink('/products#Rock')}
                    >
                      Rock Tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              href='/about-us'
              className={`hidden lg:flex text-[16px] px-[20px] uppercase ${
                activeLink === '/about-us' ? 'text-primary' : 'text-black'
              } hover:text-primary`}
              onClick={() => handleSetActiveLink('/about-us')}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href='/contact-us'
              className={`hidden lg:flex text-[16px] px-[20px] uppercase ${
                activeLink === '/contact-us' ? 'text-primary' : 'text-black'
              } hover:text-primary`}
              onClick={() => handleSetActiveLink('/contact-us')}
            >
              CONTACT US
            </Link>
          </li>
          <div className='lg:hidden flex' onClick={toggleMobileNav}>
            <GiHamburgerMenu className='text-[28px] cursor-pointer' />
          </div>
        </ul>
      </div>
      {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav} />}
    </div>
  );
};

export default MainHeader;
