'use client'
import React from 'react'
import { format } from 'date-fns'
import { FaRegFile, FaRegFileVideo, FaRegImage } from 'react-icons/fa6'
import { FaVideo } from 'react-icons/fa'
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
// import {EditIcon} from "./EditIcon";
// import {DeleteIcon} from "./DeleteIcon";
// import {EyeIcon} from "./EyeIcon";
// import {columns, users} from "./data";
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

// const users = [
//   {
//     id: 1,
//     name: "Tony Reichert",
//     role: "CEO",
//     team: "Management",
//     status: "active",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     email: "tony.reichert@example.com",
//   },
//   {
//     id: 2,
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     team: "Development",
//     status: "paused",
//     age: "25",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//     email: "zoey.lang@example.com",
//   },
//   {
//     id: 3,
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//     email: "jane.fisher@example.com",
//   },
//   {
//     id: 4,
//     name: "William Howard",
//     role: "Community Manager",
//     team: "Marketing",
//     status: "vacation",
//     age: "28",
//     avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//     email: "william.howard@example.com",
//   },
//   {
//     id: 5,
//     name: "Kristen Copper",
//     role: "Sales Manager",
//     team: "Sales",
//     status: "active",
//     age: "24",
//     avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//     email: "kristen.cooper@example.com",
//   },
// ];

// const date = new Date()
const formattedDate = '01/03/2024 11:53:34' // format(date, 'MM/dd/yyyy HH:mm:ss a');

const media = [
  {
    icon: 'image',
    id: 1,
    filename: 'media_file01',
    size: 4409,
    type: 'jpeg',
    createdby: 'john doe',
    description: 'this is a media file created for uses.',
    modifiedon: formattedDate,
  },
  {
    icon: 'video',
    id: 2,
    filename: 'media_file02',
    size: 4409,
    type: 'jpeg',
    createdby: 'john doe',
    description: 'this is a media file created for uses.',
    modifiedon: formattedDate,
  },
  {
    icon: 'image',
    id: 3,
    filename: 'media_file03',
    size: 4409,
    type: 'jpeg',
    createdby: 'john doe',
    description: 'this is a media file created for uses.',
    modifiedon: formattedDate,
  },
  {
    icon: 'image',
    id: 4,
    filename: 'media_file04',
    size: 4409,
    type: 'jpeg',
    createdby: 'john doe',
    description: 'this is a media file created for uses.',
    modifiedon: formattedDate,
  },
  {
    icon: 'video',
    id: 5,
    filename: 'media_file05',
    size: 4409,
    type: 'jpeg',
    createdby: 'john doe',
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
    description: 'this is a media file created for uses.',
    modifiedon: formattedDate,
  },
]

// const statusColorMap: Record<string, ChipProps["color"]>  = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

// type User = typeof users[0];
type Media = (typeof media)[0]

export default function TableItem() {
  const renderCell = React.useCallback((media: Media, columnKey: React.Key) => {
    const cellValue = media[columnKey as keyof Media]

    switch (columnKey) {
      //   case "name":
      //     return (
      //       <User
      //         avatarProps={{radius: "lg", src: user.avatar}}
      //         description={user.email}
      //         name={cellValue}
      //       >
      //         {user.email}
      //       </User>
      //     );
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
          default:
            return (
              <FaRegFile color={'green'} size={18}>
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
          <span key={columnKey.toString() + '-' + cellValue + media.id}>
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
      //   case "role":
      //     return (
      //       <div className="flex flex-col">
      //         <p className="text-bold text-sm capitalize">{cellValue}</p>
      //         <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
      //       </div>
      //     );
      //   case "status":
      //     return (
      //       <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
      //         {cellValue}
      //       </Chip>
      //     );
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                {/* <EyeIcon /> */} I
              </span>
            </Tooltip>
            <Tooltip content='Edit user'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                {/* <EditIcon /> */} E
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete user'>
              <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                {/* <DeleteIcon /> */} D
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
      <TableBody items={media}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
      {/* <TableClass.Pagination
        shadow
        noMargin
        align='center'
        rowsPerPage={3}
        onPageChange={(page: any) => console.log({ page })}
      /> */}
    </Table>
  )
}

// ;<Table.Pagination
//   shadow
//   noMargin
//   align='center'
//   rowsPerPage={3}
//   onPageChange={(page) => console.log({ page })}
// />
