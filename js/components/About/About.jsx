import React from 'react';
import videojs from 'video.js';

class About extends React.Component {
    render(){
        return (
            <section className="about">
                <div className="container">
                    <h2>About</h2>
                    <p>Supme is the ultimate Client to Business app to start chat conversation with any business.</p>
                    <div className="movie">
                        <video
                            width="720"
                            height="480"
                            id="my-player"
                            className="video-js"
                            controls
                            preload="auto"
                            poster={require('./../../../styles/images/SUPME-KOLOR.png')}
                            data-setup='{}'>
                            <source src="https://dl.dropboxusercontent.com/s/2ogrkywk1t9qgdz/SUPME%20FINAL.mp4" type="video/mp4"></source>
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                                <a href="http://videojs.com/html5-video-support/" target="_blank">
                                    supports HTML5 video
                                </a>
                            </p>
                        </video>
                    </div>
                </div>
            </section>
        )
    }
}

export default About