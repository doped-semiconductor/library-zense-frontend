'use client'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { RiFileEditFill } from 'react-icons/ri'
import { FaSitemap } from 'react-icons/fa'
import { MdOutlinePermMedia } from 'react-icons/md'
import { IoDocumentsOutline } from 'react-icons/io5'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SideBar() {
  const iconSize = 24
  const iconColor = 'black'

  function onNavMouseEnter(id: string) {
    const linkElement = document.getElementById(id) as HTMLElement
    const tooltipElement = linkElement.lastChild as HTMLElement

    tooltipElement.classList.remove('hidden')
    tooltipElement.classList.add('inline-block')
  }

  function onNavMouseLeave(id: string) {
    const linkElement = document.getElementById(id) as HTMLElement
    console.log(linkElement.lastChild)

    const tooltipElement = linkElement.lastChild as HTMLElement

    tooltipElement.classList.add('hidden')
    tooltipElement.classList.remove('inline-block')
  }

  // onMouseEnter={(e)=> {onNavMouseEnter("dashboard")}} onMouseLeave={(e)=>{onNavMouseLeave("dashboard")}}

  return (
    <div className='p-0 m-0'>
      <div
        id='sidebar'
        className='sidebar sticky z-50 min-w-fit p-0 py-0 w-fit min-h-screen h-full bg-white drop-shadow-lg border-r-1 border-r-gray-200'
      >
        <ul className='flex flex-col justify-start items-center w-full h-full'>
          <Link
            href='/admin/workspace/dashboard'
            id='dashboard'
            className='py-8 px-5 border-0 hover:cursor-pointer hover:bg-gray-200 relative'
            onMouseEnter={(e) => {
              onNavMouseEnter('dashboard')
            }}
            onMouseLeave={(e) => {
              onNavMouseLeave('dashboard')
            }}
          >
            <RxDashboard size={iconSize} color={iconColor}></RxDashboard>
            <span className='hidden tooltip-text absolute bottom-[25%] -right-[6.5rem] z-50 text-xs px-4 py-2 border-1 border-gray-200 bg-slate-50'>
              {' '}
              Dashboard{' '}
            </span>
          </Link>

          <Link
            href='/admin/workspace/media'
            id='media'
            className='py-8 px-5 border-0 hover:cursor-pointer hover:bg-gray-200 relative'
            onMouseEnter={(e) => {
              onNavMouseEnter('media')
            }}
            onMouseLeave={(e) => {
              onNavMouseLeave('media')
            }}
          >
            <MdOutlinePermMedia
              size={iconSize}
              color={iconColor}
            ></MdOutlinePermMedia>
            <span className='hidden tooltip-text absolute bottom-[25%] -right-[4.75rem] z-50 text-xs px-4 py-2 border-1 border-gray-200 bg-slate-50'>
              {' '}
              Media{' '}
            </span>
          </Link>
          {/* <Link
            href='/admin/workspace/sitemap'
            id='sitemap'
            className='py-8 px-5 border-0 hover:cursor-pointer hover:bg-gray-200 relative'
            onMouseEnter={(e) => {
              onNavMouseEnter('sitemap')
            }}
            onMouseLeave={(e) => {
              onNavMouseLeave('sitemap')
            }}
          >
            <FaSitemap size={iconSize} color={iconColor}></FaSitemap>
            <span className='hidden tooltip-text absolute bottom-[25%] -right-[5.5rem] z-50 text-xs px-4 py-2 border-1 border-gray-200 bg-slate-50'>
              {' '}
              Sitemap{' '}
            </span>
          </Link> */}
          <Link
            href='/admin/workspace/site-pages'
            id='pages'
            className='py-8 px-5 border-0 hover:cursor-pointer hover:bg-gray-200 relative'
            onMouseEnter={(e) => {
              onNavMouseEnter('pages')
            }}
            onMouseLeave={(e) => {
              onNavMouseLeave('pages')
            }}
          >
            <IoDocumentsOutline
              size={iconSize}
              color={iconColor}
            ></IoDocumentsOutline>
            <span className='hidden tooltip-text absolute bottom-[25%] -right-[4.85rem] z-50 text-xs px-4 py-2 border-1 border-gray-200 bg-slate-50'>
              {' '}
              Pages{' '}
            </span>
          </Link>
        </ul>
      </div>

      {/* <div className="sidebar min-w-fit p-0 py-0 w-fit min-h-full h-screen bg-white drop-shadow-lg border-r-1 border-r-gray-500"> 
                <ul className="flex flex-col justify-start items-center w-full h-full">
                    <li className="py-8 px-5 border-0"> <RxDashboard size={iconSize} color={"white"}></RxDashboard> </li>
                </ul>
            </div> */}
    </div>
  )
}
