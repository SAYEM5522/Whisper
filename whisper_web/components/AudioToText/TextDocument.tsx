import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileChoile, selectFileData, selectFileLoading } from '../../features/AudioSlice';

const TextDocument = () => {
  const loading=useSelector(selectFileLoading)
  const fileTextInfo=useSelector(selectFileData)
  const file=useSelector(selectFileChoile)
  return (
    <div className=' h-[300px] w-[36rem] border rounded-lg'>
      {
        loading && file?
        <div className='flex items-center justify-center mt-[130px]'>
        <ScaleLoader className='' color="#000" />

        </div>
        :
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '>{fileTextInfo.Text}</p>
      }
    </div>
  )
}

export default TextDocument