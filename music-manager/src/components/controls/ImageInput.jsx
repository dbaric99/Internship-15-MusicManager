import {useState, useEffect, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import sprite from '../../assets/images/sprite.svg'

function ImageInput() {
    const [file, setFile] = useState([]);
    const [imageEl, setImageEl] = useState(null);
    const [isDropzoneFocused, setIsDropzoneFocused] = useState(false);

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFile(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
        console.log("DROPZONE:", acceptedFiles);
      }
    });

    useEffect(() => {
      if(!file.length) return;
      console.log(file);
      setImageEl(<img className="cover-preview" src={file[0].preview} alt="Cover art" style={{width:'70px', height: '70px'}}/>);
    }, [file])
  
    return (
      <>
        <div className='image-dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='dropzone-area' 
              onMouseEnter={() => setIsDropzoneFocused(true)} 
              onMouseLeave={() => setIsDropzoneFocused(false)}
            >
              {imageEl && <div className={isDropzoneFocused ? 'cover-preview--hover' : ''}>{imageEl}</div> } 
              <svg className='dropzone-add' width="50px" height="50px" >
                  <use href={!isDropzoneFocused ? `${sprite}#add` : `${sprite}#add-active`} />
              </svg>
            </div>
        </div>
      </>
    );
}

export {ImageInput}