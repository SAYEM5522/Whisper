import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemSelection:"Transcribe",
  RecordItem:"Transcribe",
  fileLoading:true,
  RecordLoading:false,
  fileData:{
    Text:"",
    language:""
  } as any,
  VideoItem:"Transcribe",
  fileChoice:false,
  VideoChoice:false,
  VideoLoading:true,
  WarningIndicator:false,
  videoData:{
    Text:"",
    language:""
  } as any,
  AudioChoice:false,
  AudioLoading:true,
  RecordData:{
    Text:"",
    language:""
  } as any,
}

const AudioSlice = createSlice({
  name: "AudioSlice",
  initialState,
  reducers: {
    setItemSelection:(state,action)=>{
      state.itemSelection=action.payload.itemSelection
    },
    setRecordItem:(state,action)=>{
      state.RecordItem=action.payload.RecordItem
    },
    setFileLoading:(state,action)=>{
    state.fileLoading=action.payload.fileLoading
    },
    setRecordLoading:(state,action)=>{
      state.RecordLoading=action.payload.RecordLoading
      },
      setFileData:(state,action)=>{
        state.fileData.Text=action.payload.Text,
        state.fileData.language=action.payload.language

        },
        setVideoItem:(state,action)=>{
          state.VideoItem=action.payload.VideoItem
        },
        setFileChoice:(state,action)=>{
          state.fileChoice=action.payload.fileChoice
        },
        setVideoChoice:(state,action)=>{
          state.VideoChoice=action.payload.VideoChoice
        },
        setVideoLoading:(state,action)=>{
          state.VideoLoading=action.payload.VideoLoading
          },
          
          setWarningIndicator:(state,action)=>{
            state.WarningIndicator=action.payload.WarningIndicator
            },
            setVideoData:(state,action)=>{
              state.videoData.Text=action.payload.Text,
              state.videoData.language=action.payload.language
      
              },
              setAudioChoice:(state,action)=>{
                state.AudioChoice=action.payload.AudioChoice
              },
              setAudioLoading:(state,action)=>{
                state.AudioLoading=action.payload.AudioLoading
                },
                setRecordData:(state,action)=>{
                  state.RecordData.Text=action.payload.Text,
                  state.RecordData.language=action.payload.language
          
                  },

  }
});

export const {
  setItemSelection,
  setRecordItem,
  setFileLoading,
  setRecordLoading,
  setFileData,
  setVideoItem,
  setFileChoice,
  setVideoChoice,
  setVideoLoading,
  setWarningIndicator,
  setVideoData,
  setAudioChoice,
  setAudioLoading,
  setRecordData
} = AudioSlice.actions

export const selectItem=(state:any)=>state.Audio.itemSelection
export const selectRecordItem=(state:any)=>state.Audio.RecordItem
export const selectFileLoading=(state:any)=>state.Audio.fileLoading
export const selectRecordLoading=(state:any)=>state.Audio.RecordLoading
export const selectFileData=(state:any)=>state.Audio.fileData
export const selectVideoItem=(state:any)=>state.Audio.VideoItem
export const selectFileChoile=(state:any)=>state.Audio.fileChoice
export const selectVideoChoile=(state:any)=>state.Audio.VideoChoice
export const selectVideoLoading=(state:any)=>state.Audio.VideoLoading
export const selectWarningIndicator=(state:any)=>state.Audio.WarningIndicator
export const selectVideoData=(state:any)=>state.Audio.videoData
export const selectAudioChoile=(state:any)=>state.Audio.AudioChoice
export const selectAudioLoading=(state:any)=>state.Audio.AudioLoading
export const selectRecordData=(state:any)=>state.Audio.RecordData














export default AudioSlice.reducer