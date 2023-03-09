import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function Input({label, value, onChange, showError, errorText}) {
  const [inputValue, setInputValue] = useState(value); 
  const labelRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange();
  }

  useEffect(() => {
    if(!labelRef) return;
    let current = labelRef.current;
    if(inputValue) current.style.top = '-7px';
  }, [inputValue])

  return (
    <div className='input-wrapper'>
      <input className='input-field' type="text" required={showError} onChange={handleInputChange} defaultValue={value}/>
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
  value: null,
  onChange: () => {},
  showError: false,
  errorText: "",
}