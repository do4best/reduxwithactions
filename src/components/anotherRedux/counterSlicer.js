import { createSlice } from "@reduxjs/toolkit"
import { Counter } from "../reduxExample/Counter"

export const counterSlicer = createSlice({
 name:'counter',
    initialState: {
        value:0
    },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => {state.value -= 1
    },
         incrementByAmount: (state, action) => {
        state.value += action.payload
    }
    },
   
})
export const { increment, decrement,incrementByAmount} = counterSlicer.actions

export const incrementByAsync = (amount) => (dispatch)=> {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    },1000)
}

function selectCount(state) {
    return state.counter.value
}
export { selectCount }  
export default counterSlicer;