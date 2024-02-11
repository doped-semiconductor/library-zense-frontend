'use client'
import React, { useEffect, useState } from 'react'
import { FaRegFile } from 'react-icons/fa6'
import { FaTrashAlt } from 'react-icons/fa'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Pagination,
} from '@nextui-org/react'
import { RiPagesLine } from 'react-icons/ri'
import { TbFolder } from 'react-icons/tb'
import { HiOutlineLink } from 'react-icons/hi'
import { Section, SectionRecord } from '@/app/types/api'
import './styles.css'
import { TfiReload } from 'react-icons/tfi'

const columns = [
  { name: 'ICON', uid: 'icon' },
  { name: 'SECTION NAME', uid: 'sectionname' },
  { name: 'EXTERNAL URL', uid: 'external_url' },
  { name: 'SECTION TYPE', uid: 'sectiontype' },
  { name: 'CREATED BY', uid: 'createdby' },
  { name: 'DESCRIPTION', uid: 'description' },
  { name: 'LAST MODIFIED', uid: 'modifiedon' },
  { name: 'ACTIONS', uid: 'actions' },
]

// const date = new Date()
const formattedDate = '01/03/2024 11:53:34'

interface GetResponse {
  message: string | null
  error: string | null
  payload: any
}

export default function SectionsTable(params: {
  selectedRow: any
  setSelectedRow: any
  mediaList: any[]
}) {
  const { selectedRow, setSelectedRow } = params
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const selectRow = (item: any) => {
    setSelectedRow(item)
  }

  let sections: SectionRecord[] = []

  const [section, setSection] = useState(sections)

  const getSections = async () => {
    setLoading(true)
    const url = 'http://localhost:5000/api/content/section-all/get'

    try {
      let result: Response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      let response: GetResponse = await result.json()

      if (response.error) {
        window.alert(`couldn't load data from server`)
        setError(true)
      } else {
        let sectionsList = []
        for (let section of response.payload as Section[]) {
          let newsection: SectionRecord = {
            id: section.id,
            icon: section.sectiontype,
            createdby: section.created_by,
            modifiedon: section.modified_at,
            description: section.description,
            section_name: section.section_name,
            external_url: section.external_url,
            sectiontype: section.section_type,
          }
          sectionsList.push(newsection)
        }

        setSection(sectionsList)
      }
    } catch (error) {
      console.log(error)
      window.alert(
        'Failed to fetch the data from server. Please check your connection.'
      )
    } finally {
      setLoading(false)
    }
  }

  const [page, setPage] = React.useState(1)
  const rowsPerPage = 7

  const pages = Math.ceil(section.length / rowsPerPage)

  useEffect(() => {
    getSections()
      .then((response) => {})
      .catch((error) => {
        setError(true)
      })
  }, [])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return section.slice(start, end)
  }, [page, section])

  const renderCell = React.useCallback(
    (section: SectionRecord, columnKey: React.Key) => {
      const cellValue = section[columnKey as keyof SectionRecord]

      switch (columnKey) {
        case 'icon':
          switch (section.sectiontype) {
            case 'parentsection':
              return <TbFolder color={'green'} size={18}></TbFolder>
            case 'external':
              return <HiOutlineLink color={'violet'} size={18}></HiOutlineLink>
            case 'page':
              return <RiPagesLine color={'red'} size={18}></RiPagesLine>
            default:
              return <FaRegFile color={'blue'} size={18}></FaRegFile>
          }
        case 'sectionname':
          return (
            <span key={columnKey.toString() + '-' + cellValue + section.id}>
              {' '}
              {section.section_name}{' '}
            </span>
          )
        case 'external_url':
          return (
            <span key={columnKey.toString() + '-' + cellValue + section.id}>
              {' '}
              {section.external_url}{' '}
            </span>
          )
        case 'sectiontype':
          return (
            <span key={columnKey.toString() + '-' + cellValue + section.id}>
              {' '}
              {section.sectiontype}{' '}
            </span>
          )
        case 'createdby':
          return (
            <span key={columnKey.toString() + '-' + cellValue + section.id}>
              {' '}
              {section.createdby}{' '}
            </span>
          )
        case 'description':
          return (
            <span
              key={columnKey.toString() + '-' + cellValue + section.id}
              className='max-w-[35%] whitespace-normal'
            >
              {' '}
              {section.description}{' '}
            </span>
          )
        case 'modifiedon':
          return (
            <span key={columnKey.toString() + '-' + cellValue + section.id}>
              {' '}
              {section.modifiedon}{' '}
            </span>
          )
        case 'actions':
          return (
            <div className='relative flex items-center gap-2'>
              <Tooltip
                color='danger'
                content='Delete Section'
                delay={0}
                closeDelay={0}
                className='trashTooltip'
              >
                <span className='text-lg text-danger-400 hover:text-danger cursor-pointer px-1 active:opacity-50'>
                  <FaTrashAlt size={26}></FaTrashAlt>
                </span>
              </Tooltip>
            </div>
          )
        default:
          return cellValue
      }
    },
    []
  )

  return (
    <>
      <div className='w-full h-fit pl-3 py-5 hover:cursor-pointer'>
        <div
          className={loading ? 'rotate' : ''}
          onClick={() => {
            if (!loading) {
              getSections()
            }
          }}
        >
          <TfiReload size={20} color={'black'}></TfiReload>
        </div>
      </div>
      <Table
        aria-label='sections table to edit/delete/create sections.'
        selectionMode={'single'}
        color='default'
        className='w-[100%] m-auto'
        bottomContent={
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='secondary'
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items} isLoading={loading}>
          {(item) => (
            <TableRow key={item.id} onClick={(e) => selectRow(item)}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
