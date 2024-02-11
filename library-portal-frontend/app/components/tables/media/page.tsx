'use client'
import React, { useState } from 'react'
import { format } from 'date-fns'
import { FaRegFile, FaRegFileVideo, FaRegImage } from 'react-icons/fa6'
import {
  FaEdit,
  FaFileAudio,
  FaFilePdf,
  FaPen,
  FaTrashAlt,
  FaVideo,
} from 'react-icons/fa'
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
import { Table as TableClass } from '@nextui-org/react'
import { RiDeleteBack2Line, RiFileEditLine, RiPenNibLine } from 'react-icons/ri'

const columns = [
  { name: 'ICON', uid: 'icon' },
  { name: 'FILE NAME', uid: 'filename' },
  { name: 'SIZE', uid: 'size' },
  { name: 'TYPE', uid: 'type' },
  { name: 'CREATED BY', uid: 'createdby' },
  { name: 'DESCRIPTION', uid: 'description' },
  { name: 'LAST MODIFIED', uid: 'modifiedon' },
  { name: 'ACTIONS', uid: 'actions' },
]

// const date = new Date()
const formattedDate = '01/03/2024 11:53:34' // format(date, 'MM/dd/yyyy HH:mm:ss a');

// const statusColorMap: Record<string, ChipProps["color"]>  = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

export default function TableItem(params: {
  selectedRow: any
  setSelectedRow: any
  mediaList: any[]
}) {
  const { selectedRow, setSelectedRow } = params
  const selectRow = (item: any) => {
    setSelectedRow(item)
  }
  const [media, setMedia] = useState([
    {
      icon: 'image',
      id: 1,
      filename: 'media_file01',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description:
        'this is a media file created for uses. this is a media file created for uses. this is a media file created for uses. this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'video',
      id: 2,
      filename: 'media_file02',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description:
        'this is a media file created for uses. this is a media file created for uses. this is a media file created for uses. this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 3,
      filename: 'media_file03',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description:
        'this is a media file created for uses. this is a media file created for uses. this is a media file created for uses. this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 4,
      filename: 'media_file04',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description:
        'this is a media file created for uses. this is a media file created for uses. this is a media file created for uses. this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'video',
      id: 5,
      filename: 'media_file05',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description: 'this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 6,
      filename: 'media_file06',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description: 'this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 7,
      filename: 'media_file07',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description: 'this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 8,
      filename: 'media_file08',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description: 'this is a media file created for uses.',
      modifiedon: formattedDate,
    },
    {
      icon: 'image',
      id: 9,
      filename: 'media_file09',
      size: 4409,
      type: 'jpeg',
      createdby: 'john doe',
      created1: 'john doe',
      created2: 'john doe',
      source_url: 'http://source-url/100892365',
      description: 'this is a media file created for uses.',
      modifiedon: formattedDate,
    },
  ])
  type Media = (typeof media)[0]

  const [page, setPage] = React.useState(1)
  const rowsPerPage = 7

  const pages = Math.ceil(media.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return media.slice(start, end)
  }, [page, media])

  const renderCell = React.useCallback((media: Media, columnKey: React.Key) => {
    const cellValue = media[columnKey as keyof Media]

    switch (columnKey) {
      case 'icon':
        switch (media.icon) {
          case 'image':
            return (
              <FaRegImage color={'green'} size={18}>
                {' '}
              </FaRegImage>
            )
          case 'video':
            return (
              <FaVideo color={'violet'} size={18}>
                {' '}
              </FaVideo>
            )
          case 'pdf':
            return (
              <FaFilePdf color={'red'} size={18}>
                {' '}
              </FaFilePdf>
            )
          case 'audio':
            return (
              <FaFileAudio color={'orange'} size={18}>
                {' '}
              </FaFileAudio>
            )
          default:
            return (
              <FaRegFile color={'blue'} size={18}>
                {' '}
              </FaRegFile>
            )
        }
      case 'filename':
        return (
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
            {' '}
            {media.filename}{' '}
          </span>
        )
      case 'size':
        return (
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
            {' '}
            {media.size}{' '}
          </span>
        )
      case 'type':
        return (
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
            {' '}
            {media.type}{' '}
          </span>
        )
      case 'createdby':
        return (
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
            {' '}
            {media.createdby}{' '}
          </span>
        )
      case 'description':
        return (
          <span
            key={columnKey.toString() + '-' + cellValue + media.id}
            className='max-w-[35%] whitespace-normal'
          >
            {' '}
            {media.description}{' '}
          </span>
        )
      case 'modifiedon':
        return (
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
            {' '}
            {media.modifiedon}{' '}
          </span>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            {/* <Tooltip color='foreground' content='Edit Details'>
              <span className='text-lg cursor-pointer active:opacity-50 px-1 text-blue-700'>
                <FaEdit size={20}></FaEdit>
              </span>
            </Tooltip> */}
            <Tooltip color='danger' content='Delete File'>
              <span className='text-lg text-danger cursor-pointer px-1 active:opacity-50'>
                <FaTrashAlt size={17}></FaTrashAlt>
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      aria-label='Media file table to edit/delete/create media files.'
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
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id} onClick={(e) => selectRow(item)}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
