import React from 'react';

class About extends React.Component {
    render(){
        return (
            <section className="about">
                <div className="container">
                    <h2>About</h2>
                    <p>Supme is the ultimate Client to Business app to start chat conversation with any business.</p>
                    <video controls width="720" height="480" src="https://dl.dropboxusercontent.com/s/2ogrkywk1t9qgdz/SUPME%20FINAL.mp4" type="video/mp4" poster={require('./../../../styles/images/SUPME-KOLOR.png')}></video>
                    <button>Play</button>
                </div>
            </section>
        )
    }
}

export default About