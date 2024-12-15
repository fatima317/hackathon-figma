import React from "react";
import Image from 'next/image';
import {Button} from "@/components/ui/button"
import {Heart, Search, ShoppingCart } from 'lucide-react'
const FeaturedProducts = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Section heading */}
        <h2 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] mb-10">
          Featured Products
        </h2>
        {/* Main container for product cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 px-4">
        {[
          { src: '/image 1168.png', title: 'Cantilever chair', description: '$42.00' },
          { src: '/image 1.png', title: 'Cantilever chair', description: '$42.00' },
          { src: '/image 1169.png', title: 'Cantilever chair', description: '$42.00' },
          { src: '/image 3 (1).png', title: 'Cantilever chair', description: '$42.00' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between shadow-lg bg-no-repeat bg-top p-4 rounded-md transition-transform duration-300 hover:scale-105"
            style={{
              width: '270px',
              height: '361px',
              backgroundImage: `url('/Rectangle 91.png')`,
              backgroundSize: "270px 236px", // Adjust the size of the background image
                backgroundColor:  index === 1 ? '#2F1AC4' : 'none',
            }}
          >
            {/* Action buttons (visible only on hover for second product) */}
            <div
              className={`flex gap-2 mr-auto transition-all ${
                index === 1 ? "visible" : "invisible"
              }`}
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-[#EEEFFB] w-[30px] h-[30px]"
              >
                <ShoppingCart className="w-4 h-4 stroke-[#2F1AC4]" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full w-[30px] h-[30px]"
              >
                <Heart className="w-4 h-4 stroke-[#1DB4E7]" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full w-[30px] h-[30px]"
              >
                <Search className="w-4 h-4 stroke-[#1DB4E7]" />
              </Button>
            </div>
             {/* Product image */}
            <div>
              <Image
                src={item.src}
                alt={item.title}
                width={150}
                height={150}
                objectFit="contain"
                className="mx-auto"
                style={{
                  width: index === 3 ? '216px' : '140px',
                  height: index === 0 || index === 2 ? '160px' : '150px', 
                }}
              />
            </div>
             {/* View Details Button (only visible for second product) */}
              <Button
                className="text-white bg-[#08D15F] text-[10px] rounded-sm hover:bg-green-500 transition-all duration-300"
                style={{
                  width: '94px',
                  height:'29px',
                  display: index === 1 ? 'block' : 'none'
                }}
              >
                View Details
              </Button>
              {/* Product Title */}
            <h3 className="text-[18px] font-bold text-brandPrimary1 mt-6" style={{color: index===1? '#FFFFFF' : '#FB2E86'}}>
              {item.title}
            </h3>
             {/* Divider Image */}
            <Image
                src={index===1 ? "/Group 141 (1).png":"/Group 141.png"}
                alt={"bar"}
                width={52}
                height={4}
                className="mx-auto"
              />

             {/* Product Description */}
            <p className="text-[#151875] font-medium text-[14px] text-center mt-2" style={{color: index===1? '#FFFFFF' : '#151875'}}>Code - Y523201</p>
            <p className="text-[#151875] font-medium text-[14px] text-center" style={{color: index===1? '#FFFFFF' : '#151875'}}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;