import {
  VIEW_PRODUCT,
  ADD_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
} from "./types";

export const viewProductAction = item => {
  return {
    type: VIEW_PRODUCT,
    payload: item
  };
};

export const addProductIdAction = item => {
  return {
    type: ADD_PRODUCT,
    payload: item
  };
};

export const addProductId = (item, listId) => dispatch => {
  if (listId.includes(item)) {
    return;
  } else {
    dispatch(addProductIdAction(item));
  }
};

export const increaseQuantityAction = item => {
  return {
    type: INCREASE_QUANTITY,
    payload: item
  };
};

export const decreaseQuantityAction = item => {
  return {
    type: DECREASE_QUANTITY,
    payload: item
  };
};

export const increaseQuantity = (index, listProduct) => dispatch => {
  let alterList = { ...listProduct };
  alterList[index] = {
    ...alterList[index],
    productQuantity: alterList[index].productQuantity + 1
  };
  console.log(alterList);
  dispatch(increaseQuantityAction(alterList));
};

export const decreaseQuantity = (index, listProduct) => dispatch => {
  let alterList = { ...listProduct };
  alterList[index] = {
    ...alterList[index],
    productQuantity: alterList[index].productQuantity - 1
  };
  dispatch(decreaseQuantityAction(alterList));
};
