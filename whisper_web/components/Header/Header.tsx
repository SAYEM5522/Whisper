import React,{useState,useCallback} from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import { useTheme } from 'next-themes'

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
          <div key={index} className={`${index===acttiveIndex ?'border-x border-t rounded-[3px]':'border-b hover:bg-[#EEEEEE] hover:rounded-sm '} cursor-pointer gray-400 px-5 py-3 `}>
            <p onClick={()=>setACtiveIndex(index)} className={`${acttiveIndex===index?'text-black dark:text-white':'text-[#A43333] dark:text-[#f70511]'} font-semibold `}>{item.name}</p>
          </div>
        )
      })
    }
    </div>
    <div className='border-b w-[590px] mt-12'/>
    </div>
    </div>
  )
}

export default Header