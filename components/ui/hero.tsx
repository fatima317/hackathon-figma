import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Column: Lamp Image */}
      <div className="md:w-1/4 flex justify-center items-start relative mb-10 md:mb-0">
        <div className="absolute top-[-250px] left-[-40px] z-10">
          <Image
            src="/lamp.png"
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/2 max-w-[644px] text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-sm font-medium mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-sm mt-6"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative mt-10 md:mt-0">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl">
          <Image
            src="/sofa promotional header.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
