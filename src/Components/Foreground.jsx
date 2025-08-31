import React, { useRef } from 'react'
import Card from './Card'



const Foreground = () => {
  const container = useRef(null)
  const data=[
    { desc : "this is first card", fileSize : ".9mb", close : true , tag: {isOpen : true , tagTitle: "DownloadNow", color: "green"} },
    { desc : "this is second card", fileSize : ".3mb", close : false , tag: {isOpen : false , tagTitle: "Download", color: "blue"} },
    { desc : "this is second card", fileSize : ".4mb", close : false , tag: {isOpen : true , tagTitle: "DownloadNow", color: "red"} },
    { desc : "this is second card", fileSize : ".7mb", close : true , tag: {isOpen : true , tagTitle: "Upload", color: "purple"} }
  ]
  return (
    <div  >
        <div ref={container} className=" w-full h-full top-0 left-0 z-3 fixed flex flex-wrap gap-5">
          {data.map((items, index )=>(
            
            <Card key={index} data={items} reference={container} />

          ))}

    </div>
    </div>
  )
}

export default Foreground