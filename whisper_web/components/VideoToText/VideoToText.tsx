import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectVideoItem, setVideoChoice, setVideoData, setVideoLoading, setWarningIndicator } from '../../features/AudioSlice'
import LanguageList from '../AudioToText/LanguageList'
import SelectItem3 from '../AudioToText/SelectItem3'
import TextDocument3 from '../AudioToText/TextDocument3'
import WarningVideo from '../AudioToText/WarningVideo'

const VideoToAudio = () => {
  const [url,setUrl]=useState<string>('')
  // const [videoData,setVideoData]=useState({
  //   text:"",
  //   language:"",
  // })
  const VideoT=useSelector(selectVideoItem)
  const dispatch=useDispatch()
  const params = new URLSearchParams();
  const data=new FormData()
  data.append("url",url)
  params.append('value', VideoT);
  const provideVideo=useCallback(()=>{
    if(url===""){
      return null
    }
  dispatch(
    setVideoChoice({
      VideoChoice:true
    })
  ),
  dispatch(
    setVideoLoading({
      VideoLoading:true
    })
  ),
  dispatch(
    setWarningIndicator({
      WarningIndicator:true
    })
  )


    fetch(`http://127.0.0.1:5000/Video?${params}`, {
    method: 'POST',
    body:data
  })
    .then((res) => res.json())
    .then((data) =>{
     dispatch(
      setVideoData({
        Text:data.Text,
        language:data.language
      })
      )
    dispatch(
      setVideoLoading({
        VideoLoading:false
      })
    ),
    dispatch(
      setVideoChoice({
        VideoChoice:false
      })
    ),
    dispatch(
      setWarningIndicator({
        WarningIndicator:false
      })
    )

  })
    .catch((err) => console.error(err));
  },[VideoT,url])
  const YoutubeUrl=(e:any)=>{
   setUrl(e.target.value)
  }
  return (
    <div >
    <div className='relative flex   justify-between'>
     
     <div className='relative flex items-center justify-center mt-3 h-16 bg-white w-full rounded-lg mr-8 shadow-lg shadow-gray-300 border '>
      <input type={'text'} onChange={YoutubeUrl} className="h-16 w-full outline-none rounded-lg border  pl-4 placeholder: font-serif font-medium   " autoFocus placeholder='Add Your YouTube Video URL...'/>
    </div>
    <button className='absolute left-2 top-20 p-1 mt-1 bg-black h-8 w-20 rounded-md text-white' onClick={provideVideo}>generate</button>
    <div className='absolute left-1 top-28 flex'>
        <TextDocument3  />
        <SelectItem3/>
    </div>
    
    
    <LanguageList/>
    </div>
    </div>
  )
}

export default VideoToAudio