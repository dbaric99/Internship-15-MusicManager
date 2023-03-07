import {useState} from 'react';
import sprite from "../assets/images/sprite.svg";
import { PopUp } from '.';

function Actions() {
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
          <svg className="actions__genre" width="30px" height="30px">
            <use href={`${sprite}#dropdown`} />
          </svg>
          <svg className="actions__sort" width="30px" height="30px">
            <use href={`${sprite}#dropdown`} />
          </svg>
        </div>
        {showPopOut && <PopUp handleClose={handleCloseModal}/>}
    </div>
  )
}

export {Actions}