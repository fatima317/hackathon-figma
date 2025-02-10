import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
const TopCategories = () => {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      <h2 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] mb-10">
        Top Categories
      </h2>
      <div className="flex flex-wrap items-center justify-center m-4">
        {[
          { src: '/image 20.png', title: 'Mini LCW Chair', description: '$56.00' },
          { src: '/image 1168.png', title: 'Mini LCW Chair', description: '$56.00' },
          { src: '/image 1171.png', title: 'Mini LCW Chair', description: '$56.00' },
          { src: '/image 20.png', title: 'Mini LCW Chair', description: '$56.00' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            style={{
              width: '269px',
              height: '345px',
              backgroundImage: index === 0 ?`url('/top categories.png'),url('/top categories2.png')` 
                  : `url('/top categories.png')` , // No background for other images
              backgroundSize: index === 0 ? "262px, 269px" : "269px", // Reduce size of the first background image
              backgroundPosition:
                index === 0 ? 'right top' : 'none', // Focus the first background image from left bottom
              backgroundRepeat: "no-repeat", // Prevent background repeat
              

            }}
          >
            {/* Display Image */}
            <div className="">
              <Image
                src={item.src}
                alt={item.title}
                width={158}
                height={157}
                className="mx-auto"
                style={{
                  width: index === 1 || index === 2 ? '149px' : '158px', 
                  height: index === 1 || index === 2 ? '149px' : '157px',
                }}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                className="text-white bg-[#08D15F] text-[10px] rounded-sm hover:bg-green-500 transition-all duration-300"
                style={{
                  width: '94px',
                  height:'29px',
                  display: index === 0 ? 'block' : 'none'
                }}
              >
                View Shop
              </Button>
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-semibold text-[#151875] mt-12">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#151875] font-semibold text-[14px] mt-2 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
