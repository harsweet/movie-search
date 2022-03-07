import React from 'react'


const Movies = props => (
    <div>
       { props.movies.map((movie) => {
            
            
            return <div key={movie.imdbID} className="movie-info">
      
             <img className="movie-picture" src={movie.Poster} alt="Movie Poster" sizes='2px' /> <p > {movie.Title} ({movie.Year})</p>
             </div>
          }
          )
       }
    </div>

    );


export default Movies;