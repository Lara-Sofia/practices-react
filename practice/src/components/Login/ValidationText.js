import { useState } from "react";

import ButtonLogin from "./ButtonLogin";

const ValidationText = ({ edad, apellido, input1, input2 }) => {
  const [outputWelcome, setoutputWelcome] = useState();

  const validationHandler = () => {
    if (edad >= 18 && apellido !== "Golzman") {
      if (edad && apellido) {
        setoutputWelcome(`¡Bienvenido ${apellido}!`);
        console.log("Olha");
      }
    }

    if (apellido === "Golzman") {
      input1.current.focus();
      setoutputWelcome(`¡No puedes pasar ${apellido}!`);
    } else if (edad < 18) {
      input2.current.focus();
      setoutputWelcome(`¡No puedes pasar ${apellido}!`);
    } else {
      input1.current.blur();
    }
  };
  return (
    <div>
      <div>
        <ButtonLogin prop={validationHandler} />
        <p>{outputWelcome}</p>
      </div>
    </div>
  );
};

export default ValidationText;