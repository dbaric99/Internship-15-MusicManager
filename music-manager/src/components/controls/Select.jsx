import {PropTypes} from 'prop-types';

function Select({options}) {
  return (
    <div>Select</div>
  )
}

export {Select}

Select.propTypes = {
  options: PropTypes.array
}

Select.defaultProps = {
  options: null
}