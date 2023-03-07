import {Dialog, DialogTitle} from '@mui/material';
import {PropTypes} from 'prop-types';

function PopUp({handleClose}) {

  return (
    <div>
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Add new album</DialogTitle>
        </Dialog>
    </div>
  )
}

export {PopUp}

PopUp.propTypes = {
    handleClose: PropTypes.func.isRequired,
}