import React from "react";

const Cart = ({ products, onRemoveProduct }) => {
  const handleRemoveProduct = (productName) => {
    onRemoveProduct(productName);
  };

  return (
    <div>
      {products.map((product, index) => (
        <h3 key={index} onClick={() => handleRemoveProduct(product)}>
          {product}
        </h3>
      ))}
    </div>
  );
};

export default Cart;