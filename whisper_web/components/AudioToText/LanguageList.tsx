import React from 'react'
import { LANGUAGES } from './Language'
const LanguageList = () => {
  return (
    <div>
      <p className='font-medium text-md'>Supported Language</p>
    <div className='h-[28.6rem] w-56 p-2  overflow-y-auto [&::-webkit-scrollbar]:hidden border'>
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