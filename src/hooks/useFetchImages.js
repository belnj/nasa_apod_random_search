import { useEffect, useState } from 'react';
import { getImages } from '../helpers/getImages';

export const useFetchImages = ( count ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getNewImages = async() => {
        const newImages = await getImages( count );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getNewImages();
    }, []);

    return {
        images,
        isLoading
    }

}