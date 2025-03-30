import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function MainCartExample() {
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
    return (<>
        <button className="btn btn-primary p-2 m-2" onClick={()=>dispatch(increment())}>+</button>
        <button className="btn btn-primary p-2 m-2" onClick={()=>dispatch(decrement())}>-</button>
        <h1>{count}</h1>
    </>);
}

export default MainCartExample;