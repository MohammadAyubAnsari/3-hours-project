import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import ProductList from "./components/ProductList";

const App = () => {
  const [productID, setProductID] = useState([]);

  const addProductHandler = (Pid, SP, PN) => {
    setProductID((prevProductID) => {
      return [...prevProductID, { Productid: Pid, sell: SP, Pname: PN }];
    });
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    var price = 0;
    productID.forEach((prod) => (price += parseInt(prod.sell)));
    setTotalPrice(price);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [productID]);

  const deleteProductHandler = function (pid) {
    let temp = [...productID];
    temp = temp.filter((prod) => prod.Productid !== pid);
    setProductID(temp);
  };

  return (
    <div>
      <Form onAddProduct={addProductHandler} />
      <ProductList
        products={productID}
        onDeleteProduct={deleteProductHandler}
      />
      <h3>Total Amount is : {totalPrice}</h3>
    </div>
  );
};

export default App;
