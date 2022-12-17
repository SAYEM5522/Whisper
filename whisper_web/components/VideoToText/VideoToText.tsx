import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectVideoItem, setVideoChoice, setVideoLoading } from '../../features/AudioSlice'
import LanguageList from '../AudioToText/LanguageList'
import SelectItem3 from '../AudioToText/SelectItem3'
import TextDocument3 from '../AudioToText/TextDocument3'

const VideoToAudio = () => {
  const [url,setUrl]=useState("")
  const [videoData,setVideoData]=useState({
    text:"",
    language:"",
  })
  const VideoT=useSelector(selectVideoItem)
  const dispatch=useDispatch()
  const params = new URLSearchParams();
  const data=new FormData()
  data.append("url",url)
  params.append('value', VideoT);
  const provideVideo=useCallback(()=>{
  dispatch(
    setVideoChoice({
      VideoChoice:true
    })
  ),
  dispatch(
    setVideoLoading({
      VideoLoading:true
    })
  )


    fetch(`http://127.0.0.1:5000/Video?${params}`, {
    method: 'POST',
    body:data
  })
    .then((res) => res.json())
    .then((data) =>{
     setVideoData({
      text:data.Text,
      language:data.language
    })
    dispatch(
      setVideoLoading({
        VideoLoading:false
      })
    ),
    dispatch(
      setVideoChoice({
        VideoChoice:false
      })
    )

  })
    .catch((err) => console.error(err));
  },[VideoT,url])
  const YoutubeUrl=(e:any)=>{
   setUrl(e.target.value)
  }
  console.log(url)
  return (
    <div className='relative flex   justify-between'>
     <div className='relative flex items-center justify-center mt-3 h-16 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <input type={'text'} onChange={YoutubeUrl} className="h-16 w-full outline-none rounded-lg border  pl-4 placeholder: font-serif font-medium   " autoFocus placeholder='Add Your YouTube Video URL...'/>
    </div>
    <p onClick={provideVideo}>generate</p>
    <div className='absolute left-1 top-28 flex'>
        <TextDocument3 text={videoData.text} language={videoData.language} />
        <SelectItem3/>
    </div>
    <LanguageList/>
    </div>
  )
}

export default VideoToAudio