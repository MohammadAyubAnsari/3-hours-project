import React from "react";

const ProductList = (props) => {
  const removeItem = (Productid) => {
    localStorage.removeItem(Productid);
    props.onDeleteProduct(Productid);
  };

  // const [products, setProducts] = useState();
  // const deleteProductHandler = function (pid) {
  //   let temp = [...products];
  //   temp = temp.filter((prod) => prod.id !== pid);
  //   setProducts(temp);
  // };

  // deleteProductHandler(product.Productid);

  return (
    <div>
      <ul>
        {props.products.map((product) => (
          <li key={product.Productid}>
            {product.sell} {product.Pname}
            <button onClick={() => removeItem(product.Productid)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
