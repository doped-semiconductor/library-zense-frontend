'use client'
import { RxDashboard } from 'react-icons/rx'
import { FaSitemap } from 'react-icons/fa'
import { LiaSitemapSolid } from 'react-icons/lia'
import { MdOutlinePermMedia } from 'react-icons/md'
import { useEffect } from 'react'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { RiFileEditFill } from 'react-icons/ri'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { CgFileRemove } from 'react-icons/cg'

import './styles.css'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  let iconSize = 80
  const iconColor = 'black'

  const router = useRouter()
  const handleActionClick = (pageName: string) => {
    switch (pageName) {
      case 'dashboard': {
        router.push('/admin/workspace/dashboard')
        return
      }

      case 'media': {
        router.push('/admin/workspace/media')
        return
      }

      case 'page-add': {
        router.push('/admin/workspace/create-page')
        return
      }

      case 'page-remove': {
        router.push('/admin/workspace/manage-pages')
        return
      }

      default: {
        return
        // do nothing
      }
    }
  }

  return (
    <div className='bg-transparent w-full h-full text-black'>
      <h1 className='hero-title w-fit pl-11 pt-5 text-4xl font-bold drop-shadow-md font-sans'>
        {' '}
        Welcome To Admin Dashboard{' '}
      </h1>
      <p className='pl-14 m-0 mt-2 mb-10'>
        {' '}
        Select on of the actions by clicking on the floating cards.{' '}
      </p>
      {/* <hr className="w-full mx-7"></hr> */}

      <div className='flex flex-row flex-wrap pl-20 justify-start items-center gap-9 mt-10'>
        {/* <div className="w-full h-fit my-3 px-4 flex justify-around items-center">  */}
        <div
          className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
          onClick={(e) => {
            handleActionClick('dashboard')
          }}
        >
          <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
            <RxDashboard size={iconSize} color={iconColor}>
              {' '}
            </RxDashboard>
          </span>
          <h4 className='w-fit m-auto text-xl font-semibold'> Dashboard </h4>
          <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
            Home page of admin side of IIITB Library Portal. Find shortcuts to
            Edit, Create, and manage sections and content in the website.
          </p>
        </div>

        <div
          className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
          onClick={(e) => {
            handleActionClick('media')
          }}
        >
          <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
            <MdOutlinePermMedia size={iconSize} color={iconColor}>
              {' '}
            </MdOutlinePermMedia>
          </span>
          <h4 className='w-fit m-auto text-xl font-semibold'> Media </h4>
          <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
            Media page of admin side of IIITB Library Portal. Find, add, edit,
            delete media files and manage media on server.
          </p>
        </div>

        {/* <div className="w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards">
                        <span className="p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block">
                            <FaSitemap size={iconSize} color={iconColor}> </FaSitemap>
                        </span>
                        <h4 className="w-fit m-auto text-xl font-semibold"> Sitemap </h4>
                        <p className="w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center"> 
                            Sitemap of IIITB Library Portal. View, edit, delete sections in the sitemap page to change the website content or structure.
                        </p> 
                    </div> */}

        {/* <div className="w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards">
                        <span className="p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block">
                            <RiFileEditFill size={iconSize} color={iconColor}> </RiFileEditFill>
                        </span>
                        <h4 className="w-fit m-auto text-xl font-semibold"> Edit pages </h4>
                        <p className="w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center"> 
                            Edit / Update the content of a page stored in the website database. See changes get reflected on the website. 
                        </p> 
                    </div> */}

        <div
          className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
          onClick={(e) => {
            handleActionClick('page-add')
          }}
        >
          <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
            <AiOutlineFileAdd size={iconSize} color={iconColor}>
              {' '}
            </AiOutlineFileAdd>
          </span>
          <h4 className='w-fit m-auto text-xl font-semibold'> Create Pages </h4>
          <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
            Create / Add new pages and attach them to sections or subsection in
            sitemap for publishing on website.
          </p>
        </div>

        <div
          className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
          onClick={(e) => {
            handleActionClick('page-remove')
          }}
        >
          <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
            <CgFileRemove size={iconSize} color={iconColor}>
              {' '}
            </CgFileRemove>
          </span>
          <h4 className='w-fit m-auto text-xl font-semibold'> Delete Pages </h4>
          <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
            Delete / Remove unused or outdated pages or entries to clear up the
            database save storage space.
          </p>
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}
