import { combineReducers } from "redux";
import selectedTimerReducer from "./selectedTimerReducer";
import timersReducer from "./TimersReducer";

export default combineReducers({
    timers: timersReducer, //array
    selectedTimer: selectedTimerReducer, //int/number
});