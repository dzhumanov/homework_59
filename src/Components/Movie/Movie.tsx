import React from "react";

interface Props {
    name: string;
}

const Movie:React.FC<Props> = ({name}) => {
    return (
      <div className="input-container d-flex align-items-center gap-3 mb-3">
        <input type="text" className="form-control" id="movieInput" value={name}/>
        <button className="btn btn-close"></button>
      </div>
    );
}

export default Movie;