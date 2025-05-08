let id = 0;
export default function reducers(state = [], action) {
    switch (action.type) {
        case "Add_Task":
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed:false

                }
            ]
        case "Remove_Task":
            return state.filter(task => task.id !== action.payload)
        default:
            return state;
    }
 
    
}