import {createSlice} from "@reduxjs/toolkit";

export interface CounterSlice{
    value:number;
}
const initialState:CounterSlice={
    value:0
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        actionState:(state:string[], action:string)=> {


    if(action.type === "Add_Task"){
        return [...state, {
            id:++id,
            task:action.payload.task,
            completed:false
        }];
    }
    else if(action.type === "Remove_Task")
    {
        return state.filter(task => task.id !== action.payload.id);

    }
    return state;
}
    }
})
 export const {actionState} = counterSlice.actions;
export default counterSlice.reducer;
