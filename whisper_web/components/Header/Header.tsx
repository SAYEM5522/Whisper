import React,{useState,useCallback} from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import { useTheme } from 'next-themes'
import Record from '../Record/Record'
import VideoToAudio from '../VideoToText/VideoToText'
import AudioToText from '../AudioToText/AudioToText'

const HeaderItem=[
  {
    id:1,
    name:"Record Audio"
  },
  {
    id:2,
    name:"Audio To Text"
  },
  {
    id:3,
    name:"Video To Text"
  }
]

const Header = () => {
  const [mode,setMode]=useState(false)
  const { theme, setTheme } = useTheme()
  const [acttiveIndex,setACtiveIndex]=useState(0)
  const ModeChange=useCallback(()=>{
    setMode(!mode)
    setTheme(theme === 'light' ? 'dark' : 'light')
  },[mode,theme])
  const ItemSelect=useCallback((index:number)=>{
    setACtiveIndex(index)

  },[acttiveIndex])
  const HeaderIdentification=()=>{
    if(acttiveIndex===0){
      return(
        <div>
        <Record/>
        </div>
       )
       
    
  }
  else if(acttiveIndex===1){
    return(
      <div>
        <AudioToText/>
      </div>
    )
  }
  else{
    return(
      <div>
        <VideoToAudio/>
      </div>
    )
  }
  return null
}
  return (
    <div>
      <div className='flex items-center'>
      <h2 className='font-semibold italic text-3xl py-3'>Whisper</h2>
      <div onClick={ModeChange}>
      {
        mode?
        <HiOutlineMoon size={24} className="ml-5 mt-2 cursor-pointer"/>:
        <BsSun  size={24} className="ml-5 mt-2 cursor-pointer"/>

      }
      </div>
      </div>
    <div 
    className={`flex items-center`}
    >
     <div  className={` flex items-center `}>
    {
      HeaderItem.map((item,index)=>{
        return(
          <div key={index} className={`${index===acttiveIndex ?'border-x border-t rounded-[3px]':'border-b hover:bg-[#EEEEEE] hover:rounded-sm '} cursor-pointer gray-400 px-5 py-1 `}>
            <p onClick={()=>ItemSelect(index)} className={`${acttiveIndex===index?'text-black dark:text-white':'text-[#A43333] dark:text-[#f70511]'} font-semibold `}>{item.name}</p>
          </div>
        )
      })
    }
    </div>
    <div className='border-b w-[580px] mt-[55px]'/>
    </div>
    <div>
      <HeaderIdentification/>
      </div>
    </div>
  )
}

export default Header