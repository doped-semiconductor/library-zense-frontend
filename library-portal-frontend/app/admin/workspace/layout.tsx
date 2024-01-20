import React from 'react'
import Header from '@/app/components/header/header'
import NavBar from '@/app/components/navbar/navbar'
import SideBar from '@/app/components/sidebar/sidebar'

export default function AdminWorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>

      <main className='flex h-fit bg-gray-100'>
        <SideBar></SideBar>
        <div className='w-full h-fit p-0 pl-5 pt-3 m-0 bg-transparent'>
          {children}
        </div>
      </main>
    </>
  )
}
