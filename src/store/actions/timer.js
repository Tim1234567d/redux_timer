import { DELETE_ALL_TIMER, DELETE_TIMER, NEW_TIMER, RESET_ALL_TIMER, RESET_TIMER, SELLECT_TIMER, TOGGLE_TIMER, UPDATE_TIMER } from "../constants"

export const addTimer = (name) =>{
    return{
        type: NEW_TIMER,
        payload: {name},
    }
}

export const toggleTimer = (index) =>{
    return{
        type: TOGGLE_TIMER,
        payload: {index},
    }
}
export const resetTimer = (index) =>{
    return{
        type: RESET_TIMER,
        payload: {index},
    }
}
export const selectTimer = (index) =>{
    return{
        type: SELLECT_TIMER,
        payload: {index},
    }
}

export const updateTimer = (time) =>{
    return{
        type: UPDATE_TIMER,
        payload: {time}
    }
}
export const resetAllTimer = () =>{
    return{
        type: RESET_ALL_TIMER,
    }
}
export const deleteTimer = (index) =>{
    return{
        type: DELETE_TIMER,
        payload: {index},
    }
}
export const deleteAllTimer = () =>{
    return{
        type: DELETE_ALL_TIMER,
    }
}