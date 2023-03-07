import {Button, Modal, ModalTitle} from '@mui/material';
import {PropTypes} from 'prop-types';
import { useState } from 'react';

function PopUp({handleClose}) {

  return (
    <>
      <Modal open={true} onClose={handleClose}>
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">This is a test of modal.</p>
        </div>
      </Modal>
    </>
  );
}

export {PopUp}

PopUp.propTypes = {
    handleClose: PropTypes.func.isRequired,
}