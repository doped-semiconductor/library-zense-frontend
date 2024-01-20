'use client'
import Image from 'next/image'
import './registerpage.css'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { RegisterResponse } from '../../types'
const page = () => {
  // password meets the minimum length requirement and contains
  // at least one upper case letter, one lower case letter,one number, and one special character.
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const handlePasswordShow = (elementId: string) => {
    let eyeicon = document.getElementById('eyeicon' + '-' + elementId)
    let eyeClosed = document.getElementById('eye-closed' + '-' + elementId)
    let password = document.getElementById(elementId)
    eyeClosed?.classList.remove('hidden')
    eyeicon?.classList.add('hidden')
    password?.setAttribute('type', 'text')
  }

  const handlePasswordHide = (elementId: string) => {
    let eyeicon = document.getElementById('eyeicon' + '-' + elementId)
    let eyeClosed = document.getElementById('eye-closed' + '-' + elementId)
    let password = document.getElementById(elementId)
    eyeClosed?.classList.add('hidden')
    eyeicon?.classList.remove('hidden')
    password?.setAttribute('type', 'password')
  }

  const [signUpCredentials, setSignUpCredentials] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  })
  const [passwordError, setPasswordError] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return
    setSignUpCredentials({
      ...signUpCredentials,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    })

    if ((event.target as HTMLInputElement).id === 'confirmpassword') {
      if ((event.target as HTMLInputElement).value === '') {
        setPasswordError('')
      } else if (
        signUpCredentials.password !== (event.target as HTMLInputElement).value
      ) {
        setPasswordError('passwords do not match.')
        console.log(
          'password: ',
          signUpCredentials.password,
          '\nconfirmpassword: ',
          (event.target as HTMLInputElement).value,
          'passwords do not match.'
        )
      } else {
        let errormsg = regex.test(signUpCredentials.password)
          ? ''
          : 'password must contain at least one upper case letter, one lower case letter,one number, and one special character and should be of minimum 8 characters.'
        setPasswordError(errormsg)
        console.log('regex test: ', errormsg)
      }
    } else if (
      (event.target as HTMLInputElement).id === 'password' &&
      signUpCredentials.confirmpassword
    ) {
      if (
        signUpCredentials.confirmpassword !==
        (event.target as HTMLInputElement).value
      ) {
        setPasswordError('passwords do not match.')
        console.log(
          'password: ',
          (event.target as HTMLInputElement).value,
          '\nconfirmpassword: ',
          signUpCredentials.confirmpassword,
          'passwords do not match.'
        )
      } else {
        let errormsg = regex.test(signUpCredentials.confirmpassword)
          ? ''
          : 'password must contain at least one upper case letter, one lower case letter,one number, and one special character and should be of minimum 8 characters.'
        setPasswordError(errormsg)
        console.log('regex test: ', errormsg)
      }
    }
  }

  const handleClick = async () => {
    console.log(signUpCredentials)
    let signUpInfo = {
      email: signUpCredentials['email'],
      password: signUpCredentials['password'],
    }
    let url = 'http://localhost:5000/api/v1/auth/signup'
    let config: any = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include' as RequestCredentials,
      body: JSON.stringify(signUpInfo),
    }

    let result = await fetch(url, config)
    let response: RegisterResponse = await result.json()

    console.log(response)
    if (response?.error) {
      if (response?.error === 'User already exists')
        window.alert('User already exists with the given username/email id.')
      else if (response?.error === 'Something went wrong')
        window.alert('Something went wrong on Server. Please try again.')
    }

    if (response?.message) {
      window.alert('You have been Registered succesfully.')
    }
  }

  return (
    <div
      className={`signup-screen w-screen min-h-screen flex justify-center items-center`}
    >
      <div className='joinustext text-black flex flex-col items-center'>
        <h1 className='p-2 text-8xl font-semibold '>Join Us</h1>
        <h2 className='p-2 text-4xl font-semibold'>
          at IIITB's Library Portal
        </h2>
        <Link
          href='/login'
          className='mt-10 font-bold text-white btn rounded-xl p-4'
        >
          Already a Member? Login
        </Link>
      </div>
      <div className='signup rounded-2xl flex-col flex items-center p-4 gap-12 border-solid border-black border max-w-xl h-fit text-black'>
        <Image
          src='/logo.png'
          alt='IIITB logo'
          className='iiitb-logo'
          width={300}
          height={282}
        />

        {passwordError && (
          <div className='errormsg border-solid border rounded-l p-3 mb-6'>
            {passwordError}
          </div>
        )}

        <div className='signup_inputs flex-col flex items-center '>
          <h1 className=' p-1 text-xl font-semibold w-full'>Email</h1>
          <input
            type='text'
            id='email'
            onChange={handleChange}
            className='w-full h-12 text-l text-black mb-5'
          />

          <div className='flex w-full p-1'>
            <h1 className='text-xl font-semibold w-full'>Password</h1>
          </div>
          <div className='password-box signup_inputs flex items-center relative'>
            <input
              type='password'
              id='password'
              onChange={handleChange}
              className=' w-full h-12 text-l  text-black mb-5'
            />
            <i
              className='fa-regular fa-eye absolute right-2 text-2xl h-3/5 text-justify cursor-pointer'
              onClick={(e) => handlePasswordShow('password')}
              id='eyeicon-password'
            ></i>
            <i
              className='fa-regular fa-eye-slash absolute right-2 text-2xl h-3/5 text-justify cursor-pointer hidden'
              onClick={(e) => handlePasswordHide('password')}
              id='eye-closed-password'
            ></i>
          </div>
          <div className='flex w-full p-1'>
            <h1 className='text-xl font-semibold w-full'>Confirm Password</h1>
          </div>
          <div className='password-box signup_inputs flex items-center relative'>
            <input
              type='password'
              id='confirmpassword'
              onChange={handleChange}
              className=' w-full h-12 text-l text-black mb-5'
            />
            <i
              className='fa-regular fa-eye absolute right-2 text-2xl h-3/5 text-justify cursor-pointer'
              onClick={(e) => handlePasswordShow('confirmpassword')}
              id='eyeicon-confirmpassword'
            ></i>
            <i
              className='fa-regular fa-eye-slash absolute right-2 text-2xl h-3/5 text-justify cursor-pointer hidden'
              onClick={(e) => handlePasswordHide('confirmpassword')}
              id='eye-closed-confirmpassword'
            ></i>
          </div>

          <div className='flex justify-between w-full p-2'>
            <div className='flex items-center justify-center '>
              <input type='checkbox' className='w-5 h-5' />
              <h1 className='text-black font-medium pl-2'>REMEMBER ME</h1>
            </div>
            <button
              className='signup-btn w-28 h-11 rounded-sm font-semibold text-white'
              onClick={handleClick}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
