import { Provider } from "react-redux"
import MainRedux from "./components/reduxExample/mainRedux"

import AnotherRedux from "./components/anotherRedux/anotherRedux"
import { store } from "./components/anotherRedux/store.js"

function App() {


  return (
    <>
    <Provider store={store}>     <AnotherRedux/>
    </Provider>

    </>
  )
}

export default App
