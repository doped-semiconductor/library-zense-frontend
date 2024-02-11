import { FaFile } from 'react-icons/fa'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { HiExternalLink, HiOutlineLink } from 'react-icons/hi'
import { TbFolder } from 'react-icons/tb'

import './styles.css'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { Section, SectionType } from '@/app/types/api'
import { RiPagesLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

export default function ViewEditBox(params: {
  directTo: (arg: string) => void
  selectedRow: any
  displayedRow: any
  setDisplayedRow: Dispatch<SetStateAction<any>>
}) {
  const router = useRouter()
  const { directTo, selectedRow, displayedRow, setDisplayedRow } = params

  return (
    <div className='mx-auto mt-5 mb-3 pl-7 pt-5 pb-5 w-[80%] h-fit grid grid-flow-row grid-cols-3 gap-x-0 gap-y-5 rounded-lg drop-shadow-md border-1 border-gray-400 bg-slate-100'>
      <div className='flex items-center'>
        <span className='inline-block'>
          {(displayedRow as Section).sectiontype ===
            SectionType.ParentSection && (
            <TbFolder size={34} color='blue'></TbFolder>
          )}
          {(displayedRow as Section).sectiontype === SectionType.External && (
            <HiOutlineLink size={34} color='violet'></HiOutlineLink>
          )}
          {(displayedRow as Section).sectiontype === SectionType.Page && (
            <RiPagesLine size={34} color='red'></RiPagesLine>
          )}
          {(displayedRow as Section).sectiontype === undefined && (
            <FaFile size={34} color='gray'></FaFile>
          )}
        </span>
        <span className='text-3xl inline-block w-fit h-fit pl-2'>
          {(displayedRow as Section).sectiontype ===
            SectionType.ParentSection && (
            <p className='text-3xl inline-block w-fit h-fit pl-2'>
              / Parent Section
            </p>
          )}
          {(displayedRow as Section).sectiontype === SectionType.External && (
            <p className='text-3xl inline-block w-fit h-fit pl-2'>/ External</p>
          )}
          {(displayedRow as Section).sectiontype === SectionType.Page && (
            <p className='text-3xl inline-block w-fit h-fit pl-2'>/ Page</p>
          )}
          {(displayedRow as Section).sectiontype === undefined && (
            <p className='text-3xl inline-block w-fit h-fit pl-2'>/ -- --</p>
          )}
        </span>
      </div>
      <div className=''>
        <label
          htmlFor='sectionname'
          className='text-base font-semibold pb-1 block'
        >
          Section name:
        </label>
        <input
          id='sectionname'
          type='text'
          value={
            displayedRow && (displayedRow as Section).section_name
              ? (displayedRow as Section).section_name
              : ''
          }
          onChange={(e) => {
            let newRow: Section = { ...displayedRow } as Section
            console.log()
            newRow.section_name = e.target.value
            setDisplayedRow(newRow)
          }}
          placeholder='section name'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 w-[85%]'
        />
      </div>
      <div className=''>
        <label
          htmlFor='sectiontype'
          className='text-base font-semibold pb-1 block'
        >
          Section Type:
        </label>
        <select
          id='sectiontype'
          value={
            displayedRow && (displayedRow as Section).sectiontype
              ? (displayedRow as Section).sectiontype
              : ''
          }
          onChange={(e) => {
            let newRow: Section = { ...displayedRow } as Section
            console.log()
            newRow.sectiontype = e.target.value as SectionType
            setDisplayedRow(newRow)
          }}
          placeholder='page size'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
        >
          <option value={SectionType.External}> External </option>
          <option value={SectionType.Page}> Page </option>
          <option value={SectionType.ParentSection}> ParentSection </option>
        </select>
      </div>
      <div className=''>
        <label
          htmlFor='description'
          className='text-base font-semibold pb-1 block'
        >
          visibility:
        </label>
        <select
          id='visibility'
          value={(displayedRow as Section).visibility ? 'visible' : 'hidden'}
          onChange={(e) => {
            let newRow: Section = { ...displayedRow } as Section
            console.log()
            newRow.visibility = e.target.value === 'visible'
            setDisplayedRow(newRow)
          }}
          placeholder='visibility'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
        >
          <option value={'true'}> visible </option>
          <option value={'false'}> hidden </option>
        </select>
      </div>
      <div className='DescriptionDiv'>
        <label
          htmlFor='description'
          className='text-base font-semibold pb-1 block'
        >
          Description
        </label>
        <textarea
          id='description'
          rows={10}
          value={(displayedRow as Section).description}
          onChange={(e) => {
            let newRow: Section = { ...displayedRow } as Section
            newRow.description = e.target.value
            setDisplayedRow(newRow)
          }}
          placeholder='description'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
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
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
        />
      </div>

      <div className=''>
        <label
          htmlFor='external_url'
          className='text-base font-semibold pb-1 block'
        >
          external url:
        </label>
        <input
          disabled
          id='external_url'
          type='text'
          value={
            (displayedRow as Section).external_url
              ? ((displayedRow as Section).external_url as string)
              : '---'
          }
          onChange={(e) => {
            let newRow: Section = { ...displayedRow } as Section
            newRow.external_url = e.target.value
            setDisplayedRow(newRow)
          }}
          placeholder='page url'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
        />
      </div>

      <div className=''>
        <label
          htmlFor='parent-section'
          className='text-base font-semibold pb-1 block'
        >
          parent section:
        </label>
        <input
          disabled
          id='parent-section'
          type='text'
          value={
            (displayedRow as Section).external_url
              ? ((displayedRow as Section).external_url as string)
              : '---'
          }
          placeholder='parent section'
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white w-[85%]'
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
          className='text-base py-1 px-2 font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed w-[85%]'
        />
      </div>

      <div className='update-btn flex items-end'>
        <Button color='secondary' className='mx-auto w-[45%]'>
          {' '}
          <TiTick color='white' size={20}></TiTick> Update Section
        </Button>
        <Button color='secondary' className='bg-blue-600 mx-auto w-[45%]'>
          <HiExternalLink size={24}></HiExternalLink> Go to Edit Page
        </Button>
      </div>
    </div>
  )
}
