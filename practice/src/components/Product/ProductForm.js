import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAddProduct = () => {
    if (productName.trim() !== "") {
      onAddProduct(productName);
      setProductName("");
    }
  };

  return (
    <div>
      <label>Ingrese el nombre del producto</label>
      <input type="text" value={productName} onChange={handleInputChange} />
      <button onClick={handleAddProduct}>Agregar</button>
    </div>
  );
};

export default ProductForm;