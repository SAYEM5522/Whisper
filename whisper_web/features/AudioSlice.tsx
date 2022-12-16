import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemSelection:"Transcribe",
  RecordItem:"Transcribe",
  fileLoading:false,
  RecordLoading:false,
  fileData:{
    Text:"",
    language:""
  } as any,
  VideoItem:"Transcribe",

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

  }
});

export const {
  setItemSelection,
  setRecordItem,
  setFileLoading,
  setRecordLoading,
  setFileData,
  setVideoItem
} = AudioSlice.actions

export const selectItem=(state:any)=>state.Audio.itemSelection
export const selectRecordItem=(state:any)=>state.Audio.RecordItem
export const selectFileLoading=(state:any)=>state.Audio.fileLoading
export const selectRecordLoading=(state:any)=>state.Audio.RecordLoading
export const selectFileData=(state:any)=>state.Audio.fileData
export const selectVideoItem=(state:any)=>state.Audio.VideoItem





export default AudioSlice.reducer