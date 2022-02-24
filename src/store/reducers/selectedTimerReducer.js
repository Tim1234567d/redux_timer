import { SELLECT_TIMER } from "../constants";

export default function selectedTimerReducer(state = null, action){
    switch(action.type){
        case SELLECT_TIMER:{
            return state = action.payload.index; 
        }
        default: return state; 
    }
}