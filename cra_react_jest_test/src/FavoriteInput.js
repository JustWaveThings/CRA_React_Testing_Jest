import React from "react";

const FavoriteInput = ({ onChange: onInputChange, id }) => {
  const inputHandler = (event) => onInputChange(event.target.value);

  return (
    <label htmlFor={id}>
      What is your favorite animal?
      <input id={id} onChange={inputHandler} />
    </label>
  );
};

export default FavoriteInput;
