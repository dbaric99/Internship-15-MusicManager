import {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import {PropTypes} from 'prop-types';
import sprite from '../../assets/images/sprite.svg';

function ImageInput({handleFileUpload}) {
    const [file, setFile] = useState([]);
    const [imageEl, setImageEl] = useState(null);
    const [isDropzoneFocused, setIsDropzoneFocused] = useState(false);

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFile(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });

    const handleImageError = () => {
      handleFileUpload(null);
    }

    useEffect(() => {
      if(!file.length) return;
      let imagePath = file[0].preview;

      setImageEl(<img className="cover-preview" src={imagePath} alt="Cover art" style={{width:'70px', height: '70px'}} onError={handleImageError}/>);
    }, [file])

    useEffect(() => {
      if(!imageEl) return;
      handleFileUpload(imageEl.props.src);
    }, [imageEl])
  
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

ImageInput.propTypes = {
  handleFileUpload: PropTypes.func
}

ImageInput.defaultProps = {
  handleFileUpload: () => {}
}