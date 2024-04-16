import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='bg-primary hidden text-white h-[55px] lg:flex justify-between items-center px-[15px]'>
      <div>
        <div  className='flex justify-center items-center gap-1'>
          <span className='p-1 rounded-full bg-white text-primary'>
            <IoIosCall />
          </span>
          <p className='hidden lg:flex text-[15px] font-[400]'>
            Call : <Link href={'tel:+919785111997'} className='hover:text-black duration-300 pr-2'>+91 97851 11997</Link> / <Link href={'tel:+919214507321'} className='hover:text-black duration-300 pl-2'>+91 92145 07321</Link>
          </p>
        </div>
      </div>
      <div>
        <div  className='flex justify-center items-center gap-1'>
          <span className='p-1 rounded-full bg-white text-primary'>
            <IoMdMail />
          </span>
          <p className=' hidden lg:flex text-[15px] font-[400]'>
            Email : <Link href={'mailto:info@hddindia.com'} className='hover:text-black duration-300'>info@hddindia.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
