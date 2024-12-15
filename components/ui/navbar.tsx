import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='max-w-[1920px] mx-auto py-4'>
        <div className='max-w-[1177px] h-[40px] flex items-center justify-center gap-8'>
            <h2 className='text-[34px] font-bold text-[#0D0E43] ml-48'>Hekto</h2>
            <div className='flex flex-wrap items-center justify-center gap-6 text-[#0D0E43] '>
                <p className='relative text-[#FB2E86]'> 
                <Link href={"#"} className='text-[16px] font-medium'>
                Home
                <ChevronDown className='absolute w-5 h-4 ml-10 top-1'/>
                </Link>
                </p>
                <p>
                <Link href={"#"} className='text-[16px] font-medium'>Pages</Link>
                </p>
                <p>
                <Link href={"#"} className='text-[16px] font-medium'>Products</Link>
                </p>
                <p>
                <Link href={"#"} className='text-[16px] font-medium'>Blog</Link>
                </p>
                <p>
                <Link href={"#"} className='text-[16px] font-medium'>Shop</Link>
                </p>
                <p>
                <Link href={"#"} className='text-[16px] font-medium'>Contact</Link>
                </p>
            </div>
            <div className='hidden md:flex ml-16'> 
            <div className='relative' style={{width:"317px", height:"40px"}}>
                <Input 
                type='search' 
                className='bg-white text-black rounded-none'/>
                <Search className=' bg-[#FB2E86] absolute right-0 top-0 bottom-0 py-2 rounded-none stroke-white w-12 h-9 '/>
            </div>
        </div>
        </div>
    </nav>
  )
}
  
export default Navbar