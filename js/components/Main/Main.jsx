import React from 'react';

class Main extends React.Component {
    render(){
        return (
            <main>
                <div className="phones">
                    <img src={require('./../../../styles/images/1.jpg?noresize')} alt="Phones"/>
                </div>
                <div className="download">
                    <h1>Supme.io</h1>
                    <p>We are starting crowdfunding soon.</p>
                </div>
            </main>
        )
    }
}

export default Main