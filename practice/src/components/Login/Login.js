import { useState, useRef } from "react";

import ValidationText from "./ValidationText";

const Login = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);

  const [inputApellido, setInputApellido] = useState("");
  const [inputEdad, setInputEdad] = useState();

  const changeApellidoHandler = (event) => {
    setInputApellido(event.target.value);
  };

  const changeEdadHandler = (event) => {
    setInputEdad(event.target.value);
  };

  return (
    <form>
      <div>
        <label>Ingrese apellido</label>
        <input
          value={inputApellido}
          onChange={changeApellidoHandler}
          type="text"
          ref={input1}
        ></input>

        <label>Ingrese edad</label>
        <input
          value={inputEdad}
          onChange={changeEdadHandler}
          type="number"
          ref={input2}
        ></input>
      </div>
      <div>
        <ValidationText
          apellido={inputApellido}
          edad={inputEdad}
          input1={input1}
          input2={input2}
        />
      </div>
    </form>
  );
};

export default Login;