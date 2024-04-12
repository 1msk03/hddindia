import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='bg-primary text-white h-[55px] flex justify-between items-center px-[15px]'>
      <div>
        <Link href={'/'} className='flex justify-center items-center gap-1'>
          <span className='p-1 rounded-full bg-white text-primary'>
            <IoIosCall />
          </span>
          <p className='hidden lg:flex text-[15px] font-[400]'>
            Call : +91 97851 11997 / +91 92145 07321
          </p>
        </Link>
      </div>
      <div>
        <Link href={'/'} className='flex justify-center items-center gap-1'>
          <span className='p-1 rounded-full bg-white text-primary'>
            <IoMdMail />
          </span>
          <p className=' hidden lg:flex text-[15px] font-[400]'>
            Email : info@hddindia.com
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
