import { useDispatch } from "react-redux"
import { deleteTimer, resetTimer, toggleTimer } from "../store/actions/timer";
import formatTime from "../utils";

export default function TimerView({ timer, index }) {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{timer.name}</h3>
            <h4>{formatTime(timer.time)}</h4>
            <button
                onClick={() => dispatch(toggleTimer(index))}
            >
                {timer.isRunning ? "stop" : "start"}
            </button>
            <button

                onClick={() => dispatch(resetTimer(index))}

            >reset</button>
            <button

                onClick={() => dispatch(deleteTimer(index))}

            >delete</button>
        </div>
    )
}