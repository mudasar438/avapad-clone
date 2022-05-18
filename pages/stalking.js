
 import Image from 'next/image'
import Link from "next/link";
import Navbar1 from './navbar';
import { useState } from 'react'


const Stacking = () => {
  const [stack, setStack] = useState(false)
  const [unstack, setunstack]= useState(false)
  const [name , setName] =useState("")


  const changStack = () =>{

    setStack(stack=> stack?false:true)
    setName(313)
    setunstack(false)


  }
  const changeUnstack = ()=>{
    setStack(false)
    setName(26551)
    setunstack(unstack => unstack ? false:true)

  }
  return (
   <>
      <div className="w-screen">
        <Navbar1 />
      <div className="w-[100%]  mx-auto py-10 flex flex-col  md:flex-row  justify-between ">
        <div className="w-[100%] md:w-[80%] ">
          <div className="w-[100%] flex flex-col  md:flex-row justify-around">
            <div className="w-[95%] mt-10 md:w-[25%] text-red-500 text-xl py-2 mx-auto px-3">
              <div className="borderbottom">
                <button className={` ${stack ?   "bordered text-red-400 p-2"  :"texthead p-2" } `} onClick={changStack}>STACK</button>
                <button className={` ${unstack ?   "bordered text-red-400 p-2"  :"texthead p-2" } `} onClick={changeUnstack}>UNSTACK</button>
              </div>
            </div> 
            <div className="w-[90%] mx-auto mt-10 md:w-[20%]  text-lg py-3 px-4 text-center cardbg rounded-2xl" >
            <div className="borderbottom">
                <button className="">STAKE XAKITA</button>
             
              </div>
              <button className='py-2  mx-4 texthead'>STAKE XAKITA</button>
            </div>
            <div className="w-[90%] mx-auto mt-10 md:w-[25%] text-lg  px-4 text-center cardbg rounded-2xl">
            <div className="borderbottom">
                <button className='py-2  mx-4 text-red-500'>Total XAKITA Staked</button>
             
              </div>
              <button className='py-2  mx-4 texthead text-2xl md:text-3xl'>0</button>
            </div>
            <div className="w-[90%] mx-auto mt-10 md:w-[20%] text-lg  px-4 text-center cardbg rounded-2xl">
            <div className="borderbottom">
                <button className='py-2  mx-4 text-red-500'>APY</button>
             
              </div>
              <button className='mt-5  mx-4 texthead text-2xl md:text-3xl'>10.0%</button>
            </div>
          </div>
          <div className="w-[80%] text-center md:w-[25%] mx-auto py-7">
            <p className='texthead  text-3xl'>Stake your XAKITA</p>
          </div>

          <div className="w-[90%]  mx-auto py-3">
            <div className=" w-[80%] md:w-[36%] mx-auto flex  justify-between cardbg py-3 rounded-t-xl">
              <p className='texthead p-2'>Amount</p>
              <button className='text-white text-left mt-8 px-4 py-1 rounded-md bg-red-500 mr-5'>MAX</button>
            
           
            </div>
            <div className=" w-[80%] md:w-[36%] mx-auto flex  justify-between cardbg py-3 rounded-b-lg">
              <p className='text-white text-xl px-5'>{name}</p>
            </div>

            <div className="w-[80%] md:w-[36%] mx-auto  mt-5 text-center bg-red-500 p-2 rounded-lg md:rounded-xl">
             
              <button>Connect wallet</button>
            </div>

          </div>
        </div>
        <div className="w-full md:w-[20%] md:blackborder ">
        <div className=" w-[85%] mt-10 md:w-[90%]   text-lg py-5 px-4  cardbg rounded-2xl mx-auto" >
            <div className="borderbottom">
                <button className='py-2  mx-4 texthead'>Staked</button>
             
              </div>
              <button className='py-2 text-3xl mx-4 texthead'>0</button>
            </div>
            <div className= " w-[85%] mb-10 md:w-[90%]  text-lg py-5 px-4  cardbg rounded-2xl mt-10 mx-auto" >
            <div className="borderbottom">
                <button className='py-2  mx-4 texthead'>Rewards</button>
             
              </div>
              <button className='py-2 text-3xl mx-4 texthead'>0</button>
              <br />
              <div className="w-[95%] md:w-[90%] bg-red-500 md:rounded-xl text-center">

              <button className='py-2 text-xl   mx-4 texthead'>Harvest</button>
              </div>
            </div>
            </div>
            </div>
        
   

      


      </div>
   
   </>
  )
}

export default Stacking