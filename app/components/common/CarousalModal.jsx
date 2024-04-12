'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    <div className='flex justify-center '>
      <div className='relative w-full overflow-hidden shadow-lg'>
        <div className='w-full relative  '>
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
    </div>
  );
};

const CarousalModal = ({ setShow, images, imgIndex }) => {
  return (
    <div
      class='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div class='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div class='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div class='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div class='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:h-[100vh]  '>
            <div class='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                onClick={() => setShow(false)}
                type='button'
                class='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
              >
                Close
              </button>
            </div>{' '}
            <div class='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div class='sm:flex sm:items-start'>
                <Slider
                  images={images.map((item) => item.img)}
                  imgIndex={imgIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarousalModal;
