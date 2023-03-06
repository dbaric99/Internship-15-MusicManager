import {Actions, AlbumLibrary} from '.';

function Dashboard() {
  return (
    <div>
        <h1 className='dashboard-title'>Dashboard</h1>
        <Actions/>
        <AlbumLibrary/>
    </div>
  )
}

export {Dashboard};