import React,{useState,useCallback} from 'react'
const HeaderItem=[
  {
    id:1,
    name:"RecordAudio"
  },
  {
    id:2,
    name:"AudioToText"
  },
  {
    id:3,
    name:"VideoToText"
  }
]

const Header = () => {
  const [acttiveIndex,setACtiveIndex]=useState(0)
  return (
    <div>
      <h2 className='font-semibold italic text-3xl py-3'>Whisper</h2>
    <div 
    className='max-w-full flex items-center'
    >
     
    {
      HeaderItem.map((item,index)=>{
        return(
          <div key={index} className={`${index===acttiveIndex ?'border-x border-t rounded-[3px]':'border-b hover:bg-[#EEEEEE] hover:rounded-sm '} cursor-pointer gray-400 px-4 py-3`}>
            <p onClick={()=>setACtiveIndex(index)} className={`${acttiveIndex===index?'text-black':'text-[#A43333]'} font-semibold `}>{item.name}</p>
          </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default Header