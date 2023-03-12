import {Album} from '.';
import {PropTypes} from 'prop-types';

function AlbumLibrary({albums, deleteAlbum}) {

  return (
    <div className='albums-holder'>
        {albums.map(album => <Album data={album} key={album.id} handleDelete={deleteAlbum}/>)}
    </div>
  )
}

export {AlbumLibrary}

AlbumLibrary.propTypes = {
  albums: PropTypes.array,
  deleteAlbum: PropTypes.func
}

AlbumLibrary.defaultProps = {
  albums: [],
  deleteAlbum: () => {}
}