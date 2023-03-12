import {PropTypes} from 'prop-types';

function Button({type, classes, text, handleClick}) {
  return (
    <div>
      <button className={classes} type={type} onClick={handleClick}>{text}</button>
    </div>
  )
}

export {Button}

Button.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
}

Button.defaultPropr = {
  type: "button",
  classes: "",
  text: "",
  handleClick: () => {},
}