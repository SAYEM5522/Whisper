
import React, { useCallback, useState } from 'react'
import {HiOutlineChevronDown} from "react-icons/hi"
import { useDispatch, useSelector } from 'react-redux';
import {  selectRecordItem, setRecordItem } from '../../features/AudioSlice';

const ItemList=[
  {
    id:1,
    name:"Transcribe"
  },
  {
    id:2,
    name:"Translate"
  },
  {
    id:3,
    name:"Detect Language"
  },
]
const SelectItem2 = () => {
   const dispatch=useDispatch()
   const selectedRecord=useSelector(selectRecordItem)
   const [open,setOpen]=useState<boolean>(false)
   const PopUp=useCallback(()=>{
    setOpen(!open)
   },[open])
  return (
    <div className='relative'>
     <div onClick={PopUp} className=' h-9 w-36 border flex items-center p-2 justify-evenly cursor-pointer ml-2 rounded-md'>
      <p className='text-sm'>{selectedRecord}</p>
      <HiOutlineChevronDown/>

     </div>
     {
      open?
<div className='border h-24 w-36 rounded-sm absolute left-2 cursor-pointer'>

{
 ItemList.map((item,index)=>{
  return(
    <div onClick={()=>dispatch(
      setRecordItem({
        RecordItem:item.name
    }))} className='flex items-center justify-center p-1 hover:bg-gray-200'>
      <p key={index} className='text-sm text-black font-medium '>{item.name}</p>
    </div>
  )
 })
}
</div>:
null
     }
     

    </div>
  )
}

export default SelectItem2