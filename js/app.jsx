import React from "react";
import ReactDOM from "react-dom";
import { Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
require('.././styles/style.scss');
import HomePage from "./components/HomePage";
import Template from "./components/Template/";
import Contact from "./components/Contact/";

class App extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Template}>
                    <IndexRoute component={HomePage}></IndexRoute>
                    <Route path="/contact" component={Contact}></Route>
                </Route>
            </Router>
        )
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App></App>,
        document.getElementById("app"),
    )
});