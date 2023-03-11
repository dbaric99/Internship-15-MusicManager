import {PropTypes} from 'prop-types';
import Select from 'react-select';

function CustomSelect({options, isClearable}) {
    console.log(options);
  return (
    <div>
        <Select
            className=""
            classNamePrefix=""
            defaultValue={options[0]}
            isClearable={isClearable}
            isSearchable={false}
            name="genre"
            options={options}
      />
    </div>
  )
}

export {CustomSelect}

CustomSelect.propTypes = {
  options: PropTypes.array,
  isClearable: PropTypes.bool
}

CustomSelect.defaultProps = {
  options: null,
  isClearable: false
}