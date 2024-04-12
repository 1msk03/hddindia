import React from 'react';
import Card1 from '@/public/card1.png';
import Card2 from '@/public/card2.svg';
import Card3 from '@/public/card3.svg';
import Card4 from '@/public/card4.svg';
import Card5 from '@/public/card5.png';
import Card6 from '@/public/onsite.webp';
import Image from 'next/image';

const cardList = [
  {
    title: '24X7 availability of our engineers',
    des: 'Round-the-clock availability of our skilled engineers ensures timely support, providing peace of mind and uninterrupted operation for your products.',
    img: Card1,
  },
  {
    title: 'Highly skilled and Trained engineers and team',
    des: 'Our team comprises highly skilled and trained engineers dedicated to delivering top-notch solutions, ensuring excellence and reliability in every project.',
    img: Card2,
  },
  {
    title: 'Assistance regarding choice of the right product',
    des: 'Expert guidance on selecting the perfect product to meet your needs, ensuring informed decisions and optimal satisfaction with every purchase.',
    img: Card3,
  },
  {
    title: `Strong Service network for after sale services`,
    des: 'Our robust service network ensures comprehensive after-sale support, providing peace of mind and maximizing the lifespan and performance of your product.',
    img: Card4,
  },
  {
    title: 'Availablity Of Spare Parts',
    des: 'Ensure continued functionality with our readily available spare parts, guaranteeing quick replacements and minimizing downtime for your convenience and satisfaction.',
    img: Card5,
  },
  {
    title: 'On-site support',
    des: 'We also provide on site service support for our customers. Please feel free to contact us for your further queries.',
    img: Card6,
  },
];

const About = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <h3 className='text-[#0c0c0c] text-[32px] mt-[80px] mb-[20px] font-bold'>
          About <span className='text-primary'>Us</span>
        </h3>
        <p className='text-[16px] font-[400] mb-5'>{`We introduce ourselves as a firm dealing in Horizontal Directional Drilling Machine ( new & Used ), Locators (Digitrak), Hdd toolings & spares, Rock tools and servicing of hdd machines . we sell Used vermeer & Ditchwitch hdd machines throughout India. C B MACHINERY SOLUTIONS provide quality products & solutions to Horizontal Directional Drilling (HDD) industry in Domestic as well as in International market.`}</p>
        <p className='text-[16px] font-[400] mb-[60px]'>{`Our main office is located in Kishangarh, Rajasthan while our branch office is located in Bengaluru. The company possess a number of experienced technical employees who have vast knowledge of trenchless technology . All our engineers are self-trained and they have an excellent problem solving skill and a positive approach towards everything. With the help of these assets CBMS help their customers to find out the right solutions as per their project requirements and also help them use HDD equipment under the best possible conditions . We have the maximum stock of supporting material which enables the HDD machines to function smoothly. We are pleased to offer you our superior quality products (Machines, Drill Rods, Tracks, Drill tools and Parts for any Brand HDD, etc). We offer an end to end solution that enables horizontal directional drilling Rig Owners, Professional Companies and horizontal directional drilling contractors to offer their services efficiently & effectively. We ensure that we effectively and efficiently take care of the needs of the directional drilling machine Owners, corporate, trenchless drilling Professional Companies and rental Contractors.`}</p>
        <h4 className='text-[20px] text-[#0c0c0c] font-bold mb-7'>{`Best Reasons to Choose Us`}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10 mb-5'>
          {cardList.map((item, index) => {
            return (
              <div
                key={index}
                className='p-[20px] lg:h-[280px] h-full flex flex-col justify-start items-start gap-5 bg-white shadow-2xl rounded-md'
              >
                <div>
                  <Image
                    src={item.img}
                    alt=''
                    className='w-[73px] h-[75px] object-contain'
                  />
                </div>
                <h5 className='text-[16px] font-bold'>{item.title}</h5>
                <p className='text-[16px]'>{item.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
