'use client'
import { useEffect } from 'react'
import "./navbar.css"
import { GetNavInfoResponse, NavInfo, SectionType } from '@/app/types/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
const NavBar = () => {
  let navBarInfoList: NavInfo[] = [];

  function toggleDropDown(dropdownMenuID: string): void {
    const dropdownMenu: HTMLDivElement = document.getElementById(`${dropdownMenuID}`) as HTMLDivElement
    let classList = dropdownMenu?.classList
    if(classList?.contains("dropdown-show")) {
      dropdownMenu?.classList.remove("dropdown-show")
      dropdownMenu?.classList.add("dropdown-hide")
    } else {
      dropdownMenu?.classList.remove("dropdown-hide")
      dropdownMenu?.classList.add("dropdown-show")
    }
  }

  function handleNavClick(Node: NavInfo, new_url_path: string) {
    const router = useRouter()
    router.push(new_url_path, {
      query: {
        section_id: Node.id
      }
    })
  }
  useEffect(()=>{
    const getNavInfo = async () => {
      const url = `http://localhost:5000/api/content/app/get-nav-info/`
      const config: RequestInit = {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include' as RequestCredentials
      }
      const result = await fetch(url, config)
      const status = result.status
     
      let navInfoList: NavInfo[];
      if(result.status===401) {
        const response: GetNavInfoResponse = await result.json() as GetNavInfoResponse
        console.error("Server responded with:", response.message)
        navInfoList = []
      } else if(result.status===200) {
        const response: GetNavInfoResponse = await result.json() as GetNavInfoResponse
        navInfoList = (response.payload)? response.payload : []
      } else {
        console.error("Client: Something went wrong at the server.") 
        navInfoList = []
      }

      return navInfoList;
    }

     getNavInfo().then((response: NavInfo[]) => {
      navBarInfoList = response
      return
    }).catch((error) => {
      navBarInfoList = []
      console.error(error)
      return
    })
  },[])

  return (
    <nav
      id='sticky-nav'
      className='p-24 pt-0 pb-0 min-h-fit min-w-full w-full bg-blue-950'
    >
      {/* nav-content goes here*/}
      <ul className='flex justify-start'>
        <Link key={'Home'} href='/' className='text-white font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer'> Home </Link>
        <Link key={'Login'} href='/login' className='text-white font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer'> Login </Link>
        <Link key={'Register'} href='/register' className='text-white font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer'> Register </Link>
      </ul>
    </nav>
  )
}

export default NavBar


// {
//           navBarInfoList.map((node, index) => {
//             if(node.type===SectionType.Page){
//               return (
//                 <h3 key={node.key} onClick={(e)=>{e.preventDefault(); handleNavClick(node, `/pages/${node.url_segment}`)}} className='text-white font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer'> {node.label} </h3>
//               )
//             } else if(node.type===SectionType.External) {
//               return (
//                 <Link key={node.key} href={node.ext_url? node.ext_url : '/error/notfound'} className='text-white font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer'> {node.label} </Link>
//               )
//             } else if(node.type===SectionType.ParentSection){
//               return (
//                 <div key={node.key} className='text-white relative font-semibold font-sans p-5 text-lg hover:bg-blue-900 hover:cursor-pointer' onClick={()=> toggleDropDown(("dropdown" + node.key))}>
//                   <span className='p-0 m-0'> {node.label} </span>
//                   <div id={`dropdown${node.key}`} className='dropdown-hidden absolute top-[4.5rem] -left-[17.5%] pb-5 w-[135%] px-1 drop-shadow-xl border-gray-400 border-t-0 rounded z-50'>
//                       {
//                         node.children?.map((childNode, index)=> {
//                           return (
//                           <span onClick={(e) => {handleNavClick(childNode, `/pages/${node.url_segment}/${childNode.url_segment}`)}} className='text-gray-800 w-full block px-4 mt-1 pt-2 pb-1 text-base border-b-1 border-gray-200 hover:border-orange-600 hover:bg-slate-200 font-normal myTextShadow'> {childNode.label} </span>
//                           )
//                         })
//                       }
//                   </div>
//                 </div>
//               )
//             }
//           })
//         }
