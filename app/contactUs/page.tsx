import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <section className='max-w-[1920px] mx-auto'>
      {/* Header Section */}
      <div className="max-w-[1920px] mx-auto bg-[#F6F5FF] h-[286px] py-20">
        <div className="flex flex-col items-start justify-center gap-2  px-8 md:px-52 m-2">
          <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold">Contact Us</h2>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-black font-medium text-[14px] md:text-[16px]">Home</p>
            <p className="text-black font-medium text-[14px] md:text-[16px]">Pages</p>
            <p className="text-brandPrimary1 font-medium text-[14px] md:text-[16px]">Contact us</p>
          </div>
        </div>
      </div>
        <div className="max-w-[1191px] h-[490px] mx-auto grid grid-cols-1 md:grid-cols-2 py-10 gap-4">
          {/* Information About Us */}
          <div className="flex flex-col items-start mt-4 ml-32">
            <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold mb-4">Information About us</h2>
            <p className="text-[13px] font-semibold max-w-[550px] text-brandPrimary3 mb-6 tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada
              diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            <div className="flex flex-row gap-4 mb-6">
              <Circle className="fill-[#5625DF] w-[25px] h-[25px] stroke-none" />
              <Circle className="fill-brandPrimary1 w-[25px] h-[25px] stroke-none" />
              <Circle className="fill-[#37DAF3] w-[25px] h-[25px] stroke-none" />
            </div>
          </div>

          {/* Contact Way */}
          <div className="mt-4 ml-16">
            <h2 className="text-[#101750] text-[36px] font-bold mb-6">Contact Way</h2>
            <div className="flex flex-wrap max-w-[489px] items-start gap-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#5625DF] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">Tel: 877-67-88-99</p>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-brandPrimary1 w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">Support Forum</p>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">For over 24hr</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#FFB265] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">20 Margaret st, London</p>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Circle className="fill-[#1BE982] w-[45px] h-[45px] stroke-none" />
                <div>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">Free standard shipping</p>
                  <p className="text-[13px] font-semibold text-brandPrimary3 tracking-tight">on all orders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-2 mt-16 ml-32">
            <h2 className="text-[#101750]  text-[28px] md:text-[36px] font-bold">Get In Touch</h2>
            <p className="text-[13px] font-semibold text-brandPrimary3 max-w-[500px] tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae
              eget dolor los vitae lobortis quis bibendum quam.
            </p>
          </div>
        </div>
        {/* Contact Form and Image Section */}
        <div className='flex flex-row'>
           {/* Contact Form */}
        <div className='max-w-[534px] h-[414px] flex flex-col py-2 ml-52'>
          <div className='flex flex-wrap gap-6 mb-6'>
          <Input
          type='text'
          placeholder='Your Name*'
          className='w-full md:w-[255px] h-[45px]'
           />
           <Input
          type='email'
          placeholder='Your E-mail'
          className='w-full md:w-[255px] h-[45px]'
           />
          </div>
          <Input
          type='textarea'
          placeholder='Subject*'
          className='w-full h-[45px] mb-6'
           />
            <Input
          type='textarea'
          placeholder='Type Your Messege*'
          className='w-full h-[116px] mb-6'
           />
          <Button  className="bg-brandPrimary1 text-white font-medium text-[16px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300" 
          style={{ width: "157px", height: "44px" }}>Send Mail</Button>
        </div>
         {/* Image Section */}
        <div className='flex flex-wrap'>
          <div className='-mt-36 px-10 -ml-4'>
          <Image
          src={"/Group 124.png"}
          alt='picture'
          width={723}
          height={692} 
          />
          </div>
        </div>
        </div>
    </section>
  );
};

export default ContactUs;
