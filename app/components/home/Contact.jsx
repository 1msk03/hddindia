"use client"
import React, { useState } from 'react'

const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '600px',
  };
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className='container mx-auto'>
      <h3 className="text-[#0c0c0c] text-[32px] font-bold mt-36 mb-8">CONTACT <span className="text-primary">US</span></h3>
       <div className='flex lg:flex-row flex-col justify-center items-start gap-10'>
        <div className='lg:w-[50%] w-full'>
            <p className='text-[16px] pb-5'>Er. Vipin Kabra : +91-9785111997</p>
            <p className='text-[16px] pb-5'>CA. Ankur Kabra : +91-9214507321</p>
            <p className='text-[16px] pb-5'>Email: caankurkabra@gmail.com</p>
            <p className='text-[16px] pb-5'>Company Email: info@hddindia.com</p>
            <p className='text-[16px] pb-5'>Head office Address: Khasra No. 369/360, Shree ji Industrial Area, Kali Doongri, Madanganj Kishangarh, Distt – Ajmer, Rajasthan, India</p>
            <p className='text-[16px] pb-5'>Branch office Address: Shed No. 12, 4 th stage, 4 th Main, 4 th Cross, woc road, rajaji nagar industrial town,Bangalore, Karnataka - 560044</p>
        </div>
        <div className='lg:w-[50%] w-full'>
        <form action="">
                <div className='mb-[25px] pl-[15px] outline-none flex justify-start items-center' style={{ 
           height: '50px',
          
          borderRadius: '10px',
          color: '#101010',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(37, 37, 37, 0.4666666667)',
        }}>
                  <input                value={name}
               onChange={(e) => setName(e.target.value)} type="text"  placeholder="Your Name" className='placeholder-[#04233b] outline-none' />
                </div>
                <div className='mb-[25px] pl-[15px] outline-none flex justify-start items-center' style={{ 
           height: '50px',
          
          borderRadius: '10px',
          color: '#101010',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(37, 37, 37, 0.4666666667)',
        }}>
                  <input                value={phone}
               onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number" className='placeholder-[#04233b] outline-none' />
                </div>
                <div className='mb-[25px] pl-[15px] outline-none flex justify-start items-center' style={{ 
           height: '50px',
          
          borderRadius: '10px',
          color: '#101010',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(37, 37, 37, 0.4666666667)',
        }}>
                  <input                value={email}
               onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='placeholder-[#04233b] outline-none' />
                </div>
                <div className='mb-[25px] pl-[15px] outline-none flex justify-start items-center' style={{ 
           height: '120px',
          
          borderRadius: '10px',
          color: '#101010',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(37, 37, 37, 0.4666666667)',
        }}>
                  <input                value={message}
               onChange={(e) => setMessage(e.target.value)} type="text" class="message-box" placeholder="Message" className='placeholder-[#04233b] outline-none' />
                </div>
                <div class="btn_box">
                  <button className='btn'>
                    SEND
                  </button>
                </div>
              </form>

        </div>
       </div>
       
       <div className='w-full mt-12 mb-20'> 
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20369/360,%20Shree%20ji%20Industrial%20Area,%20Kali%20Doongri,%20Madanganj%20Kishangarh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>


      </div>
    </div>
  )
}

export default Contact
