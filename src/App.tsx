import { useState, useCallback, useEffect } from "react";
import Form from "./Components/Form/Form";
import WatchList from "./Components/WatchList/WatchList";
import { MovieProps } from "./types";
import JokeButton from "./Components/JokeButton/JokeButton";

const url = "https://api.chucknorris.io/jokes/random";

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

  // task 2
  const useJoke = () => {
    const [joke, setJoke] = useState<string>("");

    const fetchJoke = useCallback(async () => {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setJoke(data.value);
      }
    }, []);

    useEffect(() => {
      void fetchJoke();
    }, [fetchJoke]);

    return { joke, fetchJoke };
  };

  const { joke, fetchJoke } = useJoke();

  return (
    <>
      <div className="container w-50">
        <div className="form-container">
          <Form onAdd={addMovie} />
          <WatchList
            movies={movies}
            onEdit={editMovie}
            onDelete={deleteMovie}
          />
        </div>
        <hr />
        <div className="joke-container">
          <div>{joke}</div>
          <JokeButton fetchJoke={fetchJoke}/>
        </div>
      </div>
    </>
  );
}

export default App;
