import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileData, selectFileLoading, selectVideoChoile, selectVideoData } from '../../features/AudioSlice';

const TextDocument3 = () => {
  const loading=useSelector(selectFileLoading)
  const file=useSelector(selectVideoChoile)
  const text=useSelector(selectVideoData)
 
  return (
    <div className='h-[300px] w-[36rem] mt-2 border rounded-lg'>
      {
        loading && file?
        <div className='flex items-center justify-center mt-[130px]'>
        <ScaleLoader color="#000" />
        </div>:
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '>{text.Text}</p>
       

      }
    </div>
  )
}

export default TextDocument3