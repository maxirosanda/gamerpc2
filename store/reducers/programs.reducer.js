import {PROGRAMS} from '../../data/programs'

import { SELECTEDPROGRAM } from '../actions/programs.actions';

const INITIAL_STATE = {
    list:PROGRAMS ,
    selectedId: null
}

const  ProgramsReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case SELECTEDPROGRAM:

            return {
                ...state,
                selectedId: action.id
              };

        default:
            return state
            
    }
}

export default ProgramsReducer

