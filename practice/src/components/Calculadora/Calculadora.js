import { useState } from "react";
const Calculadora = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(0);

    const num1ChangeHandler = (e) => { 
        const inputNum = e.target.value;
        if (/^\d*$/.test(inputNum)) {
          setNum1(inputNum);
        }
    }
    const num2ChangeHandler = (e) => { 
        const inputNum = e.target.value;
        if (/^\d*$/.test(inputNum)) {
        setNum2(inputNum);
        }
    }
    const sumarNumeros = () => {
        const resultadoSuma = parseInt(num1) + parseInt(num2);
        setResultado(resultadoSuma);
      };
    
    return (
        <div>
            <input type="text" value={num1} onChange={num1ChangeHandler}/>
            <input type="text" value={num2} onChange={num2ChangeHandler}/>
            <button onClick={sumarNumeros}>Sumar</button> //click para devolver resultado
            <p>Resultado: {resultado}</p>
        </div>
    );
}
export default Calculadora;