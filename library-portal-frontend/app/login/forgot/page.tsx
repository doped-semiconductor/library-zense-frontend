import Image from 'next/image'
import './forgot.css'

const page = () => {
  return (
    <div className={`login-screen w-screen h-screen flex justify-center items-center`}>
        <div className='login bg-white rounded-2xl flex-col flex items-center p-4 gap-10'>
            <Image src='/logo.png' alt='IIITB logo' width={300} height={282}/>
            <div className='login_inputs flex-col flex items-center '>
                <div className='helper-message border-solid border-black border rounded-xl flex mb-10'>
                    <div className='blue-marker w-16 h-full rounded-l-xl'></div>
                    <p className='p-3'>Please enter your username or email address. You will receive an email message with instructions on how to reset your password.</p>
                </div>
                <h1 className=' p-1 text-sm font-extrabold w-full'>ENTER YOUR USERNAME/ E-MAIL ADDRESS</h1>
                <input type="text" className='border-solid border-black border rounded-2xl w-full h-16 text-xl p-3 text-black mb-7' />
                <div className='w-full flex justify-end px-1'>
                <button className='btn px-5 h-11 rounded-3xl font-bold text-white' >GET NEW PASSWORD</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page