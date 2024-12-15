import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      {/* Footer Section */}
      <footer className='h-[450px] bg-[#EEEFFB] text-[#8A8FB9]'>
        <div className='flex flex-col lg:flex-row gap-x-20 mt-12 pt-20 pl-8 lg:pl-28'>
          
          {/* Footer Column 1: Logo, Newsletter, Contact Info */}
          <div className='space-y-6'>
            <h1 className='text-[38px] font-bold text-black -mt-1'>
              <Link href="">Hekto</Link>
            </h1>
            <div className='relative'>
              <Input
                placeholder='Enter Email Address'
                type='text'
                className='h-[36px] w-[287px] placeholder:text-[#8A8FB9] placeholder:text-[16px] bg-white rounded-sm'
              />
              <Button className='absolute right-6 top-0 bottom-0 py-2 bg-[#FB2E86] text-white text-[16px] rounded-sm font-medium w-[105px] h-[36px]'>
                Sign Up
              </Button>
            </div>
            <div className='text-[16px] text-[#8A8FB9]'>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          
          {/* Footer Column 2: Categories */}
          <div className='space-y-8'>
            <h1 className='text-[22px] text-black font-semibold'>Categories</h1>
            <ul className='text-[16px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">Laptops & Computers</Link></li>
              <li><Link href="">Cameras & Photography</Link></li>
              <li><Link href="">Smart Phones & Tablets</Link></li>
              <li><Link href="">Video Games & Consoles</Link></li>
              <li><Link href="">Waterproof Headphones</Link></li>
            </ul>
          </div>
          
          {/* Footer Column 3: Customer Care */}
          <div className='space-y-8'>
            <h1 className='text-[22px] text-black font-semibold'>Customer Care</h1>
            <ul className='text-[16px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">My Account</Link></li>
              <li><Link href="">Discount</Link></li>
              <li><Link href="">Returns</Link></li>
              <li><Link href="">Orders History</Link></li>
              <li><Link href="">Order Tracking</Link></li>
            </ul>
          </div>
          
          {/* Footer Column 4: Pages */}
          <div className='space-y-8'>
            <h1 className='text-[22px] text-black font-semibold'>Pages</h1>
            <ul className='text-[16px] text-[#8A8FB9] space-y-4'>
              <li><Link href="">Blog</Link></li>
              <li><Link href="">Browse The Shop</Link></li>
              <li><Link href="">Category</Link></li>
              <li><Link href="">Pre-Built Pages</Link></li>
              <li><Link href="">Visual Composer Elements</Link></li>
              <li><Link href="">WooCommerce Pages</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Footer Bottom: Social Media and Copyright */}
        <div className='max-w-[1920px] mx-auto bg-[#E7E4F8] flex items-center justify-between p-4 mt-20'>
          <div className='flex items-center justify-center'>
            <p className='text-xs text-[#9DA0AE] ml-8 lg:ml-32'>
              ©Webecy - All Rights Reserved
            </p>
          </div>
          <div className='flex items-center gap-2 mr-40'>
            <p>
              <a href='https://www.facebook.com/' target='blank'>
                <FaSquareFacebook className='text-[#151875] rounded-full text-3xl' />
              </a>
            </p>
            <p>
              <a href='https://www.instagram.com/' target='blank'>
                <FaInstagramSquare className='text-[#151875] rounded-full text-3xl' />
              </a>
            </p>
            <p>
              <a href='https://www.twitter.com/' target='blank'>
                <FaTwitterSquare className='text-[#151875] rounded-full text-3xl' />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
