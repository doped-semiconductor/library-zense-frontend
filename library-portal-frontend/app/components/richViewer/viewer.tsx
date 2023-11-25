'use client'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react'

export default function pageViewer() {
  const [content, setContent] = useState('')
  const onFetch = async () => {
    const res = await fetch('http://localhost:3008/get/pages/2')
    const pageDataStringified = await res.json()
    console.log(pageDataStringified.message)
    const pageData = JSON.parse(pageDataStringified.message)
    console.log(pageData)
    setContent(pageData.htmlContent)
  }

  useEffect(() => {
    // onFetch()
    setContent(`
    <div styles="width: fit-content; font-weight:bold; color: blue; margin: 10px auto;"> Hello 
        <p style="font-size: 1rem; color: green; margin: 10px 5px; font-family: sans-serif;"> 
            This is a para.
        </p>
    </div>`)
  }, [])

  console.log('content ==> ', content)

  return (
    <div className='min-w-full min-h-full w-full container bg-transparent'>
        <div className='min-h-screen min-h-full min-w-full flex items-stretch justify-start bg-transparent'>
            {parse(content)}
        </div>
    </div>
  )
}
