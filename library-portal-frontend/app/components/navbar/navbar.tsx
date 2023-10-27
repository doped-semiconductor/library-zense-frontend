'use client'
import '../navbar/navbar.css'
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Link from 'next/link'

const Navbar = (props: any) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <>
      <h1
        className='absolute top-7 sm:top-7 w-full min-h-fit text-xl font-extrabold text-center sm:text-2xl md:text-4x z-40'
        style={{ color: '#004488' }}
      >
        {' '}
        IIIT BANGALORE LIBRARY
      </h1>

      <nav
        className={
          'flex justify-between items-center w-full min-h-fit pt-4 pb-4 sm:pt-5 sm:pb-2 pl-1 pr-1 sm:pl-2 sm:pr-2 bg-white z-40 drop-shadow-xl'
        }
      >
        <div
          className={
            'flex-shrink-0 flex-grow-0 scale-75 sm:scale-95 md:scale-110 '
          }
        >
          <Hamburger size={17} color='black' />
        </div>

        <div className='flex justify-around items-center min-w-fit z-40'>
          <p
            className='hidden font-bold md:visible md:inline-block md:mr-3 z-40'
            style={{ color: '#004488' }}
          >
            {' '}
            Zense User{' '}
          </p>{' '}
          {/* user name*/}
          <span className='w-8 h-8 p-1 rounded-full drop-shadow-xl scale-75 sm:scale-90 md:scale-100 z-40 bg-black'>
            <img
              src='../../profile_final.svg'
              alt='profile-pic'
              className='profilePic'
            />
          </span>
          <div
            onClick={(e) => {
              console.log(showDropdown)
              toggleDropdown()
            }}
            className='z-50 hover:cursor-pointer'
          >
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='0' fill='none' width='24' height='24' />

              <g>
                <path d='M7 10l5 5 5-5' />
              </g>
            </svg>
          </div>
        </div>
      </nav>
      <ul
        className={
          showDropdown
            ? 'dropdown-show text-transparent bg-transparent absolute right-4 top-18 hover:cursor-pointer z-50 outline-none'
            : 'dropdown-hidden text-transparent bg-transparent absolute right-4 top-18 hover:cursor-pointer z-50 outline-none'
        }
      >
        <li className='border-1 border-black text-black font-serif font-medium pt-3 pb-3 pl-2 pr-2 hover:text-gray-600'>
          {' '}
          <Link href='/profile'>Edit profile </Link>
        </li>
        <li className='border-1 border-black text-black font-serif font-medium pt-3 pb-3 pl-2 pr-2 hover:text-gray-600'>
          {' '}
          <Link href='/profile'>logout</Link>{' '}
        </li>
      </ul>
    </>
  )
}

export default Navbar
