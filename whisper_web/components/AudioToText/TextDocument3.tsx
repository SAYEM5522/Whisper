import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileData, selectFileLoading, selectVideoChoile } from '../../features/AudioSlice';

const TextDocument3 = ({text,language}:any) => {
  const loading=useSelector(selectFileLoading)
  const file=useSelector(selectVideoChoile)

  return (
    <div className='h-[300px] w-[36rem] border rounded-lg'>
      {
        loading && file?
        <div className='flex items-center justify-center mt-[130px]'>
        <ScaleLoader color="#000" />
        </div>:
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '>{text}</p>
       

      }
    </div>
  )
}

export default TextDocument3