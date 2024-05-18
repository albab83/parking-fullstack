import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiArchive } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
   const [nav, setNav] = useState(false)

   // Toggle function to handle the navbar's display
   const handleNav = () => {
      setNav(!nav)
   }

   return (
      <div className="bg-black flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
         {/* Logo */}
         <h1 className="w-full text-3xl font-bold text-white">
            <NavLink
               className={({ isActive, isPending }) =>
                  isPending
                     ? 'pending'
                     : isActive
                       ? 'active text-blue-400 font-bold'
                       : ''
               }
               to={'/page'}
            >
               PARKING .
            </NavLink>
         </h1>

         {/* Desktop Navigation */}
         <ul className="hidden md:flex">
            {data.map((item) => (
               <li className="m-2 p-4">{item.message}</li>
            ))}
            <li className="p-4 hover:bg-gray-900 hover:text-white rounded-xl m-2 cursor-pointer duration-300">
               <motion.div
                  className="w-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     duration: 2,
                     delay: 0.5,
                     ease: [0, 0.71, 0.2, 1.01],
                  }}
               >
                  <NavLink
                     className={({ isActive, isPending }) =>
                        isPending
                           ? 'pending'
                           : isActive
                             ? 'active text-blue-400 font-bold flex flex-row items-center gap-3'
                             : ' flex duration-300 flex-row items-center gap-3'
                     }
                     to={'/archive-page'}
                  >
                     <BiArchive className="text-3xl" />
                     Archive
                  </NavLink>
               </motion.div>
            </li>
         </ul>

         {/* Mobile Navigation Icon */}
         <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>

         {/* Mobile Navigation Menu */}
         <ul
            className={
               nav
                  ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                  : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
         >
            {/* Mobile Logo */}
            <h1 className="w-full text-3xl font-bold text-white m-4">
               PARKING .
            </h1>

            {/* Mobile Navigation Items */}
            <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
               <NavLink
                  className="text-white aria-[current=page]:text-blue-400"
                  to={'/archive-page'}
               >
                  Archive
               </NavLink>
               {/* {item.text} */}
            </li>
         </ul>
      </div>
   )
}

export default Navbar
