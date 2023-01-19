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
