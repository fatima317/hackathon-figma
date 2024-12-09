import React from 'react';
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";

const MiddleTwo = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-[#F2F0FF] px-4 sm:px-8 lg:px-16">
      {/* Container for the product image and details */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-16">
        
        {/* Product Image Section */}
        <div className="mb-4 max-w-xs mx-auto lg:max-w-md">
          <Image
            src="/Group 153.png"
            alt="Italian Sofa"
            width={558}
            height={550}
            className="mx-auto"
          />
        </div>
        
        {/* Product Features Section */}
        <div className="flex flex-col justify-between space-y-4 max-w-md mx-auto lg:max-w-xs">
          <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-brandPrimary2">
            Unique Features Of Latest & Trending Products
          </h3>
          
          {/* Feature List */}
          <p className="flex items-center text-brandPrimary3 text-sm font-medium gap-2">
            <Circle className="stroke-brandPrimary1 w-2 h-2 fill-brandPrimary1" />
            All frames constructed with hardwood solids and laminates
          </p>
          
          <p className="flex items-start text-brandPrimary3 text-sm font-medium gap-2">
            <Circle className="stroke-brandPrimary2 w-2 h-2 fill-brandPrimary2 mt-1" />
            Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails
          </p>
          
          <p className="flex items-center text-brandPrimary3 text-sm font-medium gap-2">
            <Circle className="stroke-[#2BF5CC] w-2 h-2 fill-[#2BF5CC]" />
            Arms, backs, and seats are structurally reinforced
          </p>
          
          {/* Add to Cart Button and Product Info */}
          <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
            <Button
              className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm hover:bg-brandPrimary1"
              style={{ width: "157px", height: "45px" }}
            >
              Add To Cart
            </Button>

            {/* Product Info */}
            <div>
              <p className="text-xs font-bold text-brandPrimary2">B&B Italian Sofa</p>
              <p className="text-xs font-bold text-brandPrimary2">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleTwo;
