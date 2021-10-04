import { ADD_MIPC, LOAD_MISPCS,DELETE_MISPCS } from '../actions/misPcs.actions';
import MiPc from '../../models/MiPc';

const initialState = {
    misPcs: []
}

const MisPcsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MIPC:
            const newMipc = new MiPc(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.description
            );
            return {
                ...state,
                misPcs: state.misPcs.concat(newMipc),
            };
        case LOAD_MISPCS:
            return {
                ...state,
                misPcs: action.misPcs.map(item => new MiPc(
                    item.id,
                    item.title,
                    item.image,
                    item.description
                ))
            }
        case DELETE_MISPCS :
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default MisPcsReducer