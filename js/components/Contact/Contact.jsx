import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img className="background" src='https://storage.googleapis.com/supmeiostatic/images/wave-011.svg' />
                    <div className="container">
                        <div className="logo">
                            <Link onClick={this.handleLink} className="link" to="/">
                                <svg id='Warstwa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' fill="#ffffff">
                                    <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='348.819'
                                                    y1='500' x2='660.914' y2='500'>
                                        <stop offset='0' stopColor='#6a67ce' />
                                        <stop offset='1' stopColor='#be00ff' />
                                    </linearGradient>
                                    <path className='st0' d='M614.9,347.5c-31.7-31.6-77.1-45.2-135-40.6c-58,4.7-103.8,41.3-122.6,97.8c-20.1,60.6-3.8,127.6,40.6,166.6 c29.6,26,95.3,59.8,214.5,13.1l-18.8,68.7l-32.7-34.8c-6.6-7-17.7-7.4-24.8-0.8c-7,6.6-7.4,17.7-0.8,24.8l43.4,46.2l2.8,1.4 c5.8,2.9,10.9,3.9,15.4,3.9c4.7,0,8.7-1.2,11.6-2.6c11.8-5.5,15.6-17.3,16.5-20.5l23-84.1c16.4-59.9-17.2-48.6-17.2-48.6 c-90.8,43.6-165.3,46-209.8,6.9c-34-29.9-46.2-81.8-30.5-129.3c14.4-43.4,48-70.4,92.2-74c47.1-3.8,83.2,6.4,107.2,30.3 c40.1,39.8,35.7,106.2,35.7,106.9c-0.7,9.6,6.5,18,16.1,18.8c9.6,0.7,18.1-6.4,18.8-16.1C660.9,478.4,666.5,399,614.9,347.5z'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </header>
                <section className="contact">
                    <div className="text">
                        <h1>Contact us</h1>
                    </div>
                    <form>
                        <input
                            autoFocus
                            required
                            name="name"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Message"
                        >
                        </textarea>
                        <div><input type="submit" value="Send"/></div>
                    </form>
                </section>
            </div>
        )
    }
}

export default Contact