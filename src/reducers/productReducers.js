//named import export vs default import export

//export initial state
export const initialProductState = {
  count: 1,
  discount: 0,
  name: "Banana",
  price: 2.99,
};

//reducer function
//handle state changes based on action type
//action = {type: "ACTION_NAME", payload: "some value"}
//payload optional

export const productReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT": {
      //1. increment count
      //2. apply discount if count >= 5

      //Need to copy because state is suppose to be immutable
      let newState = { ...state };

      //Increment the count
      newState.count = state.count + 1;

      //Apply the discount
      if (newState.count >= 5) {
        newState.discount = 20;
      }

      return newState;
    }
    case "REDUCE_COUNT": {
      let newState = { ...state };
      
      if (state.count == 0){
        newState.count = 0;
      }
      else{
        newState.count = state.count - 1;
      }
      if (newState.count < 5) {
        newState.discount = 0;
      }
      return newState;
    }
    case "SET_NAME": {
      // let newState = { ...state };
      // newState.name = action.payload;
      // return newState;
      return { ...state, name: action.payload };
    }
    case "SET_PRICE": {
      // let newState = { ...state };
      // newState.name = action.payload;
      // return newState;
      return { ...state, price: action.payload };
    }
    default:
      throw new Error("Unknown action type");
  }
};
