const CalculadoraInput = ({num1, onNum1ChangeHandler, num2, onNum2ChangeHandler}) => {
    //nro 1
    const num1ChangeHandler = (e) => { //tomando el valor
        onNum1ChangeHandler(e.target.value); //dando a prop x la función
    }
    //nro 2
    const num2ChangeHandler = (e) => { 
        onNum2ChangeHandler(e.target.value);
    }
    return (
        <div>
            <input type="number" value={num1} onChange={num1ChangeHandler}/>
            <input type="number" value={num2} onChange={num2ChangeHandler}/>
        </div>
    );
}
export default CalculadoraInput;