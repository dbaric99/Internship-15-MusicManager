import {PropTypes} from 'prop-types';

function Album({data}) {

  console.log("ALBUM COMPONENT:",data);

  return (
    <div>
        Album
    </div>
  )
}

export {Album}

Album.propTypes = {
  data: PropTypes.object
}

Album.defaultProps = {
  data: {}
}