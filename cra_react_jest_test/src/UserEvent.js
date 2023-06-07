import React, { useState } from "react";

function UserEvent() {
  const [heading, setHeading] = useState("Test Jest");

  const clickHandler = () => {
    setHeading("Not Testing Jest");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <h1>{heading}</h1>
    </>
  );
}

export default UserEvent;
