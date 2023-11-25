import Image from 'next/image'
import Navbar from './components/navbar/navbar'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
      <p className='font-bold text-xl'> Home Page </p>
    </main>
    </>
  )
}
