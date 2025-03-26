import {store} from "./store.tsx";

function MainReact() {
    return (
        <>
        <h1 className={"text-2xl mx-auto bg-red-500 text-white"}>Hello React / Redux</h1>
            store.dispatch({type:'Add_Task',payload:task:"Task One"})
            { console.log(store.getState()) }

        </>
    );
}

export default MainReact;