import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer, deleteAllTimer, resetAllTimer } from "../store/actions/timer";

export default function NewTimer() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    return (
        <div className="">
            <h1>Timers app</h1>
            <input
                type="text"
                placeholder="enter timer name"
                name="name"
                value={name}
                onChange={((e) => setName(e.target.value))}
            />
            <button onClick={()=>dispatch(addTimer(name))}>Save</button>
            <button onClick={()=>dispatch(resetAllTimer())}>RESET ALL</button>
            <button onClick={()=>dispatch(deleteAllTimer())}>DELETE ALL</button>

        </div>
    )
}