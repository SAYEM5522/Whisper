import React from 'react'
import { BiCopy } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { selectAudioChoile, selectAudioLoading, selectFileData, selectFileLoading, selectRecordData } from '../../features/AudioSlice';
import { LANGUAGES } from './Language';
import useCopyToClipboard from './useCopyToClipboard';


const TextDocument2 = () => {
  const AudioChoice=useSelector(selectAudioChoile)
  const AudioLoding=useSelector(selectAudioLoading)
  const AudioText=useSelector(selectRecordData)
  const [value, copy] = useCopyToClipboard()

  const TextCopy=()=>{
    copy(AudioText.Text)
  }
  return (
    <div className='h-[300px] w-[36rem] relative border rounded-lg'>
       {
        LANGUAGES.map((item,index)=>{
          if (item.code===AudioText.language){
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
        AudioChoice && AudioLoding?
        <div className='flex items-center justify-center mt-[130px]'>
        <ScaleLoader className='' color="#000" />

        </div>:
        <p className='p-3 cursor-pointer font-serif text-base 
        font-normal first-letter:text-4xl first-letter:text-black  first-letter:mr-1  '>{AudioText.Text}</p>
        // :
        // <div className='flex items-center justify-center mt-[130px]'>
        // <ScaleLoader color="#000" />
      }
        </div>
        
       

      // }
    // </div>
  )
}

export default TextDocument2