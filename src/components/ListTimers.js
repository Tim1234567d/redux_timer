import { useSelector } from "react-redux"
import TimerView from "./TomerView";


export default function ListTimers() {
    const timers = useSelector(state => state.timers);
    return (
        <div>
            {timers.map((timer, index) => {
                return (
                    <TimerView
                        key={index}
                        timer={timer}
                        index={index}
                    />
                )
            })}
        </div>
    )
}