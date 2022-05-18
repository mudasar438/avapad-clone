// import Head from 'next/head'
import Shwobox from "./showbox";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { dogs, info, infologo, logo } from "../public/imgs/images";
// import Link from "next/link";
import Navbar1 from "./navbar";
import { useState } from "react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <div className="w-screen">
        <Navbar1 />
        {/* <Shwobox /> */}

        {/* start Hero section in avopad */}

        <div className="  flex-col  text-center mx-autojustify-center max-w-screen-xl mx-auto PY-5">
          <div className="w-[80%] mx-auto">
            <div className="text-2xl md:text-4xl w-[100%] mx-auto font-bold text-white my-10  ">
              <p className="leading-normal">
                AVAPAD IS THE FIRST LAUNCHPAD BUILT ON AND PARTNERED WITH THE
                AVAX NETWORK
              </p>
            </div>
            <div className="text-xl w-[100%] md:text-2xl md:w-[80%] mx-auto  text-white my-10  ">
              <p className="text-gray-400">
                AVAPAD will empower crypto currency projects with the ability to
                distribute tokens and raise liquidity.
              </p>
            </div>
            <div className=" text-xl p-3 ">
              <button className="graybtn rounded-md py-2 px-7">
                {" "}
                APPLY FOR IDO
              </button>
            </div>
            <div className=" text-xl p-3 ">
              <button className="redbtn rounded-md py-2 px-7">
                {" "}
                VIEW ALL PROJECTS
              </button>
            </div>
            <div className=" text-xl p-3 ">
              <button className="graybtn rounded-md py-2 px-7">
                {" "}
                APPLY FOR TOKEN AIRDROP
              </button>
            </div>
          </div>
        </div>

    
    

        <div className="flex text-center mx-autojustify-center max-w-screen-xl mx-auto PY-5">
          <div className="w-[80%] mx-auto">
            <div className="text-2xl text-center md:text-4xl font-bold text-white py-20">
              <p>
                The world's fastest-growing public chain has officially
                partnered with the world s most lucrative launchpad.
              </p>
            </div>

            <div className="  w-full mx-auto py-10">
              <p className="text-3xl relative backFont  md:text-6xl font-bo ld b text-white">
                ABOUT US
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-left mx-autojustify-center max-w-screen-xl mx-auto">
          <div className="  md:w-[80%]  flex flex-col md:flex-row  text-center md:text-left md:justify-center mx-auto">
            <div className="w-full p-5 md:w-[50%]">
              <div className="py-3">
                <h3 className="text-xl texthead">WHAT IS AVAPAD?</h3>
                <p className="textcolor text-lg md:text-xl py-2 ">
                  Avapad is the only IDO platform built on and partnered with
                  the Avax Network.
                </p>
                <p className="textcolor  text-l md:text-lg py-2">
                  Avapad will empower cryptocurrency projects with the ability
                  to distribute tokens and raise liquidity.
                </p>
              </div>
              <div className="py-1">
                <h3 className="text-xl texthead">WHY CHOOSE US?</h3>
                <p className="textcolor py-2 text-l md:text-xl ">
                  Following the success of AVAPAD, the AVAPAD Team has partnered
                  with Avax to bring its popular low barrier to entry IDO
                  solutions to to the Avax network that will incentivize and
                  reward all token holders in a way that is inclusive and fair.
                </p>
                <p className="texthead py-2 ">
                  One of the fundamental flaws of existing launchpads is
                  acquiring enough tokens to participate in the ecosystem can be
                  prohibitive. This can be based on a first come first serve
                  basis where automated bots can fill the whitelist spots in a
                  matter of seconds. Avapad addresses this issue and is designed
                  for fair decentralized launches
                </p>
              </div>
            </div>

            <div className="w-[80%] p-5 md:w-[50%] mx-auto relative ">
              {/* <div className="w-1/2  mx-auto p-12 mt-10  "></div> */}
              <div className=" w-full  dborder md:w-[90%]  mx-auto absolute myrotate h-[75%]"></div>
                <div className="w-full d2border md:w-[80%] top-10 left-10 h-96 mx-auto absolute myrotate "></div>
                <div className=" left-20 top-10 relative">
                    <Image src={dogs} alt="" width={273} height={273}  />
                  </div>
                
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full mx-auto py-10">
          <div className="w-[80%] mx-auto py-20">
            <div className="  mx-auto ">
              <p className="relative backFont2 flex justify-center font-bold text-2xl md:text-5xl b text-white">
                THE AVAPAD THIRD SYSTEM
              </p>
            </div>
            <p className="texthead text-center text-xl pt-20 md:pt-8">
              Avapad offers a public white list lottery tier, weighted lottery
              tiers and guaranteed allocation tiers
            </p>
          </div>

          <div className="w-[80%] md:w-[50%] mx-auto ">
            <div className="w-[80%] md:w-[60%] mx-auto ">
              <Image className=" " src={info} alt="" width={356} height={356} />
            </div>
          </div>
          <div className="w-[70%] md:w-[50%] mx-auto  py-5 mt-10">
            <p className="text-gray-400 text-3xl text-center font-bold py-5">
              GUARANTEED ALLOCATION TIERS
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-auto mb-10">
          <div className="w-full borderbottom ">
            <div className="w-[80%] md:w-[30%] mx-auto flex justify-around text-red-400 text-xl">
              <button className="px-5 md:py-2  ">AKITAX Tiers</button>
              <button className="bordered py-2 ">XAKITA Tiers</button>
            </div>
          </div>
          <div className="w-[100%]  mt-10 flex flex-wrap justify-center ">
            {/* <div className="w-[30%] cardbg rounded-xl my-8 mx-3">
               <div className="w-[90%] mx-auto">
                 <div className="borderbottom ">
                   <h1 className='text-red-400 text-2xl text-center font-bold py-5'>Tire1</h1>
                   </div>
                 <div className=" text-center borderbottom">
                   <p className='texthead  py-2text-xl'>Staking Requirement</p>
                   <h1 className='textcolor py-2 text-4xl '>250,000</h1>
                   <p className='textcolor py-2 text-xl'>1 Guaranteed Allocation</p>
                   <p className='textcolor py-2'>Pool Weight</p>
                   <p className='textcolor py-2'>4%</p>

                 </div>
                 <div className="w-[60%] mx-auto py-4">
                 <div className="bg-red-500 px-5 py-2 text-center align-middle my-3 rounded-md">
           <button className='textcolor text-lg'>Connect Wallet</button>
         </div>
                 </div>
      

               </div>

             </div> */}
            
            {[1, 2, 3, 4].map((value) => (
              <div className=" w-full md:w-[30%]  cardbg rounded-xl my-8 mx-3">
                <div className="w-[90%] mx-auto">
                  <div className="borderbottom ">
                    <h1 className="text-red-400 text-2xl text-center font-bold py-5">
                      Tire1
                    </h1>
                  </div>
                  
                  <div className=" text-center borderbottom">
                    <p className="texthead  py-2text-xl">Staking Requirement</p>
                    <h1 className="textcolor py-2 text-4xl ">250,000</h1>
                    <p className="textcolor py-2 text-xl">
                      1 Guaranteed Allocation
                    </p>
                    <p className="textcolor py-2">Pool Weight</p>
                    <p className="textcolor py-2">4%</p>
                  </div>
                  <div className="w-[60%] mx-auto py-4">
                    <div className="bg-red-500 px-5 py-2 text-center align-middle my-3 rounded-md">
                      <button className="textcolor text-lg">
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen-lg ">
          <div className="w-[50%] mx-auto  py-5 mt-10">
            <p className="text-gray-400 text-3xl text-center font-bold py-5">
              ROUND 2 - FCFS ROUND
            </p>
          </div>

          <div className="w-full md:w-[80%] mx-auto  flex flex-col md:flex-row">
            <div className="w-[80%] mx-auto md:w-[50%]">
              <div className="">
                <Image
                  className=" "
                  src={infologo}
                  alt=""
                  width={546}
                  height={546}
                />
              </div>
            </div>
            <div className="w-[80%] text-center md:w-[45%] my-auto  mx-auto">
              <p className="texthead text-l md:text-lg">
                In round 2, the unsold tokens from the first round are made
                available on a FCFS basis, to every one. The tier members will
                get an additional amount. This round will be opened few hours
                before the sale endtime.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen-lg">
          <div className="w-[80%] mx-auto py-20">
            <div className="  mx-auto ">
              <p className="relative backFont3 text-center flex justify-center font-bold text-2xl md:text-5xl b text-white">
                STRATIGAIC PARTINER
              </p>
            </div>
          </div>
          <p className="w-[80%] mx-auto texthead text-center text-l md:text-lg cardbg rounded-xl p-8">
            "The Avapad team is very strong and knowledgeable, they consist of
            some of the top players in the space. We are looking forward to
            taking this collaboration to new heights", Justin Sun, Founder of
            AVAX and CEO of BitTorrent.
          </p>

          <div className="w-[80%] mx-auto py-20">
            <div className="  mx-auto ">
              <p className="relative backFont3 text-center flex justify-center font-bold text-2xl md:text-5xl py-10 text-white">
                INCUBATOR AND INVESTMENT PARTNER
              </p>
            </div>
          </div>
          <div className=" w-[80%] cardbg rounded-xl mx-auto py-5">
            <p className=" mx-auto texthead text-center text-l md:text-lg  p-4">
              "The Avapad team is very strong and knowledgeable, they consist of
              some of the top players in the space. We are looking forward to
              taking this collaboration to new heights", Justin Sun, Founder of
              AVAX and CEO of BitTorrent.
            </p>
            <p className=" mx-auto texthead text-center text-lg">
              We are the only VC with in house developers, designers, marketers,
              influencers, traders, legal and launch pads.
            </p>
            <p className=" mx-auto texthead text-center text-lg  p-4">
              We help by not only bringing capital and partners, but every
              aspect of your project from tokenomics to post launch marking.
            </p>
            <div className="w-[70%] md:w-[15%]  px-2 py-2 text-center align-middle my-3 rounded-md mx-auto redbtn">
              <button className=" text-lg">Learn More</button>
            </div>
          </div>
        </div>

        <div className="w-screen-lg">
          <div className="w-[80%] mx-auto py-20">
            <div className="  mx-auto ">
              <p className="relative backFont4 text-center flex justify-center font-bold text-3xl md:text-5xl py-10 text-white">
                CONTACT
              </p>
            </div>
            <div className="w-[100%] md:w-[50%] mx-auto  md:p-10 mt-10 ">
              <div className=" w-full md:w-[90%] dborder p-5 md:p-10 mx-auto">
                <div className="w-full md:w-[100%] d2border p-8 md:p-12 mx-auto">
                  <div className="textcolor text-l md:text-xl py-12 align-middle pl-10">
                    <p>Contact Support</p>
                    <p>Join us on Telegram</p>
                    <p>Follow our Twitter</p>
                    <p>www.avapad.network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
//gakja fkljafgkldgja