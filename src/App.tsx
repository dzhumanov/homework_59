import { useState, useCallback } from "react";
import Form from "./Components/Form/Form";
import WatchList from "./Components/WatchList/WatchList";
import { MovieProps } from "./types";

function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const addMovie = (name: string) => {
    const newMovie: MovieProps = {
      id: Math.random(),
      name: name,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const editMovie = useCallback((id: number, name: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, name: name } : movie
      )
    );
  }, []);

  const deleteMovie = useCallback((id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }, []);

  return (
    <>
      <div className="container w-50">
        <div className="form-container">
          <Form onAdd={addMovie}/>
          <WatchList movies={movies} onEdit={editMovie} onDelete={deleteMovie}/>
        </div>
      </div>
    </>
  );
}

export default App;
