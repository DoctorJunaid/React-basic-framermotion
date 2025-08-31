import { DownloadIcon, FileText, X } from 'lucide-react'
import { motion, scale } from "motion/react"

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple : "bg-purple-500"
 
};
const Card = ({data,reference}) => {
  return (
    <div >
      <motion.div drag whileDrag={{scale: 1.2}} dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}dragElastic={0.2} dragConstraints={reference} className="w-60 relative h-72 bg-zinc-600 rounded-[20px] overflow-hidden text-white p-4" >
        <FileText />
        <p className='text-sm leading-tight  font-semibold mt-5'>{data.desc}</p>
        <div className=" footer absolute bottom-0 left-0 w-full ">

          <div className='flex justify-between items-center w-full mb-5 px-4'>
            <h5>{data.fileSize}</h5>

            <div className="w-8 h-8 bg-zinc-400 rounded-full flex justify-center items-center">

              { data.close ? <X /> : <DownloadIcon size={20} color='#fff' /> }
            </div>


          </div>
          {data.tag.isOpen &&  (<div className= {`${colorMap[data.tag.color]} w-full py-4 flex justify-center  items-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div> )}
         

        </div>

      </motion.div>

    </div>
  )
}

export default Card