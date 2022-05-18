
import {logo} from '../public/imgs/images'
import Image from 'next/image'
import {AiOutlineClose} from 'react-icons/ai'
import {metamask, wallet} from '../public/imgs/images'
import Link from "next/link";
import {RiMenuFill} from 'react-icons/ri'
import { useState } from 'react';
// import Model from './Model';

const Navbar1 = () => {
  const [icon, setIcon] = useState (false)
  const [box, setBox] = useState(false)

function showicon (){
    
      setIcon(icon=> icon?false:true)
    }

   
    const [showModal, setShowModal] = useState(false);


  
  return (
    <div className="w-screen">
       <div className=" md:w-[100%] bgcolor sticky top-0 drop-shadow-2xl border text-white mx-auto p-3">
       <div className=" w-full mx-auto">
         <div className=" flex flex-col md:flex-row w-[100%] md:mx-auto  md:w-[90%]  md:justify-end">
           <div className="w-full   flex justify-between ">

         <div className="  md:w-[30%]  ">
           <Link href="/">
           <a>
           <Image
              className=" "
              src={logo}
              alt=""
              width={230}
              height={57}
              
            />
           </a>
           </Link>
        
        </div>
          <RiMenuFill  className='md:hidden text-2xl mt-5' onClick={()=>showicon()}/>
           </div>
    
        <div className=" flex flex-row w-full md:flex-row md:justify-around   pr-5 md:w-[100%] ">
         <ul className={ `${icon?' flex ':'hidden'} md:flex md:flex-row md:px-5 my-3 navbtn  font-bold text-xl `} >
           <li className='px-2 md:px-5'>
             <Link href="/project"><a >Project</a></Link>
           </li>
           <li className=' px-2 md:px-5'>
             <Link href="/stalking"><a >Staking</a></Link>
           </li>
           <li className='px-2 md:px-5'> 
             <Link href="/claimer"><a >Claimer</a></Link>
           </li>
         </ul>
         <div className="w-[100%]  md:w-[30%] bg-red-500 p-2 md:px-5 text-center  my-3 rounded-md">
           <button className=' text-sm md:text-l' onClick={() => setShowModal(true)}>Connect Wallet</button>
          {/* <Model/> */}
         </div>
        </div>

         </div>
        
        </div>
   
       </div>
        

       {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative   mx-auto w-[40%]">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full cardbg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between  rounded-t">
                 
                  <button
                    className=" ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  flex-auto">
                         <div className="text-2xl text-white font-bold flex justify-between m-2">
                     <p>Select a wallet</p>
       
                     < AiOutlineClose   onClick={() => setShowModal(false)}/>  </div>
                 <div className=" text-xl text-white bg-red-400 m-5 p-3 rounded-lg flex justify-between">
                  <button>Install Metamask</button>
                            <Image
                                    className="rounded-lg "
                                    src={metamask}
                                    alt=""
                                    width={30}
                                    height={30}
                                  />
                              
      </div>
      <div className="text-xl text-white bg-red-400 m-5 p-3 rounded-lg flex justify-between"><button>Wallet Connect</button>
                    <Image
                            className="rounded-lg "
                            src={wallet}
                            alt=""
                            width={30}
                            height={30}    
                          />
      </div>
    </div>
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </div>
  )
}

export default Navbar1;