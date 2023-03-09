import PropTypes from 'prop-types';
import { useRef } from 'react';

function Input({label, name, value, onChange, showError, errorText}) {
  var labelRef = useRef(null);

  const handleInputChange = (e) => {
    console.log("VAL: ", e);
  }

  return (
    <div className='input-wrapper'>
      <input className='input-field' type="text" required={showError} onChange={handleInputChange}/>
      <label className='input-label' ref={labelRef}>{label}</label>
      {showError && (
        <span className='input-error'>{errorText}</span>
      )}
    </div>
  )
}

export {Input}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  showError: PropTypes.bool,
  errorText: PropTypes.string,
}

Input.defaultProps = {
  label: "",
  name: "",
  vallue: "",
  onChange: () => {},
  showError: false,
  errorText: "",
}