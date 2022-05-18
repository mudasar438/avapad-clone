import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
import {metamask, wallet} from '../public/imgs/images'

const Shwobox = () => {
  return (
    <>
    
    <div className="w-[40%] mx-auto mt-20 p-3 cardbg rounded-lg">
      <div className="text-2xl text-white font-bold flex justify-between m-5">
        <p>Select a wallet</p>
       
        < AiOutlineClose />  </div>
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
    
    </>
  )
}

export default Shwobox