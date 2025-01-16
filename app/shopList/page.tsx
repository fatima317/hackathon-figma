import React from 'react';
import { Input } from '@/components/ui/input';
import { TbCategoryFilled } from 'react-icons/tb';
import {Circle, Heart, List, Search, ShoppingCart, Star} from 'lucide-react'
import Image from "next/image";
import {Button} from "@/components/ui/button"
import MiddleFour from '@/components/ui/middleFour';

const ShopList = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
         {/* Header Section */}
         <div className="bg-[#F6F5FF] h-auto py-10 md:py-20">
        <div className="flex flex-col items-start justify-center gap-2 px-4 md:px-16 lg:px-28 mx-3">
          <h2 className="text-[#101750] text-[24px] md:text-[28px] lg:text-[36px] font-bold">
            Shop List
          </h2>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Home
            </p>
            <p className="text-black font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Pages
            </p>
            <p className="text-brandPrimary1 font-medium text-[12px] md:text-[14px] lg:text-[16px]">
              Shop List
            </p>
          </div>
        </div>
      </div>
       {/* Product Toolbar */}
       <div className='max-w-[1171px] mx-auto md:ml-14 flex flex-col md:flex-row md:justify-between pt-20 pb-10 px-4 md:px-16'>
           {/* Title and Results */}
          <div>
          <h3 className='font-bold text-[22px] text-brandPrimary2 tracking-tight'>Ecommerce Accessories & Fashion item</h3>
          <p className='text-brandPrimary3 text-sm font-normal'>About 9,620 results (0.62 seconds)</p>
          </div>
          {/* Filters */}
          <div className='flex flex-wrap gap-4 md:gap-6 items-center'>
          <div className='flex items-center gap-2'>
            <span className='text-[#3F509E] text-[16px] font-medium'>Per Page:</span>
            <span><Input type='text' className='w-[55px] h-[25px] rounded-none' /></span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[#3F509E] text-[16px] font-medium'>Sort By:</span>
            <span><Input type='select' prefix='Best Match' className='w-[96px] h-[28px] rounded-none'/></span>
          </div>
          <div className='flex items-center gap-2'>
             <span className='text-[#3F509E] text-[16px] font-medium'>View:</span>
             <span><TbCategoryFilled className='stroke-brandPrimary2 h-6 w-5'/></span>
             <span><List className='stroke-brandPrimary2 h-6'/></span>
             <span><Input className='w-[162px] h-[30px] rounded-none'/></span>
          </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="max-w-[1141px] mx-auto flex flex-col gap-10 justify-center mb-36">
        {[
          { src: '/Rectangle 32.png', title: 'Accumsan tincidunt', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (1).png', title: 'In nulla', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (2).png', title: 'Vel sem', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (3).png', title: 'Porttitor cum', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (4).png', title: 'Nunc in', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (5).png', title: 'Vitae facilisis', price: '$52.00', discount: '$26.00' },
          { src: '/Rectangle 32 (6).png', title: 'Curabitur lectus', price: '$52.00', discount: '$26.00' },
        ].map((products, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 shadow-sm">
            {/* Image */}
         <div>
         <Image
         src={products.src}
         alt={products.title}
         width={313.63}
         height={217.56}
         className="object-contain" 
         />
         </div>
        {/* Product Details */}
        <div className="max-w-[591px] flex flex-col items-center md:items-start">
          {/* Product Title and Colors */}
        <div className='flex flex-wrap gap-4 mb-2'>
        <h3 className="text-[#151875] font-bold text-[16px] md:text-[19px]">{products.title}</h3>
        <div className='flex flex-wrap gap-1'>
        <Circle className='w-3 h-7 stroke-[#DE9034] fill-[#DE9034]'/>
        <Circle className='w-3 h-7 stroke-[#E60584] fill-[#E60584]'/>
        <Circle className='w-3 h-7 stroke-[#5E37FF] fill-[#5E37FF]'/>
        </div>
        </div>
        {/* Price and Ratings */}
        <div className='flex flex-wrap gap-4 mb-2 md:mb-4'>
              <span className='text-[#151875] font-medium text-xs md:text-[15px]'>{products.discount}</span>
              <span className='text-[#FB2448] font-medium text-xs md:text-[15px] line-through'>{products.price}</span>
              <div className='flex flex-wrap gap-1'>
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#FFC416]' />
              <Star className='w-4 h-5 stroke-transparent fill-[#B2B2B2]' />
              </div>
      </div>
      <p className='text-brandPrimary3 text-sm md:text-[17px] font-medium mb-2 md:mb-4 text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
      <div className='flex gap-10 mt-2'>
      <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <ShoppingCart className='w-4 h-4 stroke-brandPrimary2' />
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <Heart className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
              <Button
                 size="icon" variant="secondary" className='rounded-full bg-white'
                style={{
                  width: '20px',
                  height:'20px',
                }}
              >
               <Search className='w-4 h-4 stroke-brandPrimary2'/>
              </Button>
      </div>
      </div>
              </div>
              ))}
              </div>
        
        <MiddleFour />
        </section>
  );
};

export default ShopList; 