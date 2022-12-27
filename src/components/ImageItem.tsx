export const ImageItem = ({ title, url, explanation, date }) => {

    const splitted_date= date.split('-')
    const nasa_link = `https://apod.nasa.gov/apod/ap${splitted_date[0].substring(2,4)+splitted_date[1]+splitted_date[2]}.html`
    
    return (
        <div className="card">
            <a href={nasa_link} target="_blank"><img src={ url } alt={ title } /></a>
            <div className="card-content">
                <h4>{ title }</h4>
                <h6>{date}</h6>
            </div>
        </div>
    )
}