'use client'
import TableItem from '@/app/components/tables/media/page'
import './styles.css'
import {
  FaCross,
  FaFile,
  FaPlus,
  FaRegFilePdf,
  FaRegImage,
  FaVideo,
} from 'react-icons/fa'
import { Button } from '@nextui-org/react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { mediaRow } from '@/app/types/api'
import { TiTick } from 'react-icons/ti'
import { MdCopyAll } from 'react-icons/md'
import { EventEmitter } from 'stream'
import {
  FaFileAudio,
  FaFilePdf,
  FaRegFileAudio,
  FaRegFileVideo,
} from 'react-icons/fa6'

export default function AdminMediaPage() {
  const addMedia = (e: Event) => {
    let result
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const deleteMedia = (e: any) => {
    // fetch
  }

  const editMediaDetails = (e: any) => {
    // fetch
  }

  const getMediaList = () => {
    // fetch
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedRow, setSelectedRow] = useState({})

  const [displayedRow, setDisplayedRow] = useState({})

  const [mediaList, setMediaList] = useState([])

  useEffect(() => {
    setDisplayedRow({ ...selectedRow })
  }, [selectedRow])

  useEffect(() => {}, [])

  return (
    <div className='text-black'>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='w-[70%]'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <div className='w-full'>
                  <div className='block text-center w-fit mx-auto text-2xl'>
                    Add Media File
                  </div>
                  <p className='block text-center w-fit mx-auto font-normal text-sm'>
                    {' '}
                    upload image, video, audio, pdf file.
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <form className='w-[95%] h-fit py-4 px-0 m-auto'>
                  <div className='w-full flex-col items-stretch'>
                    <label htmlFor='filename' className='block'>
                      Filename :
                    </label>
                    <input
                      type='text'
                      id='filename'
                      placeholder='filename'
                      className='rounded-md py-0 px-2 text-base tex-black bg-white border-1 border-gray-800'
                    />
                  </div>
                  <div className='w-full flex-col items-stretch mt-4'>
                    <label htmlFor='description'> Description: </label>
                    <textarea
                      id='description'
                      rows={10}
                      // value={''}
                      placeholder='description'
                      className='w-full rounded-md py-0 px-2 text-base tex-black bg-white border-1 border-gray-800'
                    ></textarea>
                  </div>
                  <div className='w-full flex-col items-stretch mt-4'>
                    <input
                      type='file'
                      accept='.jpeg, .png, .pdf, .jpg, .mpeg'
                      id='filepicker'
                      className='rounded-md py-0 px-2 text-base tex-black bg-white'
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter className='mx-[10%] flex justify-between items-center'>
                <Button color='danger' variant='flat' onPress={onClose}>
                  Close
                </Button>
                <Button color='success' variant='solid' onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className='bg-transparent w-full h-full pb-14'>
        <div className='flex justify-between w-full pr-[11%]'>
          <div className='max-w-fit'>
            <h1 className='hero-title w-fit pl-11 pt-5 text-4xl font-bold drop-shadow-md font-sans'>
              {' '}
              Media Page{' '}
            </h1>
            <p className='pl-12 m-0 mt-2 mb-10'>
              {' '}
              Edit metadata of existing media files, add new media, and delete
              selected media here.{' '}
            </p>
          </div>
          <div className='min-w-fit flex items-center justify-start pb-8'>
            <Button
              className='text-white text-base bg-blue-600 w-fit flex pr-[10%]'
              onPress={onOpen}
            >
              <FaPlus size={24}></FaPlus> Add Media
            </Button>
          </div>
        </div>

        <div className='mx-auto mt-1 mb-9 pl-7 pt-5 pb-5 w-[80%] h-fit grid grid-flow-row grid-cols-3 gap-x-0 gap-y-5 rounded-lg drop-shadow-md border-1 border-gray-400 bg-slate-100'>
          <div className='flex items-center'>
            <span className='inline-block'>
              {(displayedRow as mediaRow).icon === 'image' && (
                <FaRegImage size={34} color='green'>
                  {' '}
                </FaRegImage>
              )}

              {(displayedRow as mediaRow).icon === 'video' && (
                <FaVideo size={34} color='violet'>
                  {' '}
                </FaVideo>
              )}

              {(displayedRow as mediaRow).icon === 'audio' && (
                <FaFileAudio size={34} color='orange'>
                  {' '}
                </FaFileAudio>
              )}

              {(displayedRow as mediaRow).icon === 'pdf' && (
                <FaFilePdf size={34} color='red'>
                  {' '}
                </FaFilePdf>
              )}

              {(displayedRow as mediaRow).icon === undefined && (
                <FaFile size={34} color='gray'>
                  {' '}
                </FaFile>
              )}
            </span>
            {(displayedRow as mediaRow).icon === 'image' && (
              <p className='text-3xl inline-block w-fit h-fit pl-2'> / Image</p>
            )}
            {(displayedRow as mediaRow).icon === 'video' && (
              <p className='text-3xl inline-block w-fit h-fit pl-2'> / Video</p>
            )}
            {(displayedRow as mediaRow).icon === 'audio' && (
              <p className='text-3xl inline-block w-fit h-fit pl-2'> / Audio</p>
            )}
            {(displayedRow as mediaRow).icon === 'pdf' && (
              <p className='text-3xl inline-block w-fit h-fit pl-2'> / PDF</p>
            )}
            {(displayedRow as mediaRow).icon === undefined && (
              <p className='text-3xl inline-block w-fit h-fit pl-2'> / -- --</p>
            )}
            <p className='text-xs w-[25%] max-w-[25%] ml-4 whitespace-normal'>
              {' '}
              (Choosen file details appear here)
            </p>
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
              value={
                (displayedRow as mediaRow).filename
                  ? ((displayedRow as mediaRow).filename as string)
                  : '---'
              }
              onChange={(e) => {
                let newRow: mediaRow = { ...displayedRow } as mediaRow
                newRow.filename = e.target.value
                console.log(newRow)
                setDisplayedRow(newRow)
              }}
              placeholder='page name'
              className='text-base py-1 px-2 w-[60%] font-medium rounded border-gray-500'
            />
          </div>
          <div className=''>
            <label
              htmlFor='size'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Size: (in Bytes){' '}
            </label>
            <input
              disabled
              id='size'
              type='text'
              value={
                (displayedRow as mediaRow)?.size
                  ? ((displayedRow as mediaRow).size as number)
                  : '---'
              }
              placeholder='page size'
              className='text-base py-1 px-2 w-[60%] font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed disabled:opacity-50'
            />
          </div>
          <div className='descriptionDiv'>
            <label
              htmlFor='description'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Description:{' '}
            </label>
            <textarea
              id='description'
              rows={5}
              cols={33}
              value={
                (displayedRow as mediaRow).description
                  ? ((displayedRow as mediaRow).description as string)
                  : '---'
              }
              onChange={(e) => {
                let newRow: mediaRow = { ...displayedRow } as mediaRow
                newRow.description = e.target.value
                console.log(newRow)
                setDisplayedRow(newRow)
              }}
              placeholder='description'
              className='text-base py-1 px-2 w-[80%] font-medium rounded border-gray-500 bg-white'
            />
          </div>

          <div className=''>
            <label
              htmlFor='source-url'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              media url:{' '}
            </label>
            <div className='flex items-center'>
              <input
                disabled
                id='source-url'
                type='text'
                value={
                  (displayedRow as mediaRow).source_url
                    ? ((displayedRow as mediaRow).source_url as string)
                    : '---'
                }
                placeholder='source url'
                className='text-base py-1 px-2 w-[60%] font-medium rounded border-gray-500 bg-white hover:cursor-copy'
              />
              <span
                className='px-1 py-[0.4375rem] -ml-[10px] bg-gray-200 opacity-75 rounded-l-none rounded-tr rounded-br hover:cursor-pointer'
                onClick={(e) => {
                  let copyText: string = ''
                  if (
                    typeof (displayedRow as mediaRow).source_url === 'string'
                  ) {
                    copyText = (displayedRow as mediaRow).source_url as string
                  } else {
                    copyText = ''
                  }
                  console.log(copyText)
                  navigator.clipboard
                    .writeText(copyText)
                    .then((value) => {
                      window.alert(
                        `The text was successfully copied to clipboard.`
                      )
                    })
                    .catch((error) => {
                      window.alert('Text was not copied to clipboard.')
                    })
                }}
              >
                <MdCopyAll size={18} color='blue'>
                  {' '}
                </MdCopyAll>
              </span>
            </div>
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
              value={
                (displayedRow as mediaRow).createdby
                  ? ((displayedRow as mediaRow).createdby as string)
                  : '---'
              }
              placeholder='created by'
              className='text-base py-1 px62 w-[60%] font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed disabled:opacity-50'
            />
          </div>
          <div className=''>
            <label
              htmlFor='type'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              File Type:{' '}
            </label>
            <input
              disabled
              id='type'
              type='text'
              value={
                (displayedRow as mediaRow).type
                  ? ((displayedRow as mediaRow).type as string)
                  : '---'
              }
              placeholder='file type'
              className='text-base py-1 px62 w-[60%] font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed disabled:opacity-50'
            />
          </div>
          <div className=''>
            <label
              htmlFor='last-modified'
              className='text-base font-semibold pb-1 block'
            >
              {' '}
              Last Modified:{' '}
            </label>
            <input
              disabled
              id='last-modified'
              type='text'
              value={
                (displayedRow as mediaRow).modifiedon
                  ? ((displayedRow as mediaRow).modifiedon as string)
                  : '---'
              }
              placeholder='file type'
              className='text-base py-1 px-2 w-[60%] font-medium rounded border-gray-500 bg-white hover:cursor-not-allowed disabled:opacity-50'
            />
          </div>

          <Button color='secondary' className='tickmark mx-auto w-[60%]'>
            {' '}
            <TiTick color='white' size={20}></TiTick> Update Record
          </Button>
        </div>
        <div className='w-[90%] p-2 tablediv'>
          <TableItem
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            mediaList={mediaList}
          ></TableItem>
        </div>
      </div>
    </div>
  )
}

// className={
//      isModalOpen
//        ? 'w-full h-full overflow-y-hidden'
//        : 'w-full h-full overflow-y-scroll'
//    }
// ;<div
//   className={
//     isModalOpen
//       ? 'block bg-gray-600 opacity-75 w-screen h-screen z-50 absolute top-0 right-0'
//       : 'hidden bg-gray-600 opacity-75 w-screen h-screen z-50 absolute top-0 right-0'
//   }
// >
//   <div className='modal-foreground bg-white opacity-100 rounded-lg w-[50%] h-fit overflow-y-scroll mx-auto'>
//     <div
//       className='CloseButton w-fit relative top-10 right-10 h-fit'
//       onClick={(e) => {
//         setIsModalOpen(false)
//       }}
//     >
//       <FaCross></FaCross>
//     </div>
//     <div className='modal-title text-2xl text-black font-sans'>
//       {'Add Media File'}
//     </div>

//     <div className='modal-form'>
//       <div className='w-[85%] flex-col items-stretch h-fit'>
//         <label htmlFor='mediaFilename'>filename :</label>
//         <input
//           type='text'
//           value={''}
//           placeholder='filename'
//           className='rounded border-2 border-gray-400 px-3 py-1 bg-white font-sans text-base'
//         />
//       </div>
//     </div>

//     <div className='modal-action-div'>
//       <Button
//         color='danger'
//         onClick={(e) => {
//           setIsModalOpen(false)
//         }}
//       >
//         {' '}
//         {'Cancel'}{' '}
//       </Button>
//       <Button
//         className='bg-blue-600'
//         onClick={(e) => {
//           setIsModalOpen(false)
//         }}
//       >
//         {' '}
//         {'Create'}{' '}
//       </Button>
//     </div>
//   </div>
// </div>
