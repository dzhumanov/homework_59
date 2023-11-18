import React, { useState, useEffect } from "react";
import { MovieProps } from "../../types";

interface Props {
  movie: MovieProps;
  onEdit: (id: number, editedName: string) => void;
  onDelete: (id: number) => void;
}

const Movie: React.FC<Props> = React.memo(({ movie, onEdit, onDelete }) => {
  const [editedName, setEditedName] = useState(movie.name);

  const handleEdit = () => {
    onEdit(movie.id, editedName);
  };

  const handleDelete = () => {
    onDelete(movie.id);
  };

  console.log("Render movieitem"); // Для наглядности рендера отдельного компонента - оставил данный консоль.лог чтобы вам было проще проверить

  useEffect(() => {
    setEditedName(movie.name);
  }, [movie.name]);

  return (
    <div className="input-container d-flex align-items-center gap-3 mb-3">
      <input
        type="text"
        className="form-control"
        name="movieInput"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
        onBlur={handleEdit}
      />
      <button className="btn btn-close" onClick={handleDelete}></button>
    </div>
  );
});

export default Movie;
