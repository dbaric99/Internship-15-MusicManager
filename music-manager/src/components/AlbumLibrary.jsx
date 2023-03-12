import {Album} from '.';
import {PropTypes} from 'prop-types';

function AlbumLibrary({albums}) {
  return (
    <div>
        {albums.map(album => <Album data={album}/>)}
    </div>
  )
}

export {AlbumLibrary}

AlbumLibrary.propTypes = {
  albums: PropTypes.array
}

AlbumLibrary.defaultProps = {
  albums: []
}