import {PropTypes} from 'prop-types';
import { useState } from 'react';
import Select from 'react-dropdown-select';
import sprite from '../../assets/images/sprite.svg';

function CustomSelect({options, isClearable, isSearchable, className, placeholder, showError, errorText, onChange}) {
  const [selectValue, setSelectValue] = useState(null);
  const [open, setOpen] = useState(false);

  const handleIconClick = (e) => {
    setOpen(prev => !prev);
  }

  const handleSelectValueChange = (selectedValues) => {
    let selectedGenre = selectedValues[0].value;
    setSelectValue(selectedGenre);
    onChange(selectedGenre);
  }

  return (
    <div className='select-wrapper'>
        <Select 
          className={className}
          options={options}
          clearable={isClearable}
          searchable={isSearchable}
          placeholder={placeholder}
          dropdownHandle={false}
          keepOpen={open}
          closeOnSelect={true}
          clearOnBlur={isSearchable}
          onChange={handleSelectValueChange}
        />
        <svg className="select-indicator" width="30px" height="30px" onClick={handleIconClick}>
          <use href={`${sprite}#dropdown--dark`} />
        </svg>
        {(showError && !selectValue) && (
        <span className='input-error'>{errorText}</span>
      )}
    </div>
  )
}

export {CustomSelect}

CustomSelect.propTypes = {
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func,
}

CustomSelect.defaultProps = {
  options: null,
  isClearable: false,
  isSearchable: false,
  className: '',
  placeholder: 'Select',
  showError: false,
  errorText: '',
  onChange: () => {}
}