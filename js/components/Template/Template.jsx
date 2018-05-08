import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from "./../../components/Footer/";
import HomePage from "./../../components/HomePage";
import Contact from "./../../components/Contact/";

class Template extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route component={HomePage} />
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}

export default Template