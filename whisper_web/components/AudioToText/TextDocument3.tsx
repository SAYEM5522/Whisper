import React from 'react'
import { BiCopy } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectFileData, selectFileLoading, selectVideoChoile, selectVideoData } from '../../features/AudioSlice';
import { LANGUAGES } from './Language';
import useCopyToClipboard from './useCopyToClipboard';


const TextDocument3 = () => {
  const loading=useSelector(selectFileLoading)
  const file=useSelector(selectVideoChoile)
  const text=useSelector(selectVideoData)
  const [value, copy] = useCopyToClipboard()
  const TextCopy=()=>{
    copy(text.Text)
  }
 
  return (
    <div className='h-[300px] w-[36rem] mt-2 relative border rounded-lg'>
       {
        LANGUAGES.map((item,index)=>{
          if (item.code===text.language){
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
        <ScaleLoader color="#000" />
        </div>:
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '>{text.Text}</p>
       

      }
    </div>
  )
}

export default TextDocument3