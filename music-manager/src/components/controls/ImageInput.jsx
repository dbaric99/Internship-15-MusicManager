import {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import sprite from '../../assets/images/sprite.svg'

function ImageInput() {
    const [file, setFile] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFile(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
        console.log("DROPZONE:", acceptedFiles);
      }
    });
  
    return (
      <div  className='image-dropzone' {...getRootProps()}>
          <input {...getInputProps()} />
          <svg className='dropzone-add' width="50px" height="50px">
              <use href={`${sprite}#add`} />
          </svg>
      </div>
    );
}

export {ImageInput}