import React from "react";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/Home";


import { Provider } from 'react-redux'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    );
}
