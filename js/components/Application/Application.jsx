import React from 'react';

class Application extends React.Component {
    render(){
        return (
            <section className="application">
                <div className="chat"><img src={require('./../../../styles/images/Chat.png')} alt="Chat"/></div>
                <div className="download">
                    <div className="text">
                        <h5>Supme.io Application</h5>
                        <p>Open an app, login with your google or Facebook account, or continue without login.</p>
                        <p>Share your location details.</p>
                        <p>                               Search for the company you want to communicate with (verified companies have a "verified" icon next to it), pick the subject, and simply start chatting.
                            If the business supports attachments, voice/video call escalation, etc. it is also supported from supme application.</p>
                        <button>Get App<div className="tooltip">App will be available soon</div></button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Application