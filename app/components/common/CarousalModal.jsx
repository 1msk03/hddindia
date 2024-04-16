'use client';
import React, { useEffect, useState, useRef  } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
const Slider = ({ images, imgIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(imgIndex);

  const nextSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, images]);

  return (
    <div className='relative'>
      <div className='w-full relative'>
        <Image
          src={images ? images[currentSlide] : null}
          alt={`Slide ${currentSlide + 1}`}
          className='object-cover md:h-[85vh]'
        />
      </div>
      {images && images.length > 1 && (
        <div className='absolute top-0 flex h-full w-full items-center justify-between'>
          <button
            onClick={prevSlide}
            className='rounded-full bg-primary p-3 text-white hover:bg-[#000000] hover:text-gray-300 focus:outline-none'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className='rounded-full bg-primary p-3 text-white hover:bg-[#000000] hover:text-gray-300 focus:outline-none'
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

const CarousalModal = ({ setShow, images, imgIndex }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShow]);
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75'>
      <div ref={modalRef} className='bg-white  relative w-[600px] rounded-lg'>
      <div className='flex absolute -top-5 lg:-right-5  right-2 '>
          <button
            onClick={() => setShow(false)}
            className='    flex-[1 0 0] border  bg-black text-white rounded-lg  shadow-md  p-[6px]'
          >
            <IoClose className='text-[25px] font-bold'/>
          </button>
        </div>
        <div className='p-5'>
          <Slider images={images.map((item) => item.img)} imgIndex={imgIndex} />
        </div>
      </div>
    </div>
  );
};

export default CarousalModal;
