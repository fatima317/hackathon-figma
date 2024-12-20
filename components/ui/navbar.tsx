'use client';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);

  return (
    <nav className="max-w-[1920px] mx-auto py-4">
      <div className="max-w-[1177px] h-[40px] md:flex items-center justify-center gap-20">
        <h2 className="text-[34px] font-bold text-[#0D0E43] ml-28">Hekto</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[#0D0E43]">
          {/* Home Dropdown */}
          <div
            className="relative flex items-center text-brandPrimary1"
          >
            {/* Home Link */}
            <p
              onClick={() => router.push('/')}
              className="text-[16px] font-medium cursor-pointer"
            >
              Home
            </p>

            {/* Chevron for Dropdown */}
            <ChevronDown
              className="w-5 h-4 cursor-pointer"
              onClick={() => setShowHomeDropdown(!showHomeDropdown)}
            />

            {/* Dropdown Menu */}
            {showHomeDropdown && (
              <div className="absolute top-full mt-2 bg-slate-50 shadow-lg rounded-none w-44 px-1">
                <Link
                  href="/myAccount"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  My Account
                </Link>
                <Link
                  href="/shopList"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                 Shop List
                </Link>
                <Link
                  href="/shopLeftSidebar"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                 Shop Left Sidebar
                </Link>
                <Link
                  href="/shoppingCurt"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Shopping Cart
                </Link>
                <Link
                  href="/orderCompleted"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Order Completed
                </Link>
                <Link
                  href="/hektoDemo"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Hekto Demo
                </Link>
                <Link
                  href="/singleBlog"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  Single Blog
                </Link>
                <Link
                  href="/about"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block py-2 text-[14px] font-semibold text-[#0D0E43] hover:bg-pink-300"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Pages */}
          <p>
            <Link href="/notFound" className="text-[16px] font-medium">
              Pages
            </Link>
          </p>

          {/* Products */}
          <p>
            <Link href="/productDetails" className="text-[16px] font-medium">
              Products
            </Link>
          </p>

          {/* Blog */}
          <p>
            <Link href="/blogPage" className="text-[16px] font-medium">
              Blog
            </Link>
          </p>

          {/* Shop */}
          <p>
            <Link href="/shopGridDefault" className="text-[16px] font-medium">
              Shop
            </Link>
          </p>

          {/* Contact */}
          <p>
            <Link href="/contactUs" className="text-[16px] font-medium">
              Contact
            </Link>
          </p>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex ml-24">
          <div className="relative" style={{ width: '317px', height: '40px' }}>
            <Input type="search" className="bg-white text-black rounded-none" />
            <Search className="bg-[#FB2E86] absolute right-0 top-0 bottom-0 py-2 rounded-none stroke-white w-12 h-9" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
