'use client'
import Image from 'next/image'
import Header from './components/header/header'
import { GetUserResponse, LogoutResponse } from './types'
import NavBar from './components/navbar/navbar'
import NextDesktopNavBar from './components/betterNavbar/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavInfo } from './types/api'

export default function Home() {

  const [navinfo, setNavinfo] = useState([]);

  useEffect(() => {
    
    const fetchdata = async ()=>{
      let url = "http://localhost:5000/api/content//app/get-nav-info"
      let config = {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      let result = await fetch(url, config)
      let response: any = await result.json() 
      // console.log(response.payload) 
      setNavinfo(response.payload);
    }

    fetchdata();
  }, [])
  

  const getUser = async () => {
    let url = 'http://localhost:5000/api/v1/auth/login'
    let config = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include' as RequestCredentials,
    }
    let result = await fetch(url, config)
    let response: GetUserResponse = await result.json()
    console.log(response)
    if (response.loggedIn) window.alert(`email = ${response.user.email}`)
    else window.alert('Not logged in')
  }
  const logout = async () => {
    let url = 'http://localhost:5000/api/v1/auth/logout'
    let config = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include' as RequestCredentials,
    }
    let result = await fetch(url, config)
    let response: LogoutResponse = await result.json()
    console.log(response)
    window.alert(`${response.message}, check getuser now`)
  }

  return (
    <>
      <Header></Header>
      <NavBar navBarInfoList={navinfo}  ></NavBar>


      <main className='min-h-screen p-20 pt-10 bg-gray-300'>

        <div className='page-content m-auto mt-3 w-full bg-white p-16 pt-16 text-justify'>
        <h1 className='text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto necessitatibus, ex adipisci optio iure doloribus? Nobis nemo possimus cumque et beatae quae unde dignissimos iste atque accusamus ab cum veritatis, eius tenetur distinctio. Possimus officia voluptates iure exercitationem magnam voluptatibus eum dolores illo laboriosam pariatur, expedita aliquam alias nulla autem modi culpa mollitia explicabo obcaecati asperiores et minima vitae repudiandae odit ab! Amet dicta eaque provident, unde corrupti quo libero! Veniam at nihil voluptatibus cupiditate, tempora minus corrupti provident dolores similique consequuntur animi a adipisci voluptatem alias quis! Architecto at quam voluptatum dignissimos, delectus distinctio possimus? Totam cumque provident illo molestiae quisquam, aut assumenda, nulla quasi enim quibusdam nemo alias quam, autem quidem distinctio impedit mollitia ea quas praesentium labore corporis quod natus deleniti laborum. Dignissimos ducimus natus odio voluptatum voluptas numquam debitis, minima assumenda ipsa ad aspernatur provident culpa accusamus, necessitatibus molestias. Laborum in, consequuntur cumque nemo natus, suscipit, asperiores repellendus magni ut dicta quod quam! Doloremque asperiores aut praesentium itaque eius ratione ipsum dolore voluptate consectetur, nobis distinctio recusandae expedita tempora aspernatur blanditiis ab minus voluptatem deserunt eligendi? Incidunt repudiandae minima non facilis molestiae, ratione odit aperiam alias amet ab adipisci necessitatibus laborum maxime rem esse omnis minus ad assumenda vero facere. Veniam corporis asperiores odit inventore possimus ut in, nemo repudiandae ipsum iste qui eius, reiciendis nesciunt omnis! Eum neque dicta mollitia provident cumque similique, delectus, corporis modi animi adipisci earum eaque consequuntur quis vero rerum ipsam harum soluta itaque incidunt nesciunt expedita natus beatae! Aspernatur corporis fuga dolores ipsum quis culpa aut ea eos eligendi necessitatibus provident esse rerum laboriosam, dolorum voluptatem. Obcaecati, dolorum nulla. Quidem provident incidunt rerum ullam illum quisquam recusandae voluptatem autem id dicta mollitia ad corporis ut, nesciunt esse cumque eos pariatur laboriosam perspiciatis illo obcaecati veritatis porro architecto expedita. Explicabo nemo iure deleniti a, dignissimos expedita sunt mollitia vel fugit quis molestiae ipsum quibusdam sed, soluta vero accusamus accusantium officia natus? Quidem iste dolores cum veritatis molestias tempora. Dolorem commodi repellat, excepturi et dolorum ipsa praesentium laborum sit distinctio. Odio sequi placeat architecto nesciunt necessitatibus quos totam quasi nostrum magni! Ipsam aliquam commodi error praesentium harum sunt odit neque tempora quod eveniet atque quibusdam eaque, accusamus odio officia. Porro sint sapiente minima pariatur voluptates repellendus ducimus animi laborum ab ipsam molestias nulla debitis temporibus distinctio autem nam voluptate rerum, expedita nisi alias sed earum, veritatis ut architecto? Voluptatibus, facere in.</h1>

        <h1 className='text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto necessitatibus, ex adipisci optio iure doloribus? Nobis nemo possimus cumque et beatae quae unde dignissimos iste atque accusamus ab cum veritatis, eius tenetur distinctio. Possimus officia voluptates iure exercitationem magnam voluptatibus eum dolores illo laboriosam pariatur, expedita aliquam alias nulla autem modi culpa mollitia explicabo obcaecati asperiores et minima vitae repudiandae odit ab! Amet dicta eaque provident, unde corrupti quo libero! Veniam at nihil voluptatibus cupiditate, tempora minus corrupti provident dolores similique consequuntur animi a adipisci voluptatem alias quis! Architecto at quam voluptatum dignissimos, delectus distinctio possimus? Totam cumque provident illo molestiae quisquam, aut assumenda, nulla quasi enim quibusdam nemo alias quam, autem quidem distinctio impedit mollitia ea quas praesentium labore corporis quod natus deleniti laborum. Dignissimos ducimus natus odio voluptatum voluptas numquam debitis, minima assumenda ipsa ad aspernatur provident culpa accusamus, necessitatibus molestias. Laborum in, consequuntur cumque nemo natus, suscipit, asperiores repellendus magni ut dicta quod quam! Doloremque asperiores aut praesentium itaque eius ratione ipsum dolore voluptate consectetur, nobis distinctio recusandae expedita tempora aspernatur blanditiis ab minus voluptatem deserunt eligendi? Incidunt repudiandae minima non facilis molestiae, ratione odit aperiam alias amet ab adipisci necessitatibus laborum maxime rem esse omnis minus ad assumenda vero facere. Veniam corporis asperiores odit inventore possimus ut in, nemo repudiandae ipsum iste qui eius, reiciendis nesciunt omnis! Eum neque dicta mollitia provident cumque similique, delectus, corporis modi animi adipisci earum eaque consequuntur quis vero rerum ipsam harum soluta itaque incidunt nesciunt expedita natus beatae! Aspernatur corporis fuga dolores ipsum quis culpa aut ea eos eligendi necessitatibus provident esse rerum laboriosam, dolorum voluptatem. Obcaecati, dolorum nulla. Quidem provident incidunt rerum ullam illum quisquam recusandae voluptatem autem id dicta mollitia ad corporis ut, nesciunt esse cumque eos pariatur laboriosam perspiciatis illo obcaecati veritatis porro architecto expedita. Explicabo nemo iure deleniti a, dignissimos expedita sunt mollitia vel fugit quis molestiae ipsum quibusdam sed, soluta vero accusamus accusantium officia natus? Quidem iste dolores cum veritatis molestias tempora. Dolorem commodi repellat, excepturi et dolorum ipsa praesentium laborum sit distinctio. Odio sequi placeat architecto nesciunt necessitatibus quos totam quasi nostrum magni! Ipsam aliquam commodi error praesentium harum sunt odit neque tempora quod eveniet atque quibusdam eaque, accusamus odio officia. Porro sint sapiente minima pariatur voluptates repellendus ducimus animi laborum ab ipsam molestias nulla debitis temporibus distinctio autem nam voluptate rerum, expedita nisi alias sed earum, veritatis ut architecto? Voluptatibus, facere in.</h1>

        <h1 className='text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto necessitatibus, ex adipisci optio iure doloribus? Nobis nemo possimus cumque et beatae quae unde dignissimos iste atque accusamus ab cum veritatis, eius tenetur distinctio. Possimus officia voluptates iure exercitationem magnam voluptatibus eum dolores illo laboriosam pariatur, expedita aliquam alias nulla autem modi culpa mollitia explicabo obcaecati asperiores et minima vitae repudiandae odit ab! Amet dicta eaque provident, unde corrupti quo libero! Veniam at nihil voluptatibus cupiditate, tempora minus corrupti provident dolores similique consequuntur animi a adipisci voluptatem alias quis! Architecto at quam voluptatum dignissimos, delectus distinctio possimus? Totam cumque provident illo molestiae quisquam, aut assumenda, nulla quasi enim quibusdam nemo alias quam, autem quidem distinctio impedit mollitia ea quas praesentium labore corporis quod natus deleniti laborum. Dignissimos ducimus natus odio voluptatum voluptas numquam debitis, minima assumenda ipsa ad aspernatur provident culpa accusamus, necessitatibus molestias. Laborum in, consequuntur cumque nemo natus, suscipit, asperiores repellendus magni ut dicta quod quam! Doloremque asperiores aut praesentium itaque eius ratione ipsum dolore voluptate consectetur, nobis distinctio recusandae expedita tempora aspernatur blanditiis ab minus voluptatem deserunt eligendi? Incidunt repudiandae minima non facilis molestiae, ratione odit aperiam alias amet ab adipisci necessitatibus laborum maxime rem esse omnis minus ad assumenda vero facere. Veniam corporis asperiores odit inventore possimus ut in, nemo repudiandae ipsum iste qui eius, reiciendis nesciunt omnis! Eum neque dicta mollitia provident cumque similique, delectus, corporis modi animi adipisci earum eaque consequuntur quis vero rerum ipsam harum soluta itaque incidunt nesciunt expedita natus beatae! Aspernatur corporis fuga dolores ipsum quis culpa aut ea eos eligendi necessitatibus provident esse rerum laboriosam, dolorum voluptatem. Obcaecati, dolorum nulla. Quidem provident incidunt rerum ullam illum quisquam recusandae voluptatem autem id dicta mollitia ad corporis ut, nesciunt esse cumque eos pariatur laboriosam perspiciatis illo obcaecati veritatis porro architecto expedita. Explicabo nemo iure deleniti a, dignissimos expedita sunt mollitia vel fugit quis molestiae ipsum quibusdam sed, soluta vero accusamus accusantium officia natus? Quidem iste dolores cum veritatis molestias tempora. Dolorem commodi repellat, excepturi et dolorum ipsa praesentium laborum sit distinctio. Odio sequi placeat architecto nesciunt necessitatibus quos totam quasi nostrum magni! Ipsam aliquam commodi error praesentium harum sunt odit neque tempora quod eveniet atque quibusdam eaque, accusamus odio officia. Porro sint sapiente minima pariatur voluptates repellendus ducimus animi laborum ab ipsam molestias nulla debitis temporibus distinctio autem nam voluptate rerum, expedita nisi alias sed earum, veritatis ut architecto? Voluptatibus, facere in.</h1>

        <h1 className='text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto necessitatibus, ex adipisci optio iure doloribus? Nobis nemo possimus cumque et beatae quae unde dignissimos iste atque accusamus ab cum veritatis, eius tenetur distinctio. Possimus officia voluptates iure exercitationem magnam voluptatibus eum dolores illo laboriosam pariatur, expedita aliquam alias nulla autem modi culpa mollitia explicabo obcaecati asperiores et minima vitae repudiandae odit ab! Amet dicta eaque provident, unde corrupti quo libero! Veniam at nihil voluptatibus cupiditate, tempora minus corrupti provident dolores similique consequuntur animi a adipisci voluptatem alias quis! Architecto at quam voluptatum dignissimos, delectus distinctio possimus? Totam cumque provident illo molestiae quisquam, aut assumenda, nulla quasi enim quibusdam nemo alias quam, autem quidem distinctio impedit mollitia ea quas praesentium labore corporis quod natus deleniti laborum. Dignissimos ducimus natus odio voluptatum voluptas numquam debitis, minima assumenda ipsa ad aspernatur provident culpa accusamus, necessitatibus molestias. Laborum in, consequuntur cumque nemo natus, suscipit, asperiores repellendus magni ut dicta quod quam! Doloremque asperiores aut praesentium itaque eius ratione ipsum dolore voluptate consectetur, nobis distinctio recusandae expedita tempora aspernatur blanditiis ab minus voluptatem deserunt eligendi? Incidunt repudiandae minima non facilis molestiae, ratione odit aperiam alias amet ab adipisci necessitatibus laborum maxime rem esse omnis minus ad assumenda vero facere. Veniam corporis asperiores odit inventore possimus ut in, nemo repudiandae ipsum iste qui eius, reiciendis nesciunt omnis! Eum neque dicta mollitia provident cumque similique, delectus, corporis modi animi adipisci earum eaque consequuntur quis vero rerum ipsam harum soluta itaque incidunt nesciunt expedita natus beatae! Aspernatur corporis fuga dolores ipsum quis culpa aut ea eos eligendi necessitatibus provident esse rerum laboriosam, dolorum voluptatem. Obcaecati, dolorum nulla. Quidem provident incidunt rerum ullam illum quisquam recusandae voluptatem autem id dicta mollitia ad corporis ut, nesciunt esse cumque eos pariatur laboriosam perspiciatis illo obcaecati veritatis porro architecto expedita. Explicabo nemo iure deleniti a, dignissimos expedita sunt mollitia vel fugit quis molestiae ipsum quibusdam sed, soluta vero accusamus accusantium officia natus? Quidem iste dolores cum veritatis molestias tempora. Dolorem commodi repellat, excepturi et dolorum ipsa praesentium laborum sit distinctio. Odio sequi placeat architecto nesciunt necessitatibus quos totam quasi nostrum magni! Ipsam aliquam commodi error praesentium harum sunt odit neque tempora quod eveniet atque quibusdam eaque, accusamus odio officia. Porro sint sapiente minima pariatur voluptates repellendus ducimus animi laborum ab ipsam molestias nulla debitis temporibus distinctio autem nam voluptate rerum, expedita nisi alias sed earum, veritatis ut architecto? Voluptatibus, facere in.</h1>
        </div>
      </main>
      
    </>
  )
}
