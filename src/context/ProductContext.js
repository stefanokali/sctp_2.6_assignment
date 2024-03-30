import { createContext, useReducer } from "react";
import {
  initialProductState,
  productReducer,
} from "../reducers/productReducers";

//Create context
export const ProductContext = createContext();

//Create context provider
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);
  const { count, discount, name, price } = state;

  const handlerPlus = () => {
    dispatch({ type: "INCREMENT_COUNT" });
  };
  const handlerMinus = () => {
    dispatch({ type: "REDUCE_COUNT" });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: "SET_NAME", payload: value });
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", payload: value });
  };

  //State that will be available globally
  //Cant use spread operator because its shallow copy (will not copy object inside the object)
  const context = {
    count: count,
    discount: discount,
    name: name,
    price: price,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerChangeName: handlerChangeName,
    handlerChangePrice: handlerChangePrice,
  }

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
