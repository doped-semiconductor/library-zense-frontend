'use client'
import Image from 'next/image'
import './registerpage.css'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
const page = () => {
  const handlePasswordShow = (op: number) => {
    if (op === 1) {
      let eyeicon = document.getElementById('eyeicon1')
      let eyeClosed = document.getElementById('eye-closed1')
      let password = document.getElementById('password')
      eyeClosed?.classList.remove('hidden')
      eyeicon?.classList.add('hidden')
      password?.setAttribute('type', 'text')
    } else if (op === 2) {
      let eyeicon = document.getElementById('eyeicon2')
      let eyeClosed = document.getElementById('eye-closed2')
      let password = document.getElementById('confirm-password')
      eyeClosed?.classList.remove('hidden')
      eyeicon?.classList.add('hidden')
      password?.setAttribute('type', 'text')
    }
  }

  const handlePasswordHide = (op: number) => {
    if (op === 1) {
      let eyeicon = document.getElementById('eyeicon1')
      let eyeClosed = document.getElementById('eye-closed1')
      let password = document.getElementById('password')
      eyeClosed?.classList.add('hidden')
      eyeicon?.classList.remove('hidden')
      password?.setAttribute('type', 'password')
    } else if (op === 2) {
      let eyeicon = document.getElementById('eyeicon2')
      let eyeClosed = document.getElementById('eye-closed2')
      let password = document.getElementById('confirm-password')
      eyeClosed?.classList.add('hidden')
      eyeicon?.classList.remove('hidden')
      password?.setAttribute('type', 'password')
    }
  }

  const handleRegister = () => {
    let formData = new FormData()
    setWrongEmail(false)
    setWrongPass(false)

    // check if email is valid
    let regEx = new RegExp(
      //\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}\.[A-Za-z]{2,5}\b
      //`\b[A-Za-z0-9._%+-]+@[A-Za-z0-9]{0, *}+\.[A-Za-z]{2,3}\.[A-Za-z]{0,3}\b`
      `^([a-zA-Z0-9_.]+)@([a-zA-Z0-9_.]+)\.([a-zA-Z]{2,5})$`
    )
    let validEmail = regEx.test(email)
    let emailSuffix = email.slice(email.indexOf('@'))
    if (
      !(
        validEmail &&
        emailSuffix &&
        (emailSuffix === '@iiitb.ac.in' || emailSuffix === '@iiitb.org')
      )
    ) {
      //check if email is valid
      setWrongEmail(true)
    }

    if (!(password && confirmPassword && password === confirmPassword)) {
      //check if passwords match
      setWrongPass(true)
    }

    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmPassword', confirmPassword)

    console.log('Submitted', validEmail, emailSuffix)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [wrongEmail, setWrongEmail] = useState(false)
  const [wrongPass, setWrongPass] = useState(false)

  return (
    <div
      className={`register-screen w-screen h-fit flex justify-center items-center`}
    >
      <div className='mt-6 mb-6 register bg-white rounded-2xl flex-col flex items-center p-4 gap-16 pb-7'>
        <Image src='/logo.png' alt='IIITB logo' width={300} height={282} />
        <h1 className=' p-1 text-2xl font-extrabold w-full text-center mx-auto my-0'>
          REGISTER NEW USER
        </h1>

        <div className='login_inputs flex-col flex items-center '>
          <div className='mb-3 w-full'>
            <label
              htmlFor='emailid'
              className='pl-1 pb-1 text-sm font-extrabold w-full'
            >
              EMAIL ID
            </label>
            <input
              id='emailid'
              type='email'
              className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-7'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            {wrongEmail && (
              <p className='text-red-600 text-xs pl-1 error'>
                {' '}
                Invalid email id.{' '}
              </p>
            )}
          </div>

          <div className='mb-3 w-full'>
            <div className='flex w-full p-1'>
              <label
                htmlFor='password'
                className='text-sm font-extrabold w-full'
              >
                PASSWORD
              </label>
            </div>

            <div className='password-box login_inputs flex items-center relative'>
              <input
                type='password'
                className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-6'
                id='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <i
                className='fa-regular fa-eye absolute right-2 text-2xl h-3/5 text-justify cursor-pointer'
                onClick={(e) => handlePasswordShow(1)}
                id='eyeicon1'
              ></i>
              <i
                className='fa-regular fa-eye-slash absolute right-2 text-2xl h-3/5 text-justify cursor-pointer hidden'
                onClick={(e) => handlePasswordHide(1)}
                id='eye-closed1'
              ></i>
            </div>
            {wrongPass && (
              <p className='text-red-600 text-xs pl-1 error'>
                {' '}
                the passwords don't match.{' '}
              </p>
            )}
          </div>

          <div className='mb-3 w-full'>
            <div className='flex w-full p-1'>
              <label
                htmlFor='confirm-password'
                className='text-sm font-extrabold w-full'
              >
                CONFIRM PASSWORD
              </label>
            </div>
            <div className='password-box login_inputs flex items-center relative'>
              <input
                type='password'
                className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-6'
                id='confirm-password'
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
              <i
                className='fa-regular fa-eye absolute right-2 text-2xl h-3/5 text-justify cursor-pointer'
                onClick={(e) => handlePasswordShow(2)}
                id='eyeicon2'
              ></i>
              <i
                className='fa-regular fa-eye-slash absolute right-2 text-2xl h-3/5 text-justify cursor-pointer hidden'
                onClick={(e) => handlePasswordHide(2)}
                id='eye-closed2'
              ></i>
            </div>
            {wrongPass && (
              <p className='text-xs text-red-600 text-x pl-1 error'>
                {' '}
                the passwords don't match.{' '}
              </p>
            )}
          </div>

          <div className='min-w-full flex justify-start items-center flex-col w-full p-2'>
            <button
              className='btn w-4/6 flex items-center justify-center h-11 rounded-3xl font-bold text-white'
              onClick={(e) => {
                handleRegister()
              }}
            >
              REGISTER USER
            </button>
            <Link
              href='/'
              className='m-6 text-blue-900 underline w-18 text-left text-sm font-medium hover:text-blue-800'
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
