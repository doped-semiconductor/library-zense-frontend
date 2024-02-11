import { Button } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'
import { FaCross } from 'react-icons/fa'

interface ModalProps {
  title: any
  btn0: any
  btn1: any
  onClickBtn0: (e: Event) => void
  onClickBtn1: (e: Event) => void
  modalForm: any
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({
  title,
  btn0,
  btn1,
  onClickBtn0,
  onClickBtn1,
  modalForm,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={
        isOpen
          ? 'hidden modal-background bg-gray-600 opacity-75 w-screen h-screen z-50 relative top-0 right-0'
          : 'modal-background bg-gray-600 opacity-75 w-screen h-screen z-50 relative top-0 right-0'
      }
    >
      <div className='modal-foreground bg-white rounded-lg w-[50%] h-fit max-h-[80%] overflow-y-scroll'>
        <div
          className='CloseButton w-fit relative top-10 right-10 h-fit'
          onClick={(e) => {
            setIsOpen(false)
          }}
        >
          <FaCross></FaCross>
        </div>
        <div className='modal-title text-2xl text-black font-sans'>{title}</div>

        <div className='modal-form'> {modalForm} </div>

        <div className='modal-action-div'>
          <Button
            color='danger'
            onClick={(e) => {
              onClickBtn0(e as unknown as Event)
            }}
          >
            {' '}
            {btn0}{' '}
          </Button>
          <Button
            className='bg-blue-600'
            onClick={(e) => {
              onClickBtn1(e as unknown as Event)
            }}
          >
            {' '}
            {btn1}{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
