import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-[#7E33E0] w-full">
      {/* Main container with responsive flexbox */}
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between p-2 gap-4">
        {/* Left Section: Contact Information */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Email Section */}
          <div className="relative flex items-center gap-2">
            <Mail className="w-5 h-4 text-[#F1F1F1]" />
            <a
              href="mailto:mhhasanul@gmail.com"
              className="text-[#F1F1F1] text-xs font-semibold hover:underline"
            >
              mhhasanul@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="relative flex items-center gap-2">
            <Phone className="w-5 h-4 text-[#F1F1F1]" />
            <a
              href="tel:(12345)67890"
              className="text-[#F1F1F1] text-xs font-semibold hover:underline"
            >
              (12345) 67890
            </a>
          </div>
        </div>

        {/* Right Section: Options and Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* Language Selector */}
          <p className="flex items-center text-[#F1F1F1] text-xs font-semibold cursor-pointer">
            English
            <ChevronDown className="w-5 h-4 ml-1" />
          </p>

          {/* Currency Selector */}
          <p className="flex items-center text-[#F1F1F1] text-xs font-semibold cursor-pointer">
            USD
            <ChevronDown className="w-5 h-4 ml-1" />
          </p>

          {/* Login */}
          <p className="flex items-center text-[#F1F1F1] text-xs font-semibold cursor-pointer">
            Login
            <User className="w-5 h-4 ml-1" />
          </p>

          {/* Wishlist */}
          <p className="flex items-center text-[#F1F1F1] text-xs font-semibold gap-1 cursor-pointer">
            Wishlist
            <Heart className="w-4 h-3" />
          </p>

          {/* Shopping Cart */}
          <p className="flex items-center text-[#F1F1F1] p-2 cursor-pointer">
            <ShoppingCart className="w-5 h-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
