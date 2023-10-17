import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const NavBar = () => {
    const [nav, setNav] = useState (false)

    const handleNav = () => {
        setNav(!nav)
    } 

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#39ccb8]'>CRYPTO</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contract</li>
            <li className='p-4'>Home</li>
        </ul>
            
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#232D3F] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#232D3F]'}>
        <h1 className='w-full text-3xl font-bold text-[#39ccb8] m-4'>CRYPTO</h1>
            <ul className='pt-12 uppercase'>
            <li className='p-4 border-b-2 border-b-[#39ccb8]'>Company</li>
            <li className='p-4 border-b-2 border-b-[#39ccb8]'>Resources</li>
            <li className='p-4 border-b-2 border-b-[#39ccb8]'>About</li>
            <li className='p-4 border-b-2 border-b-[#39ccb8]'>Contract</li>
            <li className='p-4 border-b-2 border-b-[#39ccb8]'>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar