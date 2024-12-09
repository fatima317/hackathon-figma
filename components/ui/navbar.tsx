import { Input } from '@/components/ui/input'; // Importing the custom Input component
import { ChevronDown, Search } from 'lucide-react'; // Importing icons from Lucide React
import Link from 'next/link'; // Importing Link for client-side navigation
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-100 p-4">
      <div className="max-w-[1177px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold ml-4 md:ml-72 text-[#0D0E43] tracking-wide">
          Hekto
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8 text-[#0D0E43]">
          {/* Individual Navigation Link */}
          <p className="relative text-[#FB2E86]">
            <Link href="#" className="text-xs font-medium">
              Home
              {/* Dropdown Icon */}
              <ChevronDown className="absolute w-5 h-4 ml-7 top-1" />
            </Link>
          </p>
          <p>
            <Link href="#" className="text-xs font-medium">
              Pages
            </Link>
          </p>
          <p>
            <Link href="#" className="text-xs font-medium">
              Products
            </Link>
          </p>
          <p>
            <Link href="#" className="text-xs font-medium">
              Blog
            </Link>
          </p>
          <p>
            <Link href="#" className="text-xs font-medium">
              Shop
            </Link>
          </p>
          <p>
            <Link href="#" className="text-xs font-medium">
              Contact
            </Link>
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="bg-white text-black rounded-none h-8 w-full md:w-64 px-2"
            />
            <Search className="bg-[#FB2E86] absolute right-0 top-0 bottom-0 py-2 px-3 rounded-none stroke-white w-11 h-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
