import {Dialog, DialogContent, DialogTitle, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {PropTypes} from 'prop-types';
import sprite from "../assets/images/sprite.svg";

const useStyles = makeStyles({
  albumFormTitle: {
    color: 'var(--black)',
    margin: '20px',
    fontWeight: 'normal',
    fontSize: '30px',
  }
})

function PopUp({openPopUp, handleClose, title, children}) {
  const classes = useStyles();

  return (
    <Dialog className="pop-up" open={openPopUp}>
      <DialogTitle className="pop-up__title-wrapper">
        <Typography>{title}</Typography>
        <svg className="pop-up__close-icon" width="20px" height="20px" onClick={() => handleClose(false)}>
            <use href={`${sprite}#close-button`} />
        </svg>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
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