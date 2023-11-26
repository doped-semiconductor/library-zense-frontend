'use client'
import Image from 'next/image'
import Navbar from './components/navbar/navbar'

export default function Home() {
  const getUser =  async()=>{
    let url = "http://localhost:5000/api/v1/auth/login";
    let config = {
      method:'get',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      credentials: 'include',
    }
    let response = await fetch(url,config);
    response = await response.json();
    console.log(response);
    if(response.loggedIn) window.alert(`email = ${response.user.email}`)
    else window.alert("Not logged in")
  }
  const logout = async()=>{
    let url = "http://localhost:5000/api/v1/auth/logout";
    let config = {
      method:'get',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      credentials: 'include',
    }
    let response = await fetch(url,config);
    response = await response.json();
    console.log(response);
    window.alert(`${response.message}, check getuser now`)
  }
  return (
    <>
    <Navbar></Navbar>
    <main className="flex min-h-screen items-center justify-center gap-3 p-24 bg-gray-300">
      {/* <p className='font-bold text-xl'> Home Page </p> */}
      <button onClick={getUser} className='text-black border-2 border-solid border-black p-2'>GET USER</button>
      <button onClick={logout} className='text-black border-2 border-solid border-black p-2'>LOGOUT</button>
    </main>
    </>
  )
}
