import {PRODUCTS} from '../../data/products'

import { SELECTEDPRODUCT } from '../actions/products.actions';

const INITIAL_STATE = {
    list:PRODUCTS ,
    selectedId: null
}

const  ProductReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case SELECTEDPRODUCT:

            return {
                ...state,
                selectedId: action.id
              };

        default:
            return state
            
    }
}

export default ProductReducer

