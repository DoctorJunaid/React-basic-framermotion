import { DownloadIcon, FileText } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
    <div >
      <div className="w-60 relative h-72 bg-zinc-600 rounded-[20px] overflow-hidden text-white p-4" >
        <FileText />
        <p className='text-sm leading-tight  font-semibold mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div className=" footer absolute bottom-0 left-0 w-full ">

          <div className='flex justify-between items-center w-full mb-5 px-4'>
            <h5>0.4mb</h5>
            <div className="w-8 h-8 bg-zinc-400 rounded-full flex justify-center items-center">
              <DownloadIcon size={20} color='#fff' />
            </div>


          </div>
          <div className=" bg-green-500 w-full py-4 flex justify-center  items-center">
            <h3 className='text-sm font-semibold'>Download Now </h3>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Card