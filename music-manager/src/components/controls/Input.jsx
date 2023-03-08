import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';

function Input({label, name, value, onChange, showError, errorText}) {
  return (
    <TextField
      label={label} 
      name={name} 
      variant="standard"
      value={value}
      onChange={onChange}
      {...(showError && {error:true,helperText:errorText})}
    />
  )
}

export {Input}

Input.propTypes = {
  label: PropTypes.string,
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