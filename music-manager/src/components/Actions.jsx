import {useState} from 'react';
import sprite from "../assets/images/sprite.svg";
import { PopUp } from '.';
import { AlbumForm } from './forms';

function Actions() {
  const [showPopOut, setShowPopOut] = useState(false);

  const handleCloseModal = () => {
    setShowPopOut(false);
  }

  function getNewAlbumData(data) {
    console.log("NEW ALBUM:", data);
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
          <svg className="actions__genre" width="30px" height="30px">
            <use href={`${sprite}#dropdown--light`} />
          </svg>
          <svg className="actions__sort" width="30px" height="30px">
            <use href={`${sprite}#dropdown--light`} />
          </svg>
        </div>
        <PopUp title="Add new album" openPopUp={showPopOut} handleClose={setShowPopOut}>
          <AlbumForm handleData={getNewAlbumData} handleClose={handleCloseModal}></AlbumForm>
        </PopUp>
    </div>
  )
}

export {Actions}