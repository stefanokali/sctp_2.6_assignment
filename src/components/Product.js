import { useState, useReducer, useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";
import { productReducer } from "../reducers/productReducers";
import { initialProductState } from "../reducers/productReducers";
import { ProductContext } from "../context/ProductContext";

function Product() {
  const productCtx = useContext(ProductContext);
  const { count, discount, name, price } = productCtx;

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price: ", name, price);

    // Create new list item
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      total: (count * price * (100 - discount)) / 100,
    };

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    console.log("  newList:", newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log("  sumTotal:", sumTotal);
    setSumTotal(sum);
  };

  return (
    <div className={styles.container}>
      <Card handlerAddProduct={handlerAddProduct} />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
