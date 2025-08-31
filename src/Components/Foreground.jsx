import React from 'react'
import Card from './Card'

const Foreground = () => {
  const data=[
    { desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize : ".9mb", close : true , tag: {isOpen : true , tagTitle: "DownloadNow", color: "green"} }
  ]
  return (
    <div>
        <div className=" w-full h-full top-0 left-0 z-3 fixed">
           <Card />

    </div>
    </div>
  )
}

export default Foreground