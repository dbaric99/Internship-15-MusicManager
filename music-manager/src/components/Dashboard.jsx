import { useEffect, useState } from 'react';
import {Actions, AlbumLibrary} from '.';
import {localStorageHelper} from '../helpers';

function Dashboard() {
  const [albums, setAlbums] = useState(localStorageHelper.getFromLocalStorage('albums') || []);
  const [filterValue, setFilterValue] = useState();
  const [genreFilter, setGenreFilter] = useState();

  function appendNewAlbum(data) {
    if(albums.length === 3) {
      alert("You cannot have more than 10 albums in your library at once!");
      return;
    }
    setAlbums(prev => [...prev, data]);
  }

  function deleteAlbum(id) {
    setAlbums(prev => prev.filter(album => album.id !== id));
  }

  function sortAlbums(unsortedAlbums) {
    let sortedAlbums = unsortedAlbums.slice().sort((a, b) => {
      if (a.releaseYear !== b.releaseYear) {
        return a.releaseYear - b.releaseYear;
      }
      if (a.author !== b.author) {
        return a.author.toLowerCase().localeCompare(b.author.toLowerCase());
      }
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    if(genreFilter) {
      sortedAlbums = albums.filter(album => album.genre === genreFilter);
    }

    if(filterValue) {
      sortedAlbums = albums.filter(album =>
        (album.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          album.author.toLowerCase().includes(filterValue.toLowerCase()))
      );
    }

    return sortedAlbums;
  }

  useEffect(() => {
    localStorageHelper.setToLocalStorage('albums', albums);
  }, [albums]);

  return (
    <div>
        <h1 className='dashboard-title'>Dashboard</h1>
        <Actions addNewAlbum={appendNewAlbum} handleGenreFilter={(value) => setGenreFilter(value)} handleFilterChange={(value) => setFilterValue(value)}/>
        <AlbumLibrary albums={sortAlbums(albums)} deleteAlbum={deleteAlbum}/>
    </div>
  )
}

export {Dashboard};