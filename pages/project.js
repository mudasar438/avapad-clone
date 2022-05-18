import Image from 'next/image'
import Link from "next/link";
import Navbar1 from './navbar';
import { useState } from 'react'
const Project = () => {
  const [name , setName] =useState("currently Upcomming")
  const [value, setValue] = useState(false)
  const [active, setActive] = useState(false)
  const [end, setEnd] = useState(false)
  


  const changeName = ()=>{
    setName(' projects currently Upcomming')
    setValue(value=> value?false:true)
    console.log(value)
    setActive(false)
    setEnd(false)

  }
  const changeActive = ()=>{
    setValue(false)
    setEnd(false)
    setName("No projects currently open")
    setActive(active=> active?false:true)


  }
  const changeEnd=()=>{
    setValue(false)
    setActive(false)
    setName("No projects currently closed")
    setEnd(end=> end?false:true)

  }
  return ( <>
  <div className="w-screen">
    <Navbar1 />


 
    
    <div className="w-screen-lg">
      <div className="w-[80%]  mx-auto py-10 ">

    <div className="w-[80%] md:w-[30%]  flex justify-around borderbottom text-xl pb-3">
      <button className={` ${value ?   "bordered text-red-400 py-2"  :"texthead" } `} onClick={changeName}>Upcoming</button>
      <button className={`${active ?   "bordered text-red-400 py-2"  :"texthead" } `} onClick={changeActive}>Active</button>
      <button className={`' ${end ?   "bordered text-red-400 py-2"  :"texthead" } '`} onClick={changeEnd}>Ended</button>
    </div>
    </div>
    </div>
    <div className="w-[80%]  mx-auto py-20 ">
      <h1 className='text-center text-xl textcolor' >{name}</h1>
    </div>
    </div>
    </>
  )
}

export default Project