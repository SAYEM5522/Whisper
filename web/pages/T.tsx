import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
const T = () => {
  const router=useRouter()
  const Click=useCallback(()=>{
    router.push('/H')
  },[])
  return (
    <div
    onClick={Click}
    >T</div>
  )
}

export default T