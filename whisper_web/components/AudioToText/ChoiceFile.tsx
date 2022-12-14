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
      // body: JSON.stringify(item),
      body:file
      // 👇 Set headers manually for single file upload
      // headers: {
      //   'Content-Type': 'application/json',
      //   // 'content-length': `${file.size}`,
      //   // "Access-Control-Allow-Origin":"*"
        
        
      // },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form >
      <input type="file" name="file" onChange={handleFileChange}  />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick} >Upload</button>
      </form>
      
 
    </div>

  );
}

export default ChoiceFile;