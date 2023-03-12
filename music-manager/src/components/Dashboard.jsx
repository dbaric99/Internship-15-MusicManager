import { useEffect, useState } from 'react';
import {Actions, AlbumLibrary} from '.';
import {localStorageHelper} from '../helpers';

function Dashboard() {
  const [albums, setAlbums] = useState(localStorageHelper.getFromLocalStorage('albums') || []);
  const [filterValue, setFilterValue] = useState();
  const [genreFilter, setGenreFilter] = useState();

  function appendNewAlbum(data) {
    setAlbums(prev => [...prev, data]);
  }

  function deleteAlbum(id) {
    setAlbums(prev => prev.filter(album => album.id !== id));
  }

  function sortAlbums(unsortedAlbums) {
    const sortedAlbums = unsortedAlbums.slice().sort((a, b) => {
      if (a.releaseYear !== b.releaseYear) {
        return a.releaseYear - b.releaseYear;
      }
      if (a.author !== b.author) {
        return a.author.toLowerCase().localeCompare(b.author.toLowerCase());
      }
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    if(!genreFilter) return sortedAlbums;

    return albums.filter(album => album.genre === genreFilter);
  }

  useEffect(() => {
    localStorageHelper.setToLocalStorage('albums', albums);
  }, [albums]);
  
  useEffect(() => {
    console.log("FILTER:",genreFilter)
  }, [genreFilter])

  return (
    <div>
        <h1 className='dashboard-title'>Dashboard</h1>
        <Actions addNewAlbum={appendNewAlbum} handleGenreFilter={(value) => setGenreFilter(value)}/>
        <AlbumLibrary albums={sortAlbums(albums)} deleteAlbum={deleteAlbum}/>
    </div>
  )
}

export {Dashboard};