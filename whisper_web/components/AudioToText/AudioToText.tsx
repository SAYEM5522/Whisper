import React from 'react'
import { useSelector } from 'react-redux'
import { selectFileChoile } from '../../features/AudioSlice'
import ChoiceFile from './ChoiceFile'
import LanguageList from './LanguageList'
import SelectItem from './SelectItem'
import TextDocument from './TextDocument'

const AudioToText = () => {
  const file=useSelector(selectFileChoile)

  return (
    <div className='flex justify-between relative'>
       <div className='relative flex items-center justify-center mt-3 p-4 h-20 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <p className='flex-1 text-lg font-medium '>Choice Your Audio File  </p>
      <ChoiceFile/>
      
    </div>
    <div className='absolute left-1 top-28 flex'>
        <TextDocument/>

        <SelectItem/>
    </div>
      <LanguageList/>
    </div>
  )
}

export default AudioToText