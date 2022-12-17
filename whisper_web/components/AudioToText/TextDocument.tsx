import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileChoile, selectFileData, selectFileLoading } from '../../features/AudioSlice';
import useCopyToClipboard from './useCopyToClipboard';
import {BiCopy} from "react-icons/bi"
import {IoMdCheckmark} from "react-icons/io"
import { LANGUAGES } from './Language';
const TextDocument = () => {
  const [value, copy] = useCopyToClipboard()
  const loading=useSelector(selectFileLoading)
  const fileTextInfo=useSelector(selectFileData)
  const file=useSelector(selectFileChoile)
  const TextCopy=()=>{
    copy(fileTextInfo.Text)
  }

  return (
    <div className=' h-[300px] w-[36rem]  border rounded-lg relative'>
      {
        LANGUAGES.map((item,index)=>{
          if (item.code===fileTextInfo.language){
            return(
              <p className='text-center font-serif text-md first-letter:capitalize'>Detected Language: {item.language?.toUpperCase()}</p>
            )
           }
           
        })
      }

      {
        value?
      <IoMdCheckmark className='absolute right-2 top-2 bottom-2 cursor-pointer ' color='green' size={26}/>
         :
         <BiCopy onClick={TextCopy} className='absolute right-2 top-2 bottom-2 cursor-pointer ' size={26}/>

      }
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