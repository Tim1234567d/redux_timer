import Timer from "../../Timers";
import { DELETE_ALL_TIMER, DELETE_TIMER, NEW_TIMER, RESET_ALL_TIMER, RESET_TIMER, TOGGLE_TIMER, UPDATE_TIMER } from "../constants";

export default function timersReducer(state = [], action){
    switch (action.type) {
        case NEW_TIMER:
            const name = action.payload.name ? action.payload.name : `Timer #${state.length}`;
            return [...state, new Timer(name)]; 

        case TOGGLE_TIMER:
            const payloadIndex = action.payload.index;
            const NewState = state.map( (timer, index) => {
                if(payloadIndex === index){
                    return {...timer, isRunning: !timer.isRunning};
                }
                return timer; 
            }) 
            return NewState;

        case UPDATE_TIMER:{
            return state.map((timer)=>{
                if(timer.isRunning){
                    timer = {...timer, time: timer.time += action.payload.time}
                }
                return timer; 
            })
        }

        case RESET_TIMER:{
            return state.map((timer, index)=>{
                if(index === action.payload.index){
                    timer = {...timer, time: 0, isRunning: false};
                }
                return timer; 
            })
        }
        case RESET_ALL_TIMER:{
            return state.map((timer)=>{

                timer = {...timer, time: 0, isRunning: false}; 
                return timer; 
            })
        }
        case DELETE_TIMER:{
            return state.filter((timer, index)=> index !== action.payload.index); 
        }
        case DELETE_ALL_TIMER:{
            return  [];
        }
        default:
            return state;
    }
}