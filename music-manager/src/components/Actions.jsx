import {useState} from 'react';
import sprite from "../assets/images/sprite.svg";
import { PopUp } from '.';
import { AlbumForm } from './forms';
import {PropTypes} from 'prop-types';
import { CustomSelect, Input } from './controls';
import { genreConstants } from '../constants';

function Actions({addNewAlbum, handleGenreFilter, handleFilterChange}) {
  const [showPopOut, setShowPopOut] = useState(false);

  const handleCloseModal = () => {
    setShowPopOut(false);
  }

  return (
    <div className="actions-wrapper">
      <div className="actions__add">
        <svg className="add-btn-icon" width="50px" height="50px" onClick={() => setShowPopOut(true)}>
            <use href={`${sprite}#add-new`} />
        </svg>
        <span className="add-btn-text">Add new album</span>
      </div>
        <div className="input-actions">
          <svg className="actions__search" width="20px" height="20px">
            <use href={`${sprite}#search`} />
          </svg>
          <Input onChange={handleFilterChange}/>
          <CustomSelect options={genreConstants} icon='#dropdown--light' placeholder='Genre' onChange={handleGenreFilter} className='select--dark' isSearchable={true}/>
        </div>
        <PopUp title="Add new album" openPopUp={showPopOut} handleClose={setShowPopOut}>
          <AlbumForm handleData={(data) => addNewAlbum(data)} handleClose={handleCloseModal}></AlbumForm>
        </PopUp>
    </div>
  )
}

export {Actions}

Actions.propTypes = {
  addNewAlbum: PropTypes.func,
  handleGenreFilter: PropTypes.func
}

Actions.defeaultProps = {
  addNewAlbum: () => {},
  handleGenreFilter: () => {}
}