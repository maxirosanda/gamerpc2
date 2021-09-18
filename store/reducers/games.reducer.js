import {GAMES} from '../../data/games'

import { SELECTEDGAMES } from '../actions/games.actions';

const INITIAL_STATE = {
    list:GAMES ,
    selectedId: null
}

const  GamesReducer = (state = INITIAL_STATE,action) =>{

    
    switch(action.type) {
        case SELECTEDGAMES:

            return {
                ...state,
                selectedId: action.id
              };

        default:
            return state
            
    }
}

export default GamesReducer

