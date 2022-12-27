import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { SearchNumber, ImageGrid } from './components';


export const NasaAPODApp = () => {

  const [ count, setCounts ] = useState();

  const onAddCount = (newCount) => {
    if ( typeof Number(newCount) != 'number' || Number(newCount)<1) return;
    setCounts([newCount])
  }

  return (
    <>
      <h1>Nasa APOD Search Images</h1>
      <p>Astronomy Picture of the Day (APOD) is a website provided by NASA. Provides each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer.</p>
      
      <p className='mt-2'>Type the count of random images you want to display and hit enter</p>
      <SearchNumber onNewNumber={onAddCount}/>

      { count 
        ? <ImageGrid key={ uuidv4() } count={ count } />
        : <h5>To start type a number ... </h5>
      }

    </>
  )
}
