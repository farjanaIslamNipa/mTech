import { actionTypes } from "../actions/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
    switch(action.type){
        case actionTypes.ADD_TO_CART: 
        if(selectedProduct){
            selectedProduct.quantity = selectedProduct.quantity + 1
            return {
                ...state,
                cart:[...state.cart, selectedProduct]
            };
        }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            }
        case actionTypes.REMOVE_FROM_CART:
            console.log(action.payload.id);
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default productReducer;