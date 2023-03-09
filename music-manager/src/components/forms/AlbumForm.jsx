import { useState } from 'react'
import {Input, ImageInput} from '../controls'

function AlbumForm() {
  const [showErrors, setShowErrors] = useState(false);


  const handleSubmit = (e) => {

  }

  const handleNameChange = (e) => {

  }

  const handleAuthorChange = (e) => {

  }
  //label, name, value, onChange, error

  return (
    <form onSubmit={handleSubmit} className="album-form">

        <ImageInput />
        <Input label="Name" onChange={handleNameChange} showError={showErrors} errorText="Album Name is required!"/>
        <Input label="Author" onChange={handleAuthorChange} showError={showErrors} errorText="Album Author is required!"/>

    </form>
  )
}

export {AlbumForm}