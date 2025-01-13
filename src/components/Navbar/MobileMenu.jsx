import React from 'react'
import {motion, AnimatePresence, animate} from 'framer-motion';
import { NavbarMenu } from '../../mockData/data';

const MobileMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
      {
        isOpen && (
          <motion.div
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -100}}
          transition={{duration: 0.3}}
          >
            <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-10'>
                {
                  NavbarMenu.map((item) => {
                      return (
                          <li key={item.id}>
                              <a href={item.link} className='hover:text-black'>
                                  {item.title}
                              </a>
                          </li>
                      )
                  })
                  }
              </ul>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export default MobileMenu