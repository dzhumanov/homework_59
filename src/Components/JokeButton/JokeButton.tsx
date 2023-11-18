import React from "react";

interface Props {
  fetchJoke: () => void;
}

const JokeButton: React.FC<Props> = React.memo(({ fetchJoke }) => {
  console.log("button rendered");
  return (
    <button className="btn btn-primary" onClick={fetchJoke}>
      Generate new joke
    </button>
  );
});

export default JokeButton;
