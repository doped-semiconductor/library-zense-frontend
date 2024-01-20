'use client'
import { RxDashboard } from 'react-icons/rx'
import { FaSitemap } from 'react-icons/fa'
import { LiaSitemapSolid } from 'react-icons/lia'
import { MdOutlinePermMedia } from 'react-icons/md'
import { useEffect } from 'react'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { FaRegFile, FaRegFileVideo, FaRegImage } from 'react-icons/fa6'
import { RiFileEditFill, RiFileEditLine } from 'react-icons/ri'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { CgFileRemove } from 'react-icons/cg'

import './styles.css'
import { useRouter } from 'next/navigation'
import TableItem from '@/app/components/table/page'

export default function AdminPages() {
  let iconSize = 80
  const iconColor = 'black'

  const router = useRouter()
  const handleActionClick = (pageName: string) => {
    switch (pageName) {
      case 'create-page': {
        router.push('/admin/workspace/create-page')
        return
      }

      case 'edit-page': {
        router.push('/admin/workspace/edit-page')
        return
      }

      case 'delete-page': {
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth',
        })
        return
      }

      default: {
        return
        // do nothing
      }
    }
  }

  return (
    <div className='pl-7 bg-transparent w-full h-full'>
      <div className='pb-8'>
        <h1 className='text-4xl font-bold p-4 py-0 mt-6'> Page Actions </h1>
        <p className='text-xl font-normal font-sans p-4 py-0'>
          {' '}
          shortcuts to create, edit, and delete pages{' '}
        </p>

        {/* flex flex-row justify-start flex-wrap items-center */}
        <div className='w-full h-full p-4 mt-3 flex flex-row justify-start flex-wrap items-start gap-6'>
          <div
            className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
            onClick={(e) => {
              handleActionClick('create-page')
            }}
          >
            <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
              <AiOutlineFileAdd
                size={iconSize}
                color={iconColor}
              ></AiOutlineFileAdd>
            </span>
            <h4 className='w-fit m-auto text-xl font-semibold'>
              Create a New Page
            </h4>
            <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
              Use Rich Text Editor to create a new HTML Page for a section.
              Attach it later in sections page to create the section you want.
            </p>
          </div>

          <div
            className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
            onClick={(e) => {
              handleActionClick('edit-page')
            }}
          >
            <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
              <RiFileEditLine size={iconSize} color={iconColor}>
                {' '}
              </RiFileEditLine>
            </span>
            <h4 className='w-fit m-auto text-xl font-semibold'>
              {' '}
              Edit a Page{' '}
            </h4>
            <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
              Choose an existing Page and Edit it using Rich Text Editor. If it
              is already attached to a section the changes will be reflected.
            </p>
          </div>

          <div
            className='w-300px h-450px px-8 py-2 drop-shadow-md rounded border-1 border-gray-200 bg-slate-100 transition-all hover:cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-lg hover:transition-all cards'
            onClick={(e) => {
              handleActionClick('delete-page')
            }}
          >
            <span className='p-0 my-0 w-fit h-fit max-w-fit max-h-fit mx-auto block'>
              <CgFileRemove size={iconSize} color={iconColor}>
                {' '}
              </CgFileRemove>
            </span>
            <h4 className='w-fit m-auto text-xl font-semibold'>
              {' '}
              Delete Pages{' '}
            </h4>
            <p className='w-[220px] text-[0.92rem] font-sans m-auto my-0 text-center'>
              Remove a page that is no longer needed permanently from the
              database. Choose the page and press delete icon.
            </p>
          </div>
        </div>
      </div>

      <hr className='bg-gray-600 mx-3 mt-5 mb-5 w-[97%] h-[2px]'></hr>

      <div className='pt-0'>
        <h1 className='text-3xl font-bold p-4 py-0 mt-3'> List of Pages </h1>
        <p className='text-lg font-normal font-sans p-4 py-0'>
          {' '}
          view, delete, or change filename & description of pages in this
          section.{' '}
        </p>

        <div className='mx-auto mt-5 mb-3 pl-7 pt-5 pb-5 w-[80%] h-fit grid grid-flow-row grid-cols-3 gap-x-0 gap-y-5 rounded-lg drop-shadow-md border-1 border-gray-400 bg-slate-100'>
          <div className='flex items-center'>
            <span className='inline-block'>
              <FaRegImage size={34} color='green'>
                {' '}
              </FaRegImage>
            </span>
            <p className='text-3xl inline-block w-fit h-fit pl-2'> / Image </p>
          </div>
          <div className=''>
            <label
              htmlFor='pagename'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Filename:{' '}
            </label>
            <input
              id='pagename'
              type='text'
              value=''
              placeholder='page name'
              className='text-base py-1 px-2 font-medium rounded border-gray-500'
            />
          </div>
          <div className=''>
            <label
              htmlFor='size'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Size:{' '}
            </label>
            <input
              disabled
              id='size'
              type='text'
              value=''
              placeholder='page size'
              className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white'
            />
          </div>
          <div className=''>
            <label
              htmlFor='description'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Description:{' '}
            </label>
            <input
              disabled
              id='description'
              type='text'
              value=''
              placeholder='description'
              className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white'
            />
          </div>
          <div className=''>
            <label
              htmlFor='lastmodified'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Last Modified:{' '}
            </label>
            <input
              disabled
              id='lastmodified'
              type='text'
              value=''
              placeholder='description'
              className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white'
            />
          </div>
          <div className=''>
            <label
              htmlFor='createdby'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Created by:{' '}
            </label>
            <input
              disabled
              id='createdby'
              type='text'
              value=''
              placeholder='description'
              className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed'
            />
          </div>
        </div>

        <div className='scrollBar overflow-y-scroll overflow-x-scroll max-h-[400px] mt-3 mb-28 mx-auto py-3 w-[85%]'>
          <TableItem></TableItem>
        </div>
      </div>
    </div>
  )
}
