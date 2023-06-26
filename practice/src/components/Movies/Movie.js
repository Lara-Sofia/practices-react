const Movie = ({title, rating}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{rating}</p>
        </div>
    );    
}

export default Movie;