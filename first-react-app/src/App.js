import "./app.css";
import store from './store';
import {Provider} from 'react-redux';
import Buttons from "./components/Buttons";
import Display from "./components/Display";

import {useState} from "react";

function App() {
    // const [currVal, setCurrVal] = useState(0);



    return (
        <Provider store={store}>
            <div className="container">
                <Display/>
                <Buttons/>
            </div>
        </Provider>
    );
}

export default App;
