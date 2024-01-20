import React from 'react'
import Header from '@/app/components/header/header'

const Notfound = () => {
  return (
    <>
    <Header></Header>
    <div className=' bg-gray-300 text-black w-screen h-screen text-xl font-medium pt-20'>
      <span className='text-6xl block font-bold w-fit m-auto mt-0 mb-0'>404 </span> 
      <div className='block font-bold w-fit m-auto mb-2'>
      <span className='text-3xl font-bold w-fit m-auto mt-2 mb-2'>Oopssss!</span> &nbsp;&nbsp;&nbsp;
      <span className='text-1xl w-fit m-auto mt-0 mb-0'>This page could not be found</span>
      </div>
    </div>
    </>
  )
}