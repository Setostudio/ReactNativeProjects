import {
  VIEW_PRODUCT,
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY
} from "../../actions/types";
import data from "../../data";

const productReducer = (state = data, action) => {
  switch (action.type) {
    case VIEW_PRODUCT:
      return { ...state, selectedProduct: { ...action.payload } };
    case ADD_PRODUCT:
      return {
        ...state,
        listSelectedId: [...state.listSelectedId, action.payload]
      };
    case INCREASE_QUANTITY:
      return { ...state, listProduct: { ...action.payload } };
    case DECREASE_QUANTITY:
      return { ...state, listProduct: { ...action.payload } };
    default:
      return state;
  }
};

export default productReducer;
