import {PropTypes} from 'prop-types';
import sprite from "../assets/images/sprite.svg";

function PopUp({openPopUp, handleClose, title, children}) {

  return (
    <div>
      
    </div>
    // <Dialog className="pop-up" open={openPopUp}>
    //   <DialogTitle className="pop-up__title-wrapper">
    //     <Typography>{title}</Typography>
    //     <svg className="pop-up__close-icon" width="20px" height="20px" onClick={() => handleClose(false)}>
    //         <use href={`${sprite}#close-button`} />
    //     </svg>
    //   </DialogTitle>

    //   <DialogContent>
    //     {children}
    //   </DialogContent>
    // </Dialog>
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