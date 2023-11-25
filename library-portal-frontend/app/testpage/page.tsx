'use client'
import React from 'react'
import pageViewer from '../components/richViewer/viewer'

export default function testpage() {
  return (
    <div className='bg-gray-300 w-4/5 m-auto mt-2 mb-2'>
        { pageViewer() }
    </div>
  )
}
