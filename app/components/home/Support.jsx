import React from 'react';
import service from '@/public/service.svg';
import sparesupport from '@/public/spareparts.svg';
import training from '@/public/training.svg';
import s3 from '@/public/s3.png';

import Image from 'next/image';

const Support = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <h3 className='text-[#0c0c0c] text-[32px] font-bold mt-[80px] mb-[20px]'>
          Technical <span className='text-primary'>Support</span>
        </h3>
        <p className='text-[16px] font-[400] mt-5'>{`Our value is to provide the best level of services, whether that is after sales or pre sales. We’ve always been, are and will be commited to serve our customer with the best we can. Any product sold by us is our responsibility until your satisfaction. We have well equipped workshop for repairing machines. While repairing the machines we use only genuine spare parts so that our customer achieve their satisfaction level to their best. We have trained staff for repairing and maintainace of machine. Our service team understands your needs and willing to give complete solution on your concern and make sure you get quick back up.`}</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-start place-content-start my-5 '>
          <div className='bg-[#f8f8f9] p-[20px] flex justify-center  gap-5 h-[100%]'>
            <div>
              <Image
                src={service}
                alt='Service Support'
                width={100}
                height={100}
              />
            </div>
            <div className='justify-start items-start gap-3 flex flex-col'>
              <h5 className='text-[20px] text-[#0c0c0c] font-bold'>
                SERVICE SUPPORT
              </h5>
              <p className='text-[16px]'>{`Reliable assistance available round-the-clock to ensure seamless operation and satisfaction with our services.`}</p>
            </div>
          </div>
          <div className='bg-[#f8f8f9] p-[20px] flex justify-center   gap-5 h-[100%]'>
            <div>
              <Image
                src={sparesupport}
                alt='Spare parts support'
                width={100}
                height={100}
              />
            </div>
            <div className='justify-start items-start gap-3 flex flex-col'>
              <h5 className='text-[20px] text-[#0c0c0c] font-bold'>
                SPARE PARTS SUPPORT
              </h5>
              <p className='text-[16px]'>{`Comprehensive spare parts support ensuring uninterrupted operation, backed by our commitment to quality, reliability, and timely delivery for your convenience.`}</p>
            </div>
          </div>
          <div className='bg-[#f8f8f9] p-[20px] flex justify-center   gap-5 h-[100%]'>
            <div>
              <Image
                src={s3}
                alt='Annual maintenance contract '
                width={100}
                height={100}
              />
            </div>
            <div className='justify-start items-start gap-3 flex flex-col'>
              <h5 className='text-[20px] text-[#0c0c0c] font-bold'>
                ANNUAL MAINTENANCE CONTRACTS
              </h5>
              <p className='text-[16px]'>{`Secure peace of mind with our comprehensive annual maintenance contracts, ensuring optimal performance and longevity for your valuable equipment.`}</p>
            </div>
          </div>
          <div className='bg-[#f8f8f9] p-[20px] flex justify-center  gap-5 h-[100%]'>
            <div>
              <Image src={training} alt='Icon' width={100} height={100} />
            </div>
            <div className='justify-start items-start gap-3 flex flex-col'>
              <h5 className='text-[20px] text-[#0c0c0c] font-bold'>TRAINING</h5>
              <p className='text-[16px]'>{`Elevate skills and knowledge with our tailored training programs, empowering you to maximize productivity and achieve success with confidence.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
