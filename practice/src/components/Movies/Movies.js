import React from 'react';
import Movie from "./Movie";

const Movies = ({movies}) => { 
    const filterMovies = movies
    .filter(movie => movie.rating >= 8)
    .map(movie => 
        <Movie
            title={movie.title}
            rating={movie.rating}   
        />);

    return (
        <div>
            {filterMovies}
        </div>
    );
}

export default Movies;