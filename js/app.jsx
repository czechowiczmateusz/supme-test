import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
require('.././styles/style.scss');
require('aos/src/sass/aos.scss');
import Template from "./components/Template/";

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                    <Route path="/" component={Template}/>
            </BrowserRouter>
        )
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App></App>,
        document.getElementById("app"),
    )
});