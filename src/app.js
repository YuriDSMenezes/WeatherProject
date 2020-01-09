import React from "react";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";

import store from './store'

import { Provider } from 'react-redux'

export default function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Home />
        </Provider>
    );
}
