import React from "react";

function UserAsync(props) {
  const { name, email } = props.user;

  return (
    <div className="person">
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
}

export default UserAsync;
