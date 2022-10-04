import {ActionType} from '../action/actionType';
const InitialState = {
  isFetching: false,
  productData: [],
};
const productsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};
    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    default:
      return state;
  }
};

export default productsReducer;
