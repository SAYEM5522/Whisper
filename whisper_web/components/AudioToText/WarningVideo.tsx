import React from 'react'
import {RxCross2} from "react-icons/rx"
import { useDispatch } from 'react-redux'
import { setWarningIndicator } from '../../features/AudioSlice'
const WarningVideo = () => {
  const dispatch=useDispatch()

  const Cancle=()=>{
   dispatch(
    setWarningIndicator({
      WarningIndicator:false
    })
   )
  }
  return (
    <div className='relative flex items-center justify-center -mt-10 h-12 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
    <p className='flex-1 text-md font-medium text-center font-serif '>
      This might takes some time since the video need to download first.
    </p>
     <RxCross2 className='mr-4 cursor-pointer' size={24} onClick={Cancle}/>
  </div>
  )
}

export default WarningVideo