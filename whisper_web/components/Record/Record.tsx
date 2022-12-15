import React from 'react'
import LanguageList from '../AudioToText/LanguageList'
import {BsMic} from "react-icons/bs"
import TextDocument from '../AudioToText/TextDocument'
import SelectItem from '../AudioToText/SelectItem'
const Record = () => {
  return (
    <div className='flex flex-1 relative  justify-between'>
    <div className='flex items-center justify-center mt-3 p-4 h-14 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <p className='flex-1 text-lg font-medium '>Record Your Audio</p>
      <BsMic size={30} className='ml-auto cursor-pointer'/>
    </div>
    <div className='absolute left-1 top-28 flex'>
        <TextDocument/>
        <SelectItem/>
    </div>
    <LanguageList/>
    </div>
  )
}

export default Record