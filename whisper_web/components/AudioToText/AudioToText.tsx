import React from 'react'
import ChoiceFile from './ChoiceFile'
import LanguageList from './LanguageList'

const AudioToText = () => {
  return (
    <div className='flex justify-between'>
       <div className='relative flex items-center justify-center mt-3 p-4 h-20 bg-white w-full rounded-lg mr-8 shadow-xl shadow-gray-300 border '>
      <p className='flex-1 text-lg font-medium '>Choice Your Audio File  </p>
      <ChoiceFile/>
      
    </div>
      <LanguageList/>
    </div>
  )
}

export default AudioToText