import { ImageItem } from './ImageItem';
import { v4 as uuidv4 } from 'uuid';
import { useFetchImages } from '../hooks/useFetchImages';


export const ImageGrid = ({ count }) => {

    const { images, isLoading } = useFetchImages( count );

    return (
        <>
            <h3 className='title_grid'>Number of random images: { count }</h3>
            {
                isLoading && ( <h4 className='loading'>Loading...</h4> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <ImageItem 
                            key={ uuidv4() } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}



// [{"copyright":"Robert Gendler",
// "date":"2010-07-28",
// "explanation":"Unspeakable beauty and unimaginable bedlam can be found together in the Trifid Nebula. Also known as M20, this photogenic nebula is visible with good binoculars towards the constellation of Sagittarius. The energetic processes of star formation create not only the colors but the chaos. The red-glowing gas results from high-energy starlight striking interstellar hydrogen gas. The dark dust filaments that lace M20 were created in the atmospheres of cool giant stars and in the debris from supernovae explosions. Which bright young stars light up the blue reflection nebula is still being investigated. The light from M20 we see today left perhaps 3,000 years ago, although the exact distance remains unknown. Light takes about 50 years to cross M20.","hdurl":"https://apod.nasa.gov/apod/image/1007/m20_gendler_big.jpg","media_type":"image","service_version":"v1",
// "title":"The Trifid Nebula is Stars and Dust",
// "url":"https://apod.nasa.gov/apod/image/1007/m20_gendler.jpg"}