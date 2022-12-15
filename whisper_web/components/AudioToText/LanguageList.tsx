import React from 'react'
import { LANGUAGES } from './Language'
const LanguageList = () => {
  return (
    <div>
      <p className='font-medium text-md'>Supported Language</p>
    <div className='h-[29rem] w-52 p-2  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden'>
      {
        LANGUAGES.map((item,index:number)=>{
          return(
            <div key={index} className='w-52 bg-gray-50 m-1 p-[1.5px] rounded-md text-center cursor-pointer text-[#A07855FF] italic font-serif' >
             <p className='first-letter: capitalize'>{item.language}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default LanguageList