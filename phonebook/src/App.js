import './App.css';
import {useEffect} from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Formats from "./Components/layout/Accordion/Formats";
import Paper from './Components/layout/Certificate/Paper'

const App = () => {
    useEffect(() => {
        }
    )
    return (
        <Provider store={store}>
            <div className="container">
                <h1 className="subject">Phone Book</h1>
                <div className="contact-wrap">
                    <Formats/>
                    <Paper/>
                </div>
            </div>
        </Provider>
    );
}
export default App;
