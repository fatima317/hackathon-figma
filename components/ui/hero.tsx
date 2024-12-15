import Image from "next/image";
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className=" max-w-[1920] mx-auto bg-[#F2F0FF] h-[764px]">
      <div className="flex flex-wrap items-center">
        {/* Left Column: Lamp Image */}
      <div className="md:w-1/6 -mt-96">
          <Image
            src="/lamp.png"
            alt="Lamp"
            width={387}
            height={387}
            className="object-contain"
          />
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-2/5 max-w-[644px] text-left flex flex-col items-start justify-center mt-12">
        <p className="text-[16px] text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-[48px] font-bold text-black tracking-tight mt-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-[15px] font-medium mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <div className="mt-8">
          <Button className="bg-brandPrimary1 text-white font-semibold text-[17px] rounded shadow-sm hover:bg-pink-600 transition-all duration-300" 
          style={{ width: "163px", height: "50px" }}>Shop Now</Button>
        </div>

      </div>
      {/* Right Column: Chair Image */}
      <div className="w-full md:w-2/5 mt-20">
          <Image
            src="/sofa promotional header.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            objectFit="cover"
            className="object-contain"
          />
      </div>
      </div>
    </section>
  );
};

export default Hero;
