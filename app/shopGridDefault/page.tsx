import React from 'react';

const ShopGridDefault = () => {
    return (
      <section className='max-w-[1920px] mx-auto'>
        {/* Header Section */}
        <div className="max-w-[1920px] mx-auto bg-[#F6F5FF] h-[286px] py-20">
          <div className="flex flex-col items-start justify-center gap-2  px-8 md:px-52 m-2">
            <h2 className="text-[#101750] text-[28px] md:text-[36px] font-bold"> Shop Grid Default</h2>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-black font-medium text-[14px] md:text-[16px]">Home</p>
              <p className="text-black font-medium text-[14px] md:text-[16px]">Pages</p>
              <p className="text-brandPrimary1 font-medium text-[14px] md:text-[16px]"> Shop Grid Default</p>
            </div>
          </div>
        </div>
        </section>
  );
};

export default ShopGridDefault; 