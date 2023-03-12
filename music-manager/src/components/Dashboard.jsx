import { useEffect, useState } from 'react';
import {Actions, AlbumLibrary} from '.';

function Dashboard() {
  const [albums, setAlbums] = useState([]);

  function appendNewAlbum(data) {
    setAlbums(prev => [...prev, data]);
  }

  return (
    <div>
        <h1 className='dashboard-title'>Dashboard</h1>
        <Actions addNewAlbum={appendNewAlbum} />
        <AlbumLibrary albums={albums}/>
    </div>
  )
}

export {Dashboard};