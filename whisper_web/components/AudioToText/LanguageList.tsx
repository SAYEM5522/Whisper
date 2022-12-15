import React from 'react'
import { LANGUAGES } from './Language'
const LanguageList = () => {
  return (
    <div>
      <p className='font-medium text-md'>Supported Language</p>
    <div className='h-[29rem] w-60 p-2  overflow-y-auto [&::-webkit-scrollbar]:hidden'>
      {
        LANGUAGES.map((item,index:number)=>{
          return(
            <div key={index}>
             <p>{Object.values(item)}</p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default LanguageList