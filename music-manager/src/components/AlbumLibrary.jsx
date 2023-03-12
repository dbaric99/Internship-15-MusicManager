import {Album} from '.';
import {PropTypes} from 'prop-types';

function AlbumLibrary({albums}) {
  return (
    <div className='albums-holder'>
        {albums.map(album => <Album data={album} key={album.id}/>)}
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