import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { MovieProps } from "../../types";

interface Props {
  movies: MovieProps[];
  onEdit: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

const WatchList: React.FC<Props> = React.memo(
  ({ movies, onEdit, onDelete }) => (
    <>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  )
);

export default WatchList;
