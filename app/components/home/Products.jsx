'use client';

import React, { useState } from 'react';
import Product1 from '../../../public/Hdd1.png';
import Product2 from '../../../public/Hdd2.png';
import Product3 from '../../../public/Hdd3.png';
import Product4 from '../../../public/Hdd4.png';
import Product5 from '../../../public/Digitrak1.png';
import Product6 from '../../../public/Digitrak2.png';
import Product7 from '../../../public/Digitrak3.png';
import Product8 from '../../../public/Drill1.png';
import Product9 from '../../../public/Drill2.png';
import Product10 from '../../../public/Drill3.png';
import Product11 from '../../../public/Drill4.png';
import Product12 from '../../../public/Tools1.png';
import Product13 from '../../../public/Tools2.png';
import Product14 from '../../../public/Tools3.png';
import Product15 from '../../../public/Tools4.png';
import Product16 from '../../../public/Tools5.png';
import Product17 from '../../../public/Tools6.png';
import Product18 from '../../../public/Rock1.png';
import Product19 from '../../../public/Rock2.png';
import Product20 from '../../../public/Rock3.png';
import Product21 from '../../../public/Rock4.png';
import Product22 from '../../../public/Rock5.png';
import Product23 from '../../../public/Rock6.png';
import Product24 from '../../../public/Rock7.png';

import Image from 'next/image';
import CarousalModal from '../common/CarousalModal';

const Products = () => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [imagesData, setImagesData] = useState(0);

  const imgData = [
    [
      { img: Product1, alt: 'HDD Machine' },
      { img: Product2, alt: 'HDD Machine' },
      { img: Product3, alt: 'HDD Machine' },
      { img: Product4, alt: 'HDD Machine' },
    ],
    [
      { img: Product5, alt: 'Digitrak' },
      { img: Product6, alt: 'Digitrak' },
      { img: Product7, alt: 'Digitrak' },
    ],
    [
      { img: Product8, alt: 'Drill rods' },
      { img: Product9, alt: 'Drill rods' },
      { img: Product10, alt: 'Drill rods' },
      { img: Product11, alt: 'Drill rods' },
    ],
    [
      { img: Product12, alt: 'Tools and Spares' },
      { img: Product13, alt: 'Tools and Spares' },
      { img: Product14, alt: 'Tools and Spares' },
      { img: Product15, alt: 'Tools and Spares' },
      { img: Product16, alt: 'Tools and Spares' },
      { img: Product17, alt: 'Tools and Spares' },
    ],
    [
      { img: Product18, alt: 'Rock Tools' },
      { img: Product19, alt: 'Rock Tools' },
      { img: Product20, alt: 'Rock Tools' },
      { img: Product21, alt: 'Rock Tools' },
      { img: Product22, alt: 'Rock Tools' },
      { img: Product23, alt: 'Rock Tools' },
      { img: Product24, alt: 'Rock Tools' },
    ],
  ];

  return (
    <div>
      {show && (
        <CarousalModal
          setShow={setShow}
          images={imgData[index]}
          imgIndex={imgIndex}
        />
      )}
      <div className='container mx-auto'>
        <h3 className='text-[#0c0c0c] text-[32px] mt-[80px] mb-[20px] font-bold'>
          Our <span className='text-primary'>Products</span>
        </h3>

        <div id='hdd' className=''>
          <h4 className='text-[20px] text-[#0c0c0c] font-bold mb-5'>{`HDD Machines`}</h4>
          <p className='text-[16px] font-[400] pb-5'>{`We sell used vermeer & Ditchwitch hdd machines in Domestic as well as in International market. We sell refurbished HDD machinery We import these machines and refurbish it in India by our technically well trained staff. We have a well equipped workshop in 30000 Sq. Ft. for this purpose. We import all models of Vermeer hdd machine including Vermeer D24x40A, Vermeer D24x40 Series II, Vermeer 36×50 series II, Vermeer 100 x 120 series II. We keep various type of hdd machines in ready stock. Photos of our refurbished machines are:`}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
            {imgData[0].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0px 2px 2px 2px rgba(94, 93, 93, 0.5960784314)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShow(true);
                    setIndex(0);
                    setImgIndex(index);
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className=' w-full h-[250px] object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div id='Digitrak'>
          <h4 className='text-[20px] text-[#0c0c0c] font-bold mt-20 mb-5'>{`Digitrak`}</h4>
          <p className='text-[16px] font-[400] pb-5'>{`We are authorized dealer of DCI ( Digitrak) in India. We sell all digitrak, transmitter. Batteries, charger. In case of any DCI product repairing we assist buyer in repairing from DCI. DIgitrak comes in three models:`}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
            {imgData[1].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0px 2px 2px 2px rgba(94, 93, 93, 0.5960784314)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShow(true);
                    setIndex(1);
                    setImgIndex(index);
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className=' w-full h-[250px] object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div id='Drill'>
          <h4 className='text-[20px] text-[#0c0c0c] font-bold mt-20 mb-5'>{`Drill rods`}</h4>
          <p className='text-[16px] font-[400] pb-5'>{`We are selling single piece forged drill rods . Our drill rod lasts longer and costs less. We are selling drill rods for Vermeer, Ditchwitch and all the Chinese machines. We keep these rods in ready stock. Please call us for further details.`}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
            {imgData[2].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0px 2px 2px 2px rgba(94, 93, 93, 0.5960784314)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShow(true);
                    setIndex(2);
                    setImgIndex(index);
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className=' w-full h-[250px] object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id='Tools'>
          <h4 className='text-[20px] text-[#0c0c0c] font-bold mt-20 mb-5'>{`Tools & Spares`}</h4>
          <p className='text-[16px] font-[400] pb-5'>{`We sale all the relevant genuine parts needed to keep your HDD Machines performing and drive your productivity. Our product range includes all type of motors, pump, seal kits, switches, e.t.c. We keep the stock of the majority of the replacement parts you may need. If the part you require is not available then we can arrange it for you in a couple of days. We also sale the toolings required for all the hdd machines with our brand name CB. Our tools are economical in cost and good in life. These tools include transmitter housing, starter rod, hex collar, adopter, Drill bit ( different types ) , Jaw set, subsaver, drivecheck, Link , pin , Chinese fingers ( all types), Reamers, e.t.c.`}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
            {imgData[3].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0px 2px 2px 2px rgba(94, 93, 93, 0.5960784314)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShow(true);
                    setIndex(3);
                    setImgIndex(index);
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className=' w-full h-[250px] object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id='Rock'>
          <h4 className='text-[20px] text-[#0c0c0c] font-bold mt-20 mb-5'>{`Rock Tools`}</h4>
          <p className='text-[16px] font-[400] pb-5'>{`We sale all the required rock tools for HDD working. We are importing rock reamers, mud motors, roller cones and other required items. We can also customize reamers as per the need of customers. In reamers we can use various sizes of cones as well different type of IADC cones, we help customer in purchase decision considering these factors. In case of any requirement please let us know.`}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
            {imgData[4].map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0px 2px 2px 2px rgba(94, 93, 93, 0.5960784314)',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setShow(true);
                    setIndex(4);
                    setImgIndex(index);
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className=' w-full h-[250px] object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-[16px] font-[400] pt-20 pb-5'>{`We also provide on site service support for our customers. Please feel free to contact us for your further queries.`}</p>
      </div>
    </div>
  );
};

export default Products;
