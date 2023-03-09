import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function Input({label, name, value, onChange, showError, errorText}) {
  const [inputValue, setInputValue] = useState(value); 
  const [shouldDisplayError, setShouldDisplayError] = useState(showError);
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange();
  }

  useEffect(() => {
    if(!labelRef) return;
    let current = labelRef.current;
    if(inputValue) current.style.top = '-7px';
  }, [inputValue])

  useEffect(() => {
    if(!inputRef) return;
    let current = inputRef.current;
    let activeClass = ' input-field--error';
    if(shouldDisplayError) {
      current.className += activeClass;
      return;
    }
    current.className = current.className.replace(activeClass, '');
  }, [shouldDisplayError])

  return (
    <div className='input-wrapper'>
      <input 
        ref={inputRef} 
        className='input-field' 
        type="text" 
        required={showError} 
        defaultValue={value} 
        name={name}
        onChange={handleInputChange} 
        onFocus={() => setShouldDisplayError(false)} onBlur={() => setShouldDisplayError(showError)}/>
      <label className='input-label' ref={labelRef}>{label}</label>
      {(shouldDisplayError && inputRef.current.value==="") && (
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