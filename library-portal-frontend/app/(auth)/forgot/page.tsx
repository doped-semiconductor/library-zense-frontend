import Image from 'next/image'
import './forgot.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className={`login-screen w-screen min-h-screen flex justify-center items-center`}>
      <div className='welcometext text-black flex flex-col justify-center items-center '>
        <h1 className='p-2 text-9xl font-semibold '>Welcome</h1>
        <h2 className='p-2 text-5xl font-semibold'>to IIITB's Library Portal</h2>
        <Link href='/register' className='mt-10 font-bold text-white btn rounded-xl p-4'>Not a Member? SignUp</Link>
      </div>
      <div className='login rounded-2xl flex-col flex items-center p-4 gap-16 border-solid border-black border max-w-xl max-h-screen text-black'>
          <Image src='/logo.png' alt='IIITB logo' width={300} height={282}/>
          <div className='login_inputs flex-col flex items-center '>
            <div className='border-solid border-black border rounded-l p-3 mb-6'>
            Please enter your username or email address. You will receive an email message with instructions on how to reset your password.
            </div>
              <h1 className='text-xl font-semibold w-full'>Username</h1>
              <input type="text" className='w-full h-14 text-l text-black mb-7' />
              <div className='flex justify-between w-full p-2'>
                <div className='flex items-center justify-center '>
                  <Link href='/login' className='text-black font-medium pl-2'>
                  <i className="fa-solid fa-arrow-left"></i>&nbsp;Back to Login</Link>
                </div>                 
                <button className='btn p-3 rounded-xl font-bold text-white' >Get New Password</button> 
              </div>
          </div>
      </div>
    </div>
  )
}

export default page