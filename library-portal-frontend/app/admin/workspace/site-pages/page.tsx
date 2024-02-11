'use client'
import { FaFile, FaPlus } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaRegImage } from 'react-icons/fa6'
import { HiExternalLink, HiOutlineLink } from 'react-icons/hi'
import { TbFolder } from 'react-icons/tb'

import './styles.css'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import SectionsTable from '@/app/components/tables/sections/page'
import { Section, SectionType } from '@/app/types/api'
import { RiPagesLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'
import TableItem from '@/app/components/tables/media/page'
import ViewEditBox from '@/app/components/viewEditInfoBox/sections/page'
import { randomUUID } from 'crypto'

export default function AdminPages() {
  const router = useRouter()

  const directTo = (arg: string) => {
    switch (arg) {
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

  const [selectedRow, setSelectedRow] = useState({})

  const [displayedRow, setDisplayedRow] = useState({})

  const [mediaList, setMediaList] = useState([])

  useEffect(() => {
    console.log(selectedRow)
    setDisplayedRow({ ...selectedRow })
  }, [selectedRow])

  useEffect(() => {}, [])

  return (
    <div className='pl-7 bg-transparent w-full h-full text-black'>
      <div className='pb-8'>
        <div className='w-full h-fit flex items-center justify-between'>
          <div>
            <h1 className='text-4xl font-bold p-4 py-0 mt-3'>
              {' '}
              Sections Page{' '}
            </h1>
            <p className='text-xl font-normal font-sans p-4 py-0 pt-4'>
              {' '}
              view, delete, or change filename & description of Sections.{' '}
            </p>
          </div>
          <div className='min-w-fit flex items-center justify-start pb-0 pr-36'>
            <Button
              className='text-white text-base bg-blue-600 w-fit flex pr-[10%]'
              onPress={(e) => {
                directTo('create-page')
              }}
            >
              <FaPlus size={24}></FaPlus> New Section
            </Button>
          </div>
        </div>
      </div>

      <div className='pt-0'>
        <ViewEditBox
          directTo={directTo}
          displayedRow={displayedRow}
          selectedRow={selectedRow}
          setDisplayedRow={setDisplayedRow}
          key={'sectionsViewEditBox'}
        ></ViewEditBox>
        <div className='scrollBar overflow-y-hidden overflow-x-scroll h-fit mt-8 mb-28 mx-auto py-3 w-[85%]'>
          <SectionsTable
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            mediaList={[]}
            key={'sectionsTable'}
          ></SectionsTable>
        </div>
      </div>
    </div>
  )
}

/* COMMENTED OUT CODE (JUST FOR BOOKKEEPING PURPOSES) */

//   {
/* <hr className='bg-gray-600 mx-3 mt-5 mb-5 w-[97%] h-[2px]'></hr> */
//   }

//{
/* <h1 className='text-4xl font-bold p-4 py-0 mt-6'> Page Actions </h1>
        <p className='text-xl font-normal font-sans p-4 py-0'>
          {' '}
          shortcuts to create, edit, and delete pages{' '}
        </p> */
//}

// let iconSize = 80
// const iconColor = 'black'
// const handleActionClick = (pageName: string) => {
//   switch (pageName) {
//     case 'create-page': {
//       router.push('/admin/workspace/create-page')
//       return
//     }

//     case 'edit-page': {
//       router.push('/admin/workspace/edit-page')
//       return
//     }

//     case 'delete-page': {
//       window.scrollBy({
//         top: window.innerHeight,
//         left: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     default: {
//       return
//       // do nothing
//     }
//   }
// }
//
// {
//   /* flex flex-row justify-start flex-wrap items-center */
// }
// {
/* <div className='w-full h-full p-4 mt-3 flex flex-row justify-start flex-wrap items-start gap-6'>
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
        </div> */
// }
