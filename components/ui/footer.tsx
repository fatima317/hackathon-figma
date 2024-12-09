import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <footer className='bg-[#EEEFFB] text-[#8A8FB9]'>
        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 mt-12 pt-20 px-6 lg:pl-28'>
          {/* Brand and Newsletter Section */}
          <div className='space-y-6'>
            <h1 className='text-[32px] font-bold text-black'>
              <Link href="">Hekto</Link>
            </h1>
            <div className='relative'>
              {/* Newsletter Input */}
              <Input
                placeholder='Enter Email Address'
                type='text'
                className='h-[36px] w-full lg:w-[287px] placeholder:text-[#8A8FB9] placeholder:text-[12px] bg-white rounded-sm'
              />
              <Button className='absolute right-0 top-0 bottom-0 lg:right-6 py-2 bg-[#FB2E86] text-white text-[12px] rounded-sm font-medium w-[105px] h-[36px]'>
                Sign Up
              </Button>
            </div>
            <div className='text-[12px] text-[#8A8FB9]'>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories Section */}
          <div className='space-y-8'>
            <h1 className='text-[16px] text-black font-semibold'>Categories</h1>
            <ul className='text-[12px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">Laptops & Computers</Link></li>
              <li><Link href="">Cameras & Photography</Link></li>
              <li><Link href="">Smart Phones & Tablets</Link></li>
              <li><Link href="">Video Games & Consoles</Link></li>
              <li><Link href="">Waterproof Headphones</Link></li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className='space-y-8'>
            <h1 className='text-[16px] text-black font-semibold'>Customer Care</h1>
            <ul className='text-[12px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">My Account</Link></li>
              <li><Link href="">Discount</Link></li>
              <li><Link href="">Returns</Link></li>
              <li><Link href="">Orders History</Link></li>
              <li><Link href="">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className='space-y-8'>
            <h1 className='text-[16px] text-black font-semibold'>Pages</h1>
            <ul className='text-[12px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">Blog</Link></li>
              <li><Link href="">Browse The Shop</Link></li>
              <li><Link href="">Category</Link></li>
              <li><Link href="">Pre-Built Pages</Link></li>
              <li><Link href="">Visual Composer Elements</Link></li>
              <li><Link href="">WooCommerce Pages</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='bg-[#E7E4F8] flex flex-col md:flex-row items-center justify-between p-4 mt-12'>
          {/* Copyright Text */}
          <p className='text-xs text-[#9DA0AE] mb-4 md:mb-0'>
            ©Webecy - All Rights Reserved
          </p>

          {/* Social Media Links */}
          <div className='flex gap-2'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <FaSquareFacebook className='text-[#151875] text-xl' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <FaInstagramSquare className='text-[#151875] text-xl' />
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
              <FaTwitterSquare className='text-[#151875] text-xl' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
