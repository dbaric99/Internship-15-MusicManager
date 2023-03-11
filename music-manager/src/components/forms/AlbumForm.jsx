import { useState } from 'react';
import {Input, ImageInput, Select} from '../controls';
import {errorConstants, genreConstants} from '../../constants';
import defaultCover from '../../assets/images/no-cover.png';

function AlbumForm() {
  const [showErrors, setShowErrors] = useState(false);
  const [coverPath, setCoverPath] = useState(defaultCover);

  const handleSubmit = (e) => {

  }

  const handleNameChange = (e) => {

  }

  const handleAuthorChange = (e) => {

  }

  const handleAlbumCoverChange = (path) => {
    if(!path) return;
    setCoverPath(path);
  }

  return (
    <form onSubmit={handleSubmit} className="album-form">

        <ImageInput handleFileUpload={handleAlbumCoverChange}/>
        <Input label="Name" name="Album name" onChange={handleNameChange} showError={showErrors} errorText={errorConstants.name}/>
        <Input label="Author" name="Author name" onChange={handleAuthorChange} showError={showErrors} errorText={errorConstants.author}/>
        <Select options={genreConstants}/>
    </form>
  )
}

export {AlbumForm}