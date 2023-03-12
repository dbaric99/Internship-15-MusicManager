import { useEffect, useState } from 'react';
import {Actions, AlbumLibrary} from '.';
import {localStorageHelper} from '../helpers';

function Dashboard() {
  const [albums, setAlbums] = useState(localStorageHelper.getFromLocalStorage('albums') || []);

  function appendNewAlbum(data) {
    setAlbums(prev => [...prev, data]);
  }

  useEffect(() => {
    localStorageHelper.setToLocalStorage('albums', albums);
  }, [albums])

  return (
    <div>
        <h1 className='dashboard-title'>Dashboard</h1>
        <Actions addNewAlbum={appendNewAlbum} />
        <AlbumLibrary albums={albums}/>
    </div>
  )
}

export {Dashboard};