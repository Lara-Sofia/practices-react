import { useState } from "react";
import CalculadoraInput from "./CalculadoraInput";
const Calculadora = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(0);

    const num1ChangeHandler = (num1) => { 
        setNum1(num1);
    };
    const num2ChangeHandler = (num2) => { 
        setNum2(num2);
    };
    
    const sumarNumeros = () => {
        const resultadoSuma = parseInt(num1) + parseInt(num2);
        setResultado(resultadoSuma);
    };
    
    return (
        <div>
            <CalculadoraInput 
                letNum1={num1} 
                onNum1ChangeHandler={num1ChangeHandler} 
                letNum2={num2}
                onNum2ChangeHandler={num2ChangeHandler} 
            />
            <button onClick={sumarNumeros}>Sumar</button> //click para devolver resultado
            <p>Resultado: {resultado}</p>
        </div>
    );
}
export default Calculadora;