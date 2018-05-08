import React from 'react';

class About extends React.Component {
    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }
    render(){
        return (
            <section className="about">
                <div className="container">
                    <h2>About</h2>
                    <p>Supme is the ultimate Client to Business app for chat conversation with any business.</p>
                    <div className="movie">
                        <video
                            ref={ node => this.videoNode = node }
                            width="720"
                            height="480"
                            id="my-player"
                            className="video-js"
                            controls
                            preload="auto"
                            poster='https://storage.googleapis.com/supmeiostatic/images/SUPME-KOLOR.png'
                            data-setup='{}'>
                            <source src="https://storage.googleapis.com/supmeiostatic/images/SUPMEFINAL.mp4" type="video/mp4"></source>
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