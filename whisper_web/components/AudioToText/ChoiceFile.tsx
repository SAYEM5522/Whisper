import { ChangeEvent, useState,useCallback,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFileData, selectItem, setFileData, setFileLoading } from '../../features/AudioSlice';

function ChoiceFile() {
  const [file, setFile] = useState<File>();
  const dispatch=useDispatch()
  const selectedItem=useSelector(selectItem)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
 
  const handleUploadClick =() => {
    if (!file) {
      return;
    }
    fetch(`http://127.0.0.1:5000/${selectedItem}`, {
      method: 'POST',
      body:file
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
       dispatch(
        setFileData(
          {
            Text:data.Text,
            language:data.language
          }
        ), 
       )
       dispatch(
        setFileLoading({
          fileLoading:true
        })
       )
  })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <input type="file" id="actual-btn" hidden name="file" onChange={handleFileChange}  />
      <div className=' -mt-7 items-center '>
      <label htmlFor="actual-btn" className=' w-9 bg-gray-100 rounded-md p-2 mr-24  cursor-pointer'>Choose File</label>
      <span className='absolute  right-1 text-sm italic  '>
      {
        file?
        <p>File Selected</p>:
        <p>No File Selected</p>
      }
      </span>
      <button className='absolute bottom-1 right-[7.5rem]  bg-gray-100 rounded-md px-3 ' onClick={handleUploadClick} >Upload</button>
      </div>
      
      
 
    </div>

  );
}

export default ChoiceFile;