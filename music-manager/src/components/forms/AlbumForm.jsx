import { useState } from 'react';
import {React} from 'react';
import {PropTypes} from 'prop-types';
import {Input, ImageInput, CustomSelect, Button} from '../controls';
import {errorConstants, genreConstants, yearConstants} from '../../constants';
import defaultCover from '../../assets/images/no-cover.png';
import { v4 as uuidv4 } from 'uuid';

function AlbumForm({handleClose, handleData}) {
  const [showErrors, setShowErrors] = useState(false);
  const [coverPath, setCoverPath] = useState(defaultCover);
  const [name, setName] = useState(null);
  const [author, setAuthor] = useState(null);
  const [genre, setGenre] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !author || !genre || !releaseYear) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
    handleClose(false);
    handleData({
      id: uuidv4(), 
      name: name, 
      author: author, 
      genre: genre, 
      releaseYear: releaseYear, 
      cover: coverPath, 
      added: new Date()
    })
  }

  const handleNameChange = (albumName) => {
    setName(albumName);
  }

  const handleAuthorChange = (author) => {
    setAuthor(author);
  }

  const handleGenreChange = (genre) => {
    setGenre(genre);
  }

  const handleReleaseYearChange = (year) => {
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
          <CustomSelect options={genreConstants} className='select--light' placeholder='Select Genre...' showError={showErrors} errorText={errorConstants.genre} onChange={handleGenreChange} icon='#dropdown--dark'/>
          <CustomSelect options={yearConstants} isSearchable={true} className='select--light' placeholder='Select Release Year...' showError={showErrors} errorText={errorConstants.releaseYear} onChange={handleReleaseYearChange} icon='#dropdown--dark'/>
        </div>
        <div className='album-form__submit'>
          <Button type="submit" text="Add album" classes='btn--submit' />
        </div>
    </form>
  )
}

export {AlbumForm}

AlbumForm.propTypes = {
  handleClose: PropTypes.func,
  handleData: PropTypes.func
}

AlbumForm.defaultProps = {
  handleClose: () => {},
  handleData: () => {}
}