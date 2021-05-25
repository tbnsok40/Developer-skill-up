import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {useEffect, Fragment} from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Formats from "./Components/layout/Accordion/Formats";
import Accordion from './Components/layout/Accordion/Accordion'
import Paper from './Components/layout/Certificate/Paper'
import {BrowserRouter} from "react-router-dom";

const App = () => {
    useEffect(() => {
            M.AutoInit();
        }
    )
    return (
        <Provider store={store}>
            <Fragment>
                <div className="main" style={{width:"80%", height: "100%"}}>
                    <div className="navbar-left">
                        <Formats/>
                    </div>
                    <div className="navbar-center">
                        {/*<Patient/>*/}
                        <Paper/>
                    </div>
                </div>
            </Fragment>
        </Provider>
    );
}
export default App;
