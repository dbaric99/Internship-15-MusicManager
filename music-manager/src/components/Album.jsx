import {PropTypes} from 'prop-types';
import {Button} from './controls';

function Album({data}) {

  console.log("ALBUM COMPONENT:",data);

  return (
    <div className='album-wrapper'>
        <img src={data.cover} alt="" className='album-cover'/>
        <div className='album-name'>{data.name}</div>
        <div className='album-author'>{data.author}</div>
        <div className='album-release'>{data.releaseYear}</div>
        <Button classes='btn--delete' text='&#8722;' handleClick={() => {}}></Button>
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