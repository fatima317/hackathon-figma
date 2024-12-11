import React from 'react'
import { Button } from "@/components/ui/button"
import { Circle } from "lucide-react"
import Image from "next/image"

const MiddleTwo = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#F2F0FF]">
      {/* Flex container for product image and description */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-8 space-y-6 md:space-y-0" style={{ width: "100%" }}>
        
        {/* Product Image */}
        <div className="mb-4 md:mb-0 md:px-10 flex-shrink-0">
          <Image
            src="/Group 153.png"
            alt="Italian Sofa"
            width={558} // Fixed width for the image
            height={550} // Fixed height for the image
            className="mx-auto"
          />
        </div>
        
        {/* Product Description Section */}
        <div className="flex flex-col justify-between space-y-4 md:w-[492px]">
          {/* Title */}
          <h3 className="text-[28px] font-bold text-brandPrimary2">
            Unique Features Of Latest & Trending Products
          </h3>
          
          {/* Features List */}
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
          
          {/* Add to Cart & Price */}
          <div className="flex gap-2">
            <Button className="bg-brandPrimary1 text-white font-medium text-sm rounded shadow-sm  hover:bg-pink-600 transition-all duration-300"
              style={{ width: "157px", height: "45px" }}>
              Add To Cart
            </Button>
            
            {/* Product Name and Price */}
            <div>
              <p className="text-xs font-bold text-brandPrimary2">B&B Italian Sofa</p>
              <p className="text-xs font-bold text-brandPrimary2">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleTwo;
