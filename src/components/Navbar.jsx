import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { NavLinks } from '../constants/index.jsx'
import frankImage from '../assets/frank.png'
import { menu, close } from '../assets'

export default function Navbar () {
  const [active, setActive] = useState('')
  const [toggle, settToggle] = useState('false')
  return (
    <nav
      className={`${styles.paddingX} w-full fle
         items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            // this is for scrolling to the navbar
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src={frankImage}
            alt='frank'
            className='w-12 h-10 rounded-full'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Frank <span className='sm:block hidden'>| A programmer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {NavLinks.map(link => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title)
                  setTimeout(() => document.querySelector(link.scrollTo).scrollIntoView(), 100)
                }}
              >
                <a href='#'>{link.title}</a>
              </li>
            )
          })}
        </ul>

        {/* this is the div for mobile phones */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[280px] h-[28px] object-contain cursor-pointer float-left'
            onClick={() => settToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end flex-col gap-4 items-start'>
              {NavLinks.map(link => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      settToggle(!toggle)
                      setActive(link.title)
                    }}
                  >
                    <a href='{`#$link.id`}'>{link.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
