import { useState } from 'react'
import {Input} from '../controls'

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

        <Input label="Name" name="Name" value="" onChange={handleNameChange} showError={showErrors} errorText="Album Name is required!"/>
        <Input label="Author" name="Author" value="" onChange={handleAuthorChange} showError={showErrors} errorText="Album Author is required!"/>

    </form>
  )
}

export {AlbumForm}