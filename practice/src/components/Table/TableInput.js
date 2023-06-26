
const TableInput = ({legsQuantity, onLegsChange }) => {

    const changeLegsHandler =(event)=>{
        onLegsChange(event.target.value)
    }

    return (
        <div>
            <input 
                type="number"
                value={legsQuantity} //cantidad de patas
                onChange={changeLegsHandler} //para cambiar el estado
            />
        </div>
    );
}
export default TableInput;