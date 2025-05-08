import { Provider } from "react-redux";
import store from "./store";
function MainTask() {
    return (<>
        <h1>Hello</h1>
        {store.dispatch({type:"Add_Task",payload:{task:"Task One"}})}
        {console.log(store.getState())}
        {store.dispatch({type:"Remove_Task",payload:{id:0}})}
        {console.log(store.getState())}


    
    </>);
}

export default MainTask;