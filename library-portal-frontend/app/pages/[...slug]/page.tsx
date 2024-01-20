'use client'
import Header from "@/app/components/header/header"
import NavBar from "@/app/components/navbar/navbar"
import { useState } from "react"
import parse from "html-react-parser"

export default function contentPage({
  params,
}: {
  params: {
    slug: string[],
    query: {
      section_id: string
    }
  }
}) {
  const [content, setContent] = useState('')
  const id: string = params.query.section_id
  const getHTMLPage = async () => {
    const url = `http://localhost:5000/api/content/section/${id}/htmlContent`
    const config:RequestInit = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include' as RequestCredentials
    }
    const result = await fetch(url, config)
    const response = await result.json()
    if(result.ok && result.status===200) {
      setContent(response.payload.htmlContent)
    } else if(result.status===401) {
      console.log('Unauthorized')
    } else if(result.status===500) {
      console.error("Server responded with : ",response.message, "\nError message: ", response.error)
    }
  }

  if(params.slug.length===0){
    return(
      <>
        <Header></Header>
        <NavBar></NavBar>
      
        <div className=' bg-gray-300 text-black w-screen h-screen text-xl font-medium pt-20'>
          <span className='text-6xl block font-bold w-fit m-auto mt-0 mb-0'>404 </span> 
          <div className='block font-bold w-fit m-auto mb-2'>
          <span className='text-3xl font-bold w-fit m-auto mt-2 mb-2'>Oops!</span> &nbsp;&nbsp;&nbsp;
          <span className='text-1xl w-fit m-auto mt-0 mb-0'>This page could not be found</span>
          </div>
        </div>
      </>
    )

  } else if(params.slug.length===1){
    return (
     <>
        <Header></Header>
        <NavBar></NavBar>
        <main className='min-h-screen p-20 pt-10 bg-gray-300'>
          <div className='page-content m-auto mt-3 w-full bg-white p-16 pt-16 text-justify'>
              {parse(content)}
          </div>
        </main>
    </>
  )
  } else if(params.slug.length===2) {
    return (
     <>
        <Header></Header>
        <NavBar></NavBar>
        <main className='min-h-screen p-20 pt-10 bg-gray-300'>
          <div className='page-content m-auto mt-3 w-full bg-white p-16 pt-16 text-justify'>
              {parse(content)}
          </div>
        </main>
    </>
    )
  } 
}
