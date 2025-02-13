import React from "react";

const MovieCard = ({ movie, onMovieClick }) => {
  
  return (
    <div 
        onClick={() => onMovieClick(movie)}
    >
        <div className='flex flex-col justify-center items-center gap-4 relative'>
            <img src={movie.image} alt={movie.movieName} className='w-full h-80 rounded-xl object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent overflow-hidden rounded-xl"></div>
            <p className='absolute bottom-0 py-4 text-title'>Episode {movie.episode}</p>
        </div>
        <h3 className='text-title text-wrap text-center font-semibold py-4'>{movie.movieName}</h3>
    </div>
  );
};

export default MovieCard;