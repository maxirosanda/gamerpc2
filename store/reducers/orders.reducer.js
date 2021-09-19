
import { SELECTEDORDER,CONFIRM_ORDER,GET_ORDERS } from '../actions/orders.action';

const INITIAL_STATE = {
    list:[] ,
    selectedId: null,
    status: 'inactive',
}

const  OrdersReducer = (state = INITIAL_STATE,action) =>{

    
    switch(action.type) {
        
        case CONFIRM_ORDER:
            return {
                ...state,
      };    
      case GET_ORDERS:
        return{
          ...state,
          list: action.list
        }


        default:
            return state
            
    }
}

export default OrdersReducer
