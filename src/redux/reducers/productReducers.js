import { actionTypes } from "../actions/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART: 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default productReducer;