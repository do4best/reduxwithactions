import { useDispatch, useSelector } from "react-redux";

import {increment, decrement, incrementByAmount,incrementByAsync, selectCount } from "./counterSlicer";
import { useState } from "react";

function AnotherRedux() {
    const [incrementAmount,setIncrementAmount] = useState('2')
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    return ( <>
        <button className="btn btn-primary m-4 p-4" onClick={() => dispatch(increment())}>+</button>
        <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn btn-primary m-4 p-4" onClick={() => dispatch(incrementByAsync(Number(incrementAmount)||0))}>ByAsync</button>
         <button className="btn btn-primary" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
        <h1>{count}</h1>
        {/* input is using increment of useState */}
        <input type="text" placeholder="Type here" className="input" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)} />
 
    </>);
}

export default AnotherRedux;