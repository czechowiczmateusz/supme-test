import React from 'react';
import Footer from "./../../components/Footer/";

class Template extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}

export default Template