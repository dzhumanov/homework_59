import React, { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

const Form: React.FC<Props> = ({ onAdd }) => {
  const [movieName, setMovieName] = useState<string>("");

  const handleAddClick = () => {
    if (movieName.trim() !== "") {
      onAdd(movieName);
      setMovieName("");
    }
  };

  return (
    <div>
      <label htmlFor="movieInput" className="form-label">
        Type a movie
      </label>
      <div className="input-container d-flex gap-3 align-items-center">
        <input
          type="text"
          className="form-control my-3"
          id="movieInput"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
