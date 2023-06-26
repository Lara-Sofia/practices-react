import TableInput from "./TableInput";
import React, { useState } from "react";

const TableForm = () => {
    const [legs, setLegs] = useState("");

    const legsChangeHandler = (legs) => { 
        setLegs(legs);
    };

    return (
        <div>
            <h2>"ingrese la cantiadad de patas que tendrá la mesa"</h2>
            <TableInput legsQuantity={legs} onLegsChange = {legsChangeHandler} />
            {legs && <p>{legs !== "4" ? "Mesa inestable" : "Mesa correcta"}</p>}
        </div>
    );
}

export default TableForm;