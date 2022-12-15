import { ChangeEvent, useState } from 'react';

function ChoiceFile() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = (e:any) => {
    e.preventDefault()
    if (!file) {
      return;
    }
    const data = new FormData();
    data.append("audio",file)
    const encodeFile=new Buffer(file.name).toString('base64')
    const item={
      file:encodeFile
    }
    
    fetch('http://127.0.0.1:5000/translate', {
      method: 'POST',
      body:file

    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form >
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
      
      </form>
      
 
    </div>

  );
}

export default ChoiceFile;