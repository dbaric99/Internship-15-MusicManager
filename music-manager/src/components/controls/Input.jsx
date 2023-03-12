import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function Input({label, name, value, onChange, showError, errorText}) {
  const [inputValue, setInputValue] = useState(value); 
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
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
    if(showError && inputRef.current.value==="") {
      current.className += activeClass;
      return;
    }
    current.className = current.className.replace(activeClass, '');
  }, [showError, inputValue])

  return (
    <div className='input-wrapper'>
      <input 
        ref={inputRef} 
        className='input-field' 
        type="text"  
        defaultValue={value} 
        name={name}
        onChange={handleInputChange} 
      />
      <label className='input-label' ref={labelRef}>{label}</label>
      {(showError && inputRef.current.value==="") && (
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