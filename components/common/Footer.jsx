import React from 'react'
import Link from 'next/link';
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#04233b]  text-white'>
   <div className='container mx-auto'>
    <div className='flex  flex-wrap justify-between py-16 items-start gap-10'>
<div>
  <h4 className='text-[24px] font-semibold'>Address</h4>
  <div className='mt-5 flex flex-col justify-start items-start gap-3'>
<Link href={'https://maps.google.com/maps?q=%20369/360,%20Shree%20ji%20Industrial%20Area,%20Kali%20Doongri,%20Madanganj%20Kishangarh+(My%20Business%20Name)'} className='flex justify-start items-center gap-2 hover:text-primary'>
<FaLocationDot className='text-[16px]'/>
<p className='text-[16px]'>Location</p>
</Link>
<Link href={'/'} className='flex justify-start items-center gap-2 hover:text-primary'>
<IoCallSharp className='text-[16px]'/>
<p className='text-[16px]'>Er. Vipin Kabra : +91-9785111997</p>
</Link>
<Link href={'/'} className='flex justify-start items-center gap-2 hover:text-primary'>
<IoCallSharp className='text-[16px]'/>
<p className='text-[16px]'>CA. Ankur Kabra : +91-9214507321</p>
</Link>
<Link href={'/'} className='flex justify-start items-center gap-2 hover:text-primary'>
<IoMdMail className='text-[16px]'/>
<p className='text-[16px]'>info@hddindia.com</p>
</Link>
<div className='flex gap-3 mt-5'>
<Link href={'/'}><FaFacebookF className='text-[25px] hover:text-primary'/></Link>
<Link href={'/'}><FaLinkedinIn className='text-[25px] hover:text-primary'/></Link>
<Link href={'/'}><FaTwitter className='text-[25px] hover:text-primary'/></Link>
<Link href={'/'}><FaInstagram className='text-[25px] hover:text-primary'/></Link>
</div>
  </div>
</div>
<div>
  <h4 className='text-[24px] font-semibold'>Links</h4>
  <ul className='flex flex-col justify-start items-start gap-3 mt-5'>
  <li><Link href={'/'} className='text-[16px] hover:text-primary'>Home</Link></li>
  <li><Link href={'/support'} className='text-[16px] hover:text-primary'>Support</Link></li>
  <li><Link href={'/products'} className='text-[16px] hover:text-primary'>Products</Link></li>
  <li><Link href={'/about-us'} className='text-[16px] hover:text-primary'>About Us</Link></li>

  <li><Link href={'/contact-us'} className='text-[16px] hover:text-primary'>Contact Us</Link></li>
  </ul>

  </div>
  <div>
  <h4 className='text-[24px] font-semibold'>Subscribe</h4>
  <div className='mt-5 flex flex-col justify-start gap-5'>
    <input type='text' placeholder='Enter email' className='outline-none py-4 bg-transparent placeholder-white border-b border-b-white'/>
    <button className='btn'>Subscribe</button>
  </div>
  </div>
    </div>
   </div>
   <div className='bg-[#ffffff] '>
    <p className='text-[16px] text-[#04233b] text-center mx-4 py-6'>© 2024 All Rights Reserved By HDD India</p>
   </div>
    </div>
  )
}

export default Footer
