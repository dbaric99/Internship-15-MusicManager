import { useState } from 'react';
import {Input, ImageInput, CustomSelect} from '../controls';
import {errorConstants, genreConstants, yearConstants} from '../../constants';
import defaultCover from '../../assets/images/no-cover.png';

function AlbumForm() {
  const [showErrors, setShowErrors] = useState(false);
  const [coverPath, setCoverPath] = useState(defaultCover);
  const [name, setName] = useState(null);
  const [author, setAuthor] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);

  const handleSubmit = (e) => {
    if(!name || !author || !releaseYear) return;
    //send data and clear inputs
  }

  const handleNameChange = (albumName) => {
    setName(albumName);
  }

  const handleAuthorChange = (author) => {
    setAuthor(author);
  }

  const handleReleaseNameChange = (year) => {
    setReleaseYear(year);
  }

  const handleAlbumCoverChange = (path) => {
    if(!path) return;
    setCoverPath(path);
  }

  return (
    <form onSubmit={handleSubmit} className="album-form">
        <div className='album-form__image-input'>
          <ImageInput handleFileUpload={handleAlbumCoverChange}/>
        </div>
        <div className='album-form__input'>
          <Input label="Name" name="Album name" onChange={handleNameChange} showError={showErrors} errorText={errorConstants.name}/>
          <Input label="Author" name="Author name" onChange={handleAuthorChange} showError={showErrors} errorText={errorConstants.author}/>
        </div>
        <div className='album-form__select'>
          <CustomSelect options={genreConstants} className='select--light' placeholder='Select Genre...' showError={showErrors} errorText={errorConstants.genre}/>
          <CustomSelect options={yearConstants} isSearchable={true}className='select--light' placeholder='Select Release Year...' showError={showErrors} errorText={errorConstants.releaseYear}/>
        </div>
    </form>
  )
}

export {AlbumForm}