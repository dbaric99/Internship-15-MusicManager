import {PropTypes} from 'prop-types';
import sprite from "../assets/images/sprite.svg";

function PopUp({openPopUp, handleClose, title, children}) {

  return openPopUp && (
    <div className='pop-up'>
      <div className='pop-up__title'>{title}</div>
      <svg className="pop-up__close-icon" width="20px" height="20px" onClick={() => handleClose(false)}>
        <use href={`${sprite}#close-button`} />
      </svg>
      <div className='pop-up__content'>{children}</div>
    </div>
  );
}

export {PopUp}

PopUp.propTypes = {
    handleClose: PropTypes.func.isRequired,
    openPopUp: PropTypes.bool.isRequired,
    title: PropTypes.string,
}

PopUp.defaultProps = {
  title: "",
}