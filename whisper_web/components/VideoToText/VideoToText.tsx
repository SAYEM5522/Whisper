import React, { useState } from 'react'
import LanguageList from '../AudioToText/LanguageList'
import SelectItem3 from '../AudioToText/SelectItem3'
import TextDocument3 from '../AudioToText/TextDocument3'

const VideoToAudio = () => {
  const [url,setUrl]=useState("")
  const t="transcribe"
  const params = new URLSearchParams();
  const data=new FormData()
  data.append("url",url)
  params.append('value', t);
  const provideVideo=()=>{
    fetch(`http://127.0.0.1:5000/Video?${params}`, {
    method: 'POST',
    body:data
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  }
  const YoutubeUrl=(e:any)=>{
   setUrl(e.target.value)
  }
  return (
    <div className='relative flex   justify-between'>
     <div className='relative flex items-center justify-center mt-3 h-16 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <input type={'text'} onChange={YoutubeUrl} className="h-16 w-full outline-none rounded-lg border  pl-4 placeholder: font-serif font-medium   " autoFocus placeholder='Add Your YouTube Video URL...'/>
    </div>
    <p onClick={provideVideo}>generate</p>
    <div className='absolute left-1 top-28 flex'>
        <TextDocument3/>
        <SelectItem3/>
    </div>
    <LanguageList/>
    </div>
  )
}

export default VideoToAudio