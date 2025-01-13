import React, { useState } from 'react'
import { NavbarMenu } from '../../mockData/data'
import {MdComputer, MdMenu} from 'react-icons/md';
import {motion} from 'framer-motion';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
   <>
    <nav>
        <div className='container flex justify-between items-center py-6'>
            <div className='text-2xl flex items-center gap-2 font-bold'>
                <MdComputer className='text-3xl text-secondary'/>
                <p>E-Tutor</p>
            </div>

            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    {
                        NavbarMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.link} className='inline-block text-gray-600
                                    text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary duration-300 font-semibold'>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='hidden lg:block space-x-4'>
                <button className='font-semibold'>Sign In</button>
                <button className='text-white bg-secondary py-2 px-6 rounded-full'>Register</button>
            </div>

            <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                <MdMenu className='text-4xl text-secondary' />
            </div>
        </div>
    </nav>

    <MobileMenu isOpen={isOpen}/>
   </>
  )
}

export default Navbar