import React from "react";
import Image from "next/image";

const MiddleOne: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-[#151875] mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { src: "/free-delivery 1.png", title: "Free Delivery" },
            { src: "/cashback 1.png", title: "Cashback" },
            { src: "/premium-quality 1.png", title: "Premium Quality" },
            { src: "/24-hours-support 1.png", title: "24/7 Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-md flex flex-col items-center justify-center"
              style={{ width: "270px", height: "320px" }}
            >
              <div className="mb-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={65}
                  height={65}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#151875]">
                {item.title}
              </h3>
              <p className="text-[#15187567] text-sm mt-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section */}
      <section className="bg-[#F2F0FF] h-[579px]">
        <div className="p-[64px] flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className="flex-1">
            {/* Product Image */}
            <img
              src="/sofa.jpg"
              alt="B&B Italian Sofa"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleOne;
