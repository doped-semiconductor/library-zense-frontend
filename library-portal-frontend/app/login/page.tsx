"use client"
import Image from 'next/image'
import './loginpage.css'
import Link from 'next/link'
const page = () => {
  const handlePasswordShow = ()=>{
    let eyeicon = document.getElementById("eyeicon")
    let eyeClosed = document.getElementById("eye-closed")
    let password = document.getElementById("password")
    eyeClosed?.classList.remove("hidden");
    eyeicon?.classList.add("hidden");
    password?.setAttribute("type","text");
  }
  const handlePasswordHide = ()=>{
    let eyeicon = document.getElementById("eyeicon")
    let eyeClosed = document.getElementById("eye-closed")
    let password = document.getElementById("password")
    eyeClosed?.classList.add("hidden");
    eyeicon?.classList.remove("hidden");
    password?.setAttribute("type","password");
  }
  
  return (
    <div className={`login-screen w-screen h-screen flex justify-center items-center`}>
        <div className='login bg-white rounded-2xl flex-col flex items-center p-4 gap-16'>
            <Image src='/logo.png' alt='IIITB logo' width={300} height={282}/>
            <div className='login_inputs flex-col flex items-center '>
                <h1 className=' p-1 text-sm font-extrabold w-full'>SIGN IN USING USERNAME/ E-MAIL ADDRESS</h1>
                <input type="text" className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-7' />
                <div className='flex w-full p-1'>
                <h1 className='text-sm font-extrabold w-full'>PASSWORD</h1>
                <Link href='/login/forgot' className='w-3/4 text-right text-sm font-medium'>FORGOT PASSWORD?</Link>
                </div>
                <div className='password-box login_inputs flex items-center relative'>
                <input type="password" className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-6' id="password" />
                <i className="fa-regular fa-eye absolute right-2 text-2xl h-3/5 text-justify cursor-pointer" onClick={handlePasswordShow} id="eyeicon"></i>
                <i className="fa-regular fa-eye-slash absolute right-2 text-2xl h-3/5 text-justify cursor-pointer hidden" onClick={handlePasswordHide} id="eye-closed"></i>
                </div>
                <div className='flex justify-between w-full p-2'>
                  <div className='flex items-center justify-center '>
                    <input type="checkbox" className='w-5 h-5' />
                    <h1 className='text-black font-medium pl-2'>REMEMBER ME</h1>
                  </div>                 
                  <button className='btn w-28 h-11 rounded-3xl font-bold text-white' >LOGIN</button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default page