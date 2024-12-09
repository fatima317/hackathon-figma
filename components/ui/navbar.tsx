import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-100 p-4">
      <div className="max-w-[1177px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold text-[#0D0E43] tracking-wide mb-4 lg:mb-0 lg:ml-12">
          Hekto
        </h1>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-[#0D0E43]">
          <p className="relative text-[#FB2E86]">
            <Link href={"#"} className="text-xs font-medium">
              Home
              <ChevronDown className="absolute w-5 h-4 ml-7 top-1" />
            </Link>
          </p>
          <p>
            <Link href={"#"} className="text-xs font-medium">
              Pages
            </Link>
          </p>
          <p>
            <Link href={"#"} className="text-xs font-medium">
              Products
            </Link>
          </p>
          <p>
            <Link href={"#"} className="text-xs font-medium">
              Blog
            </Link>
          </p>
          <p>
            <Link href={"#"} className="text-xs font-medium">
              Shop
            </Link>
          </p>
          <p>
            <Link href={"#"} className="text-xs font-medium">
              Contact
            </Link>
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs">
            <Input
              type="search"
              placeholder="Search"
              className="bg-white text-black w-full h-8 pl-3 rounded-none border border-gray-300"
            />
            <Search className="absolute right-0 top-0 bottom-0 py-2 bg-[#FB2E86] text-white w-11 h-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
