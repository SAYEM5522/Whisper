import React from 'react'
import ChoiceFile from './ChoiceFile'
import LanguageList from './LanguageList'

const AudioToText = () => {
  return (
    <div className='flex items-center justify-between'>
      <ChoiceFile/>
      <LanguageList/>
    </div>
  )
}

export default AudioToText