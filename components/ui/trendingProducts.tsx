import Image from "next/image";

export default function TrendingProducts() {
  return (
    <section className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Section title */}
      <h2 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] mb-10">
        Trending Products
      </h2>

      {/* Products container */}
      <div className="flex flex-wrap items-center justify-center m-4 gap-6">
        {[
          { src: '/box for image.png', title: 'Cantilever chair', description: '$26.00' },
          { src: '/box for image (1).png', title: 'Cantilever chair', description: '$26.00' },
          { src: '/box for image (2).png', title: 'Cantilever chair', description: '$26.00' },
          { src: '/box for image (3).png', title: 'Cantilever chair', description: '$26.00' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-lg"
            // Ensures the width and height adjust for different screens
            style={{ width: "270px", height: "350px" }}
          >
            {/* Image container */}
            <div>
              <Image
                src={item.src}
                alt={item.title}
                width={247}
                height={244}
                className="mx-auto"
              />
            </div>

            {/* Product title */}
            <h3 className="text-[16px] font-semibold text-[#151875] mt-2">
              {item.title}
            </h3>

            {/* Product description */}
            <div className="flex gap-4 mb-8">
              <p className="text-[#151875] font-medium text-[14px] text-center">
                {item.description}
              </p>
              <span className="text-[#15187567] font-medium text-[14px] text-center">
                $42.00
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
