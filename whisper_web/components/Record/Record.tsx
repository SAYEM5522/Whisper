import React, { useState } from 'react'
import LanguageList from '../AudioToText/LanguageList'
import {BsMic} from "react-icons/bs"
import TextDocument2 from '../AudioToText/TextDocument2'
import MicRecorder from 'mic-recorder-to-mp3';
import SelectItem2 from '../AudioToText/SelectItem2'
const Record = () => {
const[record,setRecord]=useState<boolean>(false)
  const openRecord=()=>{
  setRecord(true)
  }
  const recorder = new MicRecorder({
    bitRate: 128
  });
  const [audioR,setAudioR]=useState({
    // isRecording: false,
    blobURL: '',
  //  isBlocked: false,
  })
  const [file, setFile] = useState<File>();

 const start=()=>{  recorder.start().then(() => {
    
  }).catch((e:any) => {
    console.error(e);
  });}

 const stop=()=>{ recorder
.stop()
.getMp3().then(([buffer, blob]:any) => {
  const file = new File(buffer, 'me-at-thevoice.mp3', {
    type: blob.type,
    lastModified: Date.now()
  });
 
  const player = new Audio(URL.createObjectURL(file));
  setAudioR({
    blobURL:player.src,
  })
  setFile(file)
  setRecord(false)
 
}).catch((e:any) => {
  alert('We could not retrieve your message');
  console.log(e);
});}
console.log(file)
const Generate=()=>{
  if(file===null){
    return null
  }
  fetch('http://127.0.0.1:5000/translate', {
    method: 'POST',
    body:file
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

  return (
    
    <div className='flex flex-1 relative  justify-between'>
      {
        record?
      <div className='flex justify-center w-full'>
      <p onClick={stop} className=' bg-[#A07855FF] h-8 w-20 rounded-md text-white text-center mt-2' >Stop</p>
      <BsMic  onClick={start} color={"red"} size={30} className='ml-auto cursor-pointer mr-11 mt-2 '/>
      </div>
      :
   <div className='flex items-center justify-center mt-3 p-4 h-14 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <p className='flex-1 text-lg font-medium '>Record Your Audio</p>
      <BsMic onClick={openRecord} size={30} className='ml-auto cursor-pointer'/>
    </div>

      }
      <div className='absolute left-0 top-[75px] '>
      <audio className='w-[47rem]' src={audioR.blobURL} controls />
      </div>
      <button className='absolute left-2 top-36 p-1 -mt-2 bg-black h-8 w-20 rounded-md text-white' onClick={Generate}>generate</button>

    
    <div className='absolute left-1 top-44 flex'>
        <TextDocument2/>
        <SelectItem2/>
    </div>
    <LanguageList/>
    </div>
  )
}

export default Record