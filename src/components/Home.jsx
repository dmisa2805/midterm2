import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import data from "../moviesData.json";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);

  useEffect(() => {
    setMovies(data.data);
    const defaultMovie = data.data.find(data => data.id === "1");
    setHeroMovie(defaultMovie);
  }, []);

  const handleMovieClick = (clickedMovie) => {
    if (!heroMovie || !clickedMovie) return;

    const updatedMovies = movies.map((movie) => {
      if (movie.id === clickedMovie.id) {
        return heroMovie; 
      }
      else if (movie.id === heroMovie.id) {
        return clickedMovie;
      }
      else return movie;
    });

    setMovies(updatedMovies);
    setHeroMovie(clickedMovie);
  };

  return (
    <div>
        <main className='px-16 py-8'>
            <h1 className='text-3xl font-semibold text-title'>Explore</h1>
            <h3 className='text-2xl font-normal text-subtitle py-4'>What are you gonna watch today ?</h3>
            {heroMovie && (
                <div onClick={() => handleMovieClick(heroMovie)}>  
                    <div className='img-container relative flex'>         
                    <img src={heroMovie.image} alt={heroMovie.movieName} className='w-full h-96 object-cover rounded-xl' />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent overflow-hidden rounded-xl"></div>
                    <div className="absolute bottom-0 left-0 p-12 w-3/4">
                        <h1 className='text-3xl font-semibold text-title py-4'>{heroMovie.movieName}</h1>
                        <p className='text-title'>{heroMovie.description}</p>
                    </div>
                    </div>
                
                </div>
                )}

            <div className="new-release">
            <h1 className='text-3xl font-semibold text-title py-4 '>New Release</h1>
            <div className='grid grid-cols-6 gap-4 items-start cursor-pointer'>
                {movies
                .filter(movie => movie.id !== heroMovie.id) 
                .slice(0, 6)
                .map((movie) => (
                <MovieCard key={movie.id} movie={movie} onMovieClick={handleMovieClick}/>
                ))}
            </div>
            </div>
        </main>
    </div>
  );
};

export default Home;