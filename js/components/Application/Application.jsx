import React from 'react';

class Application extends React.Component {
    render(){
        return (
            <section className="application">
                <div className="chat"><img src='https://storage.googleapis.com/supmeiostatic/images/Chat.png' alt="Chat"/></div>
                <div className="download">
                    <div className="text">
                        <h5>Supme.io Application</h5>
                        <p>Open an app, login with your Google or Facebook account, or continue without login.</p>
                        <p>Share your location details.</p>
                        <p>Search for the company you want to communicate with, pick the subject, and simply start chatting. If the business supports attachments, voice/video call escalation, etc. it is also supported from supme application.</p>
                        <button>Get App<div className="tooltip">We are working on it</div></button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Application