

export const getImages = async( count ) => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}&count=${ count }`;
    const resp = await fetch( url );
    const data = await resp.json();
    console.log(data)

    const images = data.map( img => ({
        date: img.date,
        title: img.title,
        explanation: img.explanation,
        url: img.url
    }));
    
    return images;
}