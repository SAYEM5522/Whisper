import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileData, selectFileLoading } from '../../features/AudioSlice';

const TextDocument2 = () => {
  const loading=useSelector(selectFileLoading)
  const fileTextInfo=useSelector(selectFileData)

  return (
    <div className='h-[300px] w-[36rem] border rounded-lg'>
      {
        loading?
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '></p>:
        <ScaleLoader color="#36d7b7" />
        
       

      }
    </div>
  )
}

export default TextDocument2