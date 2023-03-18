import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [enteredProductID, newProductID] = useState("");
  const [enteredSellingPrice, newSellingPrice] = useState("");
  const [enteredProductName, newProductName] = useState("");

  // const [totalPrice, setTotalPrice] = useState(0);
  // const calculateTotalPrice = () => {
  //   var price = 0;
  //   props.product.forEach((prod) => (price += parseInt(prod.sell)));
  //   setTotalPrice(price);
  // };
  // calculateTotalPrice();

  const ProductIDChangeHandler = (event) => {
    newProductID(event.target.value);
  };

  const SellingPriceChangeHandler = (event) => {
    newSellingPrice(event.target.value);
  };

  const ProductNameChangeHandler = (event) => {
    newProductName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const FormData = {
      productid: enteredProductID,
      sellingprice: enteredSellingPrice,
      productname: enteredProductName,
    };

    var x = JSON.stringify(FormData);
    localStorage.setItem(enteredProductID, x);

    props.onAddProduct(
      enteredProductID,
      enteredSellingPrice,
      enteredProductName
    );

    // props.onDeleteProduct(
    //   enteredProductID,
    //   enteredSellingPrice,
    //   enteredProductName
    // );

    newProductID("");
    newSellingPrice("");
    newProductName("");
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Product ID: </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredProductID}
              onChange={ProductIDChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Selling Price:</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredSellingPrice}
              onChange={SellingPriceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Product Name:</label>
            <input
              type="text"
              value={enteredProductName}
              onChange={ProductNameChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Product</button>
        </div>
      </form>
      {/* <h3>Total Amount is : {totalPrice}</h3> */}
    </React.Fragment>
  );
};

export default Form;
