import React from "react";

const ButtonLogin = ({ prop }) => {
  return (
    <div>
      <button type="button" onClick={prop}>
        Solicitar entrada
      </button>
    </div>
  );
};

export default ButtonLogin;