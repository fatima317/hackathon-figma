import { ChevronDown, Heart, Mail, Phone, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-[#7E33E0] w-[1920] mx-auto md:flex items-center justify-center gap-44'>
      <div className='flex items-center justify-center gap-6 ml-10'>
       <div className='relative'>
       <p className='text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold gap-8'>
        <a href='mailto:mhhasanul@gmail.com' className='flex space-x-7'>
        <Mail className='absolute w-6 h-5'/>
        <span>mhhasanul@gmail.com</span>
        </a>
      </p>
       </div>
       <div className='relative'>
       <p className='text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold gap-8'>
       <a href='tel:(12345)67890' className='flex space-x-7'>
        <Phone className='absolute w-6 h-5'/>
        <span>(12345)67890</span>
       </a>
      </p>
       </div>
      </div>
      <div className='flex items-center justify-center gap-4 p-2'>
      <p className='flex items-center text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold'>
        English
        <ChevronDown className='w-6 h-5'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold'>
        USD
        <ChevronDown className='w-6 h-5'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold'>
        Login
        <User className='w-6 h-4 mb-1'/>
        </p>
        <p className='flex items-center text-[#F1F1F1] text-[14px] md:text-[16px] font-semibold gap-1'>
        Wishlist
        <Heart className='w-5 h-4 ' />
        </p>
        <p className='flex items-center text-[#F1F1F1] p-2'>
        <ShoppingCart className='w-6 h-5 ' />
        </p>
      </div>
    </div>
  )
}

export default Topbar