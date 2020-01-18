import React from "react";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <GlobalStyles />
                <Routes />
            </Provider>
        </div>
    );
}
