import Image from 'next/image'
import Link from "next/link";
import Navbar1 from './navbar';

const Claimer = () => {
  return (
    <>
    <div className="w-screen">
      <Navbar1 />
      <div className="w-screen-lg ">
        <div className="w-[80%] mt-10 mx-auto flex flex-col md:flex-row flex-wrap justify-between">
        <div className="w-[100%] md:w-[45%] pt-5  mt-10 cardbg rounded-xl">
         <h1 className='texthead text-2xl px-3 font-bold'>Distribution 0</h1>
         <div className="py-10 px-3 flex justify-between mt-10">
           <div className="">
             <p className='texthead'>Token Name</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAVAX</h1>
             <p className='texthead'>Token Address</p>
             <h1 className='texthead text-xl font-bold '>0xE06f...08af</h1>
           </div>
           <div className="text-right">
             <p className='texthead'>Token Symbol</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAX</h1>
             <p className='texthead'>Token Decimals</p>
             <h1 className='texthead text-xl font-bold '>18f</h1>
           </div>
         </div>
        </div>
        <div className="w-full pt-5 md:w-[45%]  mt-10 cardbg rounded-xl">
         <h1 className='texthead text-2xl px-3 font-bold'>Distribution 0</h1>
         <div className="py-10 px-3 flex justify-between mt-10">
           <div className="">
             <p className='texthead'>Token Name</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAVAX</h1>
             <p className='texthead'>Token Address</p>
             <h1 className='texthead text-xl font-bold '>0xE06f...08af</h1>
           </div>
           <div className="text-right">
             <p className='texthead'>Token Symbol</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAX</h1>
             <p className='texthead'>Token Decimals</p>
             <h1 className='texthead text-xl font-bold '>18f</h1>
           </div>
         </div>
        </div>
         <div className="w-full pt-5 md:w-[45%]  mt-10 cardbg rounded-xl">
         <h1 className='texthead text-2xl px-3 font-bold'>Distribution 0</h1>
         <div className="py-10 px-3 flex justify-between mt-10">
           <div className="">
             <p className='texthead'>Token Name</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAVAX</h1>
             <p className='texthead'>Token Address</p>
             <h1 className='texthead text-xl font-bold '>0xE06f...08af</h1>
           </div>
           <div className="text-right">
             <p className='texthead'>Token Symbol</p>
             <h1 className='texthead text-xl font-bold pb-5'>AKITAX</h1>
             <p className='texthead'>Token Decimals</p>
             <h1 className='texthead text-xl font-bold '>18f</h1>
           </div>
         </div>
        </div>
        <div className=""></div>
        <div className=""></div>

      </div>
      </div>

    </div>
    </>
  )
}

export default Claimer