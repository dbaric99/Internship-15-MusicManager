import PropTypes from 'prop-types';

function Input({label, name, value, onChange, showError, errorText}) {

  return (
    <div></div>
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