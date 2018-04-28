import React from "react";
import ReactDOM from "react-dom";
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
require('.././styles/style.scss');

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navDisplay: 'none',
            change: ''
        }
    }

    handleChange = () => {
        if(this.state.change === '') {
            this.setState({
                navDisplay: 'flex',
                change: 'change'
            })
        } else {
            this.setState({
                navDisplay: 'none',
                change: ''
            })
        }
    };

    handleLink = () => {
        this.setState({
            navDisplay: 'none',
            change: ''
        })
    };

    handleAbout = () => {
        const about = ReactDOM.findDOMNode(this.refs.about);
        window.scrollTo(0, about.offsetTop);
        this.setState({
            navDisplay: 'none',
            change: ''
        })
    };

    handleTeam = () => {
        const team = ReactDOM.findDOMNode(this.refs.team);
        window.scrollTo(0, team.offsetTop);
        this.setState({
            navDisplay: 'none',
            change: ''
        })
    };

    render(){
        AOS.init();
        return (
            <div>
                <header>
                    <img className="background" src={require('./../styles/images/wave-01.svg')} />
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
                        <nav>
                            <div onClick={this.handleChange} className="menu">
                                <div className={this.state.change}></div>
                                <div className={this.state.change}></div>
                            </div>
                            <ul className="desktop" >
                                <li onClick={this.handleAbout}>About</li>
                                <li onClick={this.handleTeam}>Team</li>
                                <li>
                                    <Link onClick={this.handleLink} className="link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul style={{display: this.state.navDisplay}} >
                                <li onClick={this.handleAbout}>About</li>
                                <li onClick={this.handleTeam}>Team</li>
                                <li>
                                    <Link onClick={this.handleLink} className="link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className="phones">
                        <img src={require('./../styles/images/1.jpg?noresize')}/>
                    </div>
                    <div className="download">
                        <h1>Lorem ipsum</h1>
                        <p>consectetur adipiscing elit.</p>
                    </div>
                </main>
                <section ref="about" className="about">
                    <div className="container">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis odit praesentium ut. Deserunt eos fugit nemo quas, quia quos repudiandae rerum vitae! A mollitia, nesciunt provident quo repellendus sapiente unde.</p>
                        <button>Play</button>
                    </div>
                </section>
                <section className="info">
                        <div className="box" data-aos="fade-down">
                            <div className="circle first">
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='150' height='100'
                                     viewBox='0 0 97.054 97.054'>
                                    <g fill='#6a67ce'>
                                        <path d='M63.027,0h-29v29h29V0z M58.027,24h-19V5h19V24z' />
                                        <rect x='46.026' y='33.952' width='5' height='28.845'/>
                                        <path d='M48.527,66.804c-8.34,0-15.125,6.785-15.125,15.125c0,8.341,6.785,15.125,15.125,15.125s15.125-6.784,15.125-15.125 C63.652,73.589,56.867,66.804,48.527,66.804z M48.527,92.054c-5.583,0-10.125-4.542-10.125-10.125s4.542-10.125,10.125-10.125 s10.125,4.542,10.125,10.125S54.11,92.054,48.527,92.054z'
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3>Simple to use</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="box" data-aos="fade-down">
                            <div className="circle second">
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 501.888 501.888'
                                     width='150' height='100'>
                                    <g fill='#FFF'>
                                        <path d='M250.944,0L221.68,14.688l14.304,28.624l14.96-7.536l176,88v118.112c-0.13,55.366-26.185,107.476-70.4,140.8l-105.6,79.2 l-105.6-79.2c-44.215-33.324-70.27-85.434-70.4-140.8V123.776l17.936-8.96L78.576,86.192L42.944,104v137.888 c0.155,65.433,30.947,127.016,83.2,166.4l124.8,93.6l124.8-93.6c52.253-39.384,83.045-100.967,83.2-166.4V104L250.944,0z'
                                        />
                                        <rect x='169.892' y='34.37' transform='rotate(63.435 185.899 50.372)'
                                              width='32' height='32' />
                                        <rect x='112.655' y='63.026' transform='rotate(63.435 128.66 79.03)' width='32'
                                              height='32' />
                                        <path d='M130.944,306.592l120,73.856l120-73.856v-137.6l-120-73.888l-120,73.84V306.592z M338.944,288.72l-72,44.368v-82.256 l72-44.32V288.72z M250.944,132.672l73.472,45.216l-73.472,45.216l-73.472-45.216L250.944,132.672z M162.944,206.512l72,44.32 v82.256l-72-44.304V206.512z'
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3>Secure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="box" data-aos="fade-down">
                            <div className="circle second">
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 380 380'
                                     width='150' height='100'>
                                    <g fill='#FFF'>
                                        <path d='M44,272c-13.2,0-24.4,10.8-24.4,24.4c0,13.2,10.8,24.4,24.4,24.4c13.2,0,24.4-10.8,24.4-24.4S57.6,272,44,272z M44,310 c-7.6,0-14-6.4-14-14c0-7.6,6.4-14,14-14c7.6,0,14,6.4,14,14C58,304,52,310,44,310z'
                                        />
                                        <path d='M123.2,165.2c-13.2,0-24.4,10.8-24.4,24.4c0,13.2,10.8,24.4,24.4,24.4c13.2,0,24.4-10.8,24.4-24.4 C147.2,176.4,136.4,165.2,123.2,165.2z M123.2,203.6c-7.6,0-14-6.4-14-14c0-7.6,6.4-14,14-14c7.6,0,14,6.4,14,14 C137.2,197.2,130.8,203.6,123.2,203.6z'
                                        />
                                        <path d='M242,159.6c-13.2,0-24.4,10.8-24.4,24.4c0,13.2,10.8,24.4,24.4,24.4c13.2,0,24.4-10.8,24.4-24.4 C266,170.4,255.2,159.6,242,159.6z M242,197.6c-7.6,0-14-6.4-14-14c0-7.6,6.4-14,14-14c7.6,0,14,6.4,14,14 C255.6,191.6,249.6,197.6,242,197.6z'
                                        />
                                        <path d='M334.4,38.4c-24.8,0-44.8,20-44.8,44.8c0,11.2,4.4,21.6,11.2,29.6l-32,35.6c-7.6-5.6-16.8-9.2-26.8-9.2 c-23.6,0-42.8,18.4-44.4,41.6h-30.4c-4-20.4-22.4-35.6-43.6-35.6c-24.8,0-44.8,20-44.8,44.8c0,12.8,5.2,24,14,32.4l-26,35.6 c-6.4-3.6-14-6-22-6C20,252,0,272,0,296.8s20,44.8,44.8,44.8c24.8,0,44.8-20,44.8-44.8c0-12.8-5.6-24.4-14.4-32.8l26-35.6 c6.8,4,14.4,6,22.4,6c24,0,44-19.2,44.8-43.2h30c3.6,21.2,22,37.6,44,37.6c24.8,0,44.8-20,44.8-44.8c0-10.8-4-20.8-10-28.4 l32.4-36c7.2,5.2,16,8,25.6,8c24.8,0,44.8-20,44.8-44.8C378.8,58.4,358.8,38.4,334.4,38.4z M78.4,296c0,18.8-15.2,34.4-34.4,34.4 c-18.8,0-34.4-15.2-34.4-34.4c0-18.8,15.2-34.4,34.4-34.4C63.2,262,78.4,277.2,78.4,296z M123.2,224c-18.8,0-34.4-15.2-34.4-34.4 c0-18.8,15.2-34.4,34.4-34.4c18.8,0,34.4,15.2,34.4,34.4C157.6,208.4,142,224,123.2,224z M242,218c-18.8,0-34.4-15.2-34.4-34.4 c0-18.8,15.2-34.4,34.4-34.4c18.8,0,34.4,15.2,34.4,34.4C276,202.8,260.8,218,242,218z M334.4,117.2c-18.8,0-34.4-15.2-34.4-34.4 c0-18.8,15.2-34.4,34.4-34.4c18.8,0,34.4,15.2,34.4,34.4C368.4,102,353.2,117.2,334.4,117.2z'
                                        />
                                        <path d='M334.4,58.8c-13.2,0-24.4,10.8-24.4,24.4c0,13.2,10.8,24.4,24.4,24.4c13.2,0,24.4-10.8,24.4-24.4 C358.4,69.6,347.6,58.8,334.4,58.8z M334.4,96.8c-7.6,0-14-6.4-14-14c0-7.6,6.4-14,14-14c7.6,0,14,6.4,14,14 C348,90.8,342,96.8,334.4,96.8z'
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3>Keeps track of all chat history</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="box" data-aos="fade-down">
                            <div className="circle first">
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 363 363'
                                     width='150' height='100'>
                                    <path d='M277.73,94.123c0,10.997-8.006,17.685-13.852,22.593c-2.214,1.859-6.335,5.251-6.324,6.518 c0.04,4.97-3.956,8.939-8.927,8.939c-0.025,0-0.05,0-0.075,0c-4.936,0-8.958-3.847-8.998-8.792 c-0.079-9.747,7.034-15.584,12.75-20.383c4.485-3.766,7.426-6.416,7.426-8.841c0-4.909-3.994-8.903-8.903-8.903 c-4.911,0-8.906,3.994-8.906,8.903c0,4.971-4.029,9-9,9s-9-4.029-9-9c0-14.834,12.069-26.903,26.904-26.903 C265.661,67.253,277.73,79.288,277.73,94.123z M248.801,140.481c-4.971,0-8.801,4.029-8.801,9v0.069 c0,4.971,3.831,8.966,8.801,8.966s9-4.064,9-9.035S253.772,140.481,248.801,140.481z M67.392,203.174c-4.971,0-9,4.029-9,9 s4.029,9,9,9h0.75c4.971,0,9-4.029,9-9s-4.029-9-9-9H67.392z M98.671,203.174c-4.971,0-9,4.029-9,9s4.029,9,9,9h0.749 c4.971,0,9-4.029,9-9s-4.029-9-9-9H98.671z M363,59.425v101.301c0,23.985-19.232,43.448-43.217,43.448H203.066 c-2.282,0-4.161-0.013-5.733-0.046c-1.647-0.034-3.501-0.047-4.224,0.033c-0.753,0.5-2.599,2.191-4.378,3.83 c-0.705,0.649-1.503,1.363-2.364,2.149l-33.022,30.098c-2.634,2.403-6.531,3.025-9.793,1.587c-3.262-1.439-5.552-4.669-5.552-8.234 v-95.417H43.72c-14.062,0-25.72,11.523-25.72,25.583v101.301c0,14.061,11.659,25.116,25.72,25.116h130.374 c2.245,0,4.345,1.031,6.003,2.545L207,317.523v-85.539c0-4.971,4.029-9,9-9s9,4.029,9,9v105.938c0,3.565-2.04,6.747-5.303,8.186 c-1.167,0.515-2.339,0.718-3.566,0.718c-2.204,0-4.378-0.905-6.069-2.449l-39.457-36.204H43.72c-23.986,0-43.72-19.13-43.72-43.116 V163.757c0-23.985,19.734-43.583,43.72-43.583H138V59.425c0-23.986,19.885-43.251,43.871-43.251h137.913 C343.768,16.174,363,35.439,363,59.425z M345,59.425c0-14.061-11.157-25.251-25.217-25.251H181.871 C167.81,34.174,156,45.364,156,59.425v69.833v83.934l18.095-16.353c0.838-0.765,1.777-1.465,2.462-2.097 c8.263-7.614,10.377-8.831,21.155-8.609c1.47,0.031,3.221,0.042,5.354,0.042h116.717c14.06,0,25.217-11.388,25.217-25.448V59.425z'
                                          fill='#6a67ce' />
                                </svg>
                            </div>
                            <h3>Easiest way to find chat support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                </section>
                <section className="big">
                    <img className="background" src={require('./../styles/images/wave-03.svg')} />
                    <div>
                        <img src={require('./../styles/images/2.jpg')}/>
                    </div>
                </section>
                <section ref="team" className="team">
                    <img className="background" src={require('./../styles/images/wave-02.svg')} />
                    <div className="container">
                        <div className="description">
                            <h4>Team</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi assumenda culpa ea, est ex harum inventore ipsam laborum modi nam necessitatibus praesentium rerum unde veritatis vero voluptate. Culpa, ipsam?</p>
                        </div>
                        <div className="people">
                            <div className="person">
                                    <div className="photo"><img src={require('./../styles/images/015-man.png')} alt=""/></div>
                                    <h4>Jan Nowak</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Curabitur sodales eget magna ac venenatis. Donec bibendum viverra consectetur. Phasellus et condimentum</p>
                            </div>
                            <div className="person">
                                    <div className="photo"><img src={require('./../styles/images/015-man.png')} alt=""/></div>
                                    <h4>Jan Nowak</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Curabitur sodales eget magna ac venenatis. Donec bibendum viverra consectetur. Phasellus et condimentum</p>
                            </div>
                        </div>
                        <div className="circles">
                            <div data-aos="fade-down"
                                 className="circle"></div>
                            <div data-aos="fade-down"
                                 data-aos-delay="200"
                                 className="circle"></div>
                            <div data-aos="fade-down"
                                 data-aos-delay="400"
                                 className="circle"></div>
                        </div>
                    </div>
                </section>
                <section className="application">
                    <img className="chat" src={require('./../styles/images/Chat.jpg')} alt=""/>
                    <div className="download">
                        <div className="text">
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corporis culpa distinctio dolores eius est exercitationem explicabo impedit magni nulla pariatur perspiciatis quas repellat saepe sapiente ullam vero vitae voluptatem.</p>
                            <button>Get App</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img className="background" src={require('./../styles/images/wave-04.svg')} />
                <div className="socials">
                    <div className="logo">
                        <svg fill="#ffffff" id='Warstwa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'>
                            <path className='st0' d='M600.3,175.1c-31.7-31.6-77.1-45.2-135-40.6c-58,4.7-103.8,41.3-122.6,97.8C322.7,293,339,360,383.4,399 c29.6,26,95.3,59.8,214.5,13.1L579,480.8L546.3,446c-6.6-7-17.7-7.4-24.8-0.8c-7,6.6-7.4,17.7-0.8,24.8l43.4,46.2l2.8,1.4 c5.8,2.9,10.9,3.9,15.4,3.9c4.7,0,8.7-1.2,11.6-2.6c11.8-5.5,15.6-17.3,16.5-20.5l23-84.1c16.4-59.9-17.2-48.6-17.2-48.6 c-90.8,43.6-165.3,46-209.8,6.9c-34-29.9-46.2-81.8-30.5-129.3c14.4-43.4,48-70.4,92.2-74c47.1-3.8,83.2,6.4,107.2,30.3 c40.1,39.8,35.7,106.2,35.7,106.9c-0.7,9.6,6.5,18,16.1,18.8c9.6,0.7,18.1-6.4,18.8-16.1C646.3,306,651.9,226.5,600.3,175.1z'
                            />
                            <path className='st0' d='M176.2,723.8c6,2.4,11.1,4.7,15.2,7.1c4.2,2.4,7.7,4.9,10.5,7.6c3.6,3.6,6.2,7.8,7.8,12.4 c1.6,4.7,2.4,10.4,2.4,17.1c0,5-0.9,9.9-2.8,14.7c-1.9,4.7-4.6,8.9-8.2,12.6c-3.5,3.7-7.8,6.7-12.8,9c-5,2.3-10.6,3.4-16.9,3.4 c-5.5,0-10.9-0.9-16.2-2.7c-5.3-1.8-9.7-4.1-13.4-7c-2.2-1.7-4.1-3.7-5.6-5.9c-1.5-2.2-2.2-4.7-2.2-7.6c0-3.2,1.1-6.1,3.4-8.9 c2.3-2.8,5.1-4.1,8.4-4.1c2.8,0,5.8,0.9,9,2.8c2.4,1.4,4.9,2.6,7.6,3.5c2.7,0.9,5.7,1.4,9,1.4c4.7,0,8.2-1.2,10.4-3.7 c2.2-2.4,3.3-5.5,3.3-9.1c0-3.5-0.6-6.1-1.8-7.9c-1.2-1.8-2.6-3.3-4.4-4.6c-3.6-2.7-7.6-4.7-11.9-6.1c-4.3-1.4-8.6-3.3-12.6-5.7 c-5.5-3.2-9.9-7.2-13-12.1c-3.2-4.9-4.7-11.2-4.7-18.9c0-5.7,0.9-10.8,2.8-15.5c1.9-4.6,4.5-8.6,7.9-11.9 c3.4-3.3,7.4-5.9,11.9-7.7c4.6-1.8,9.6-2.7,15.1-2.7c5.5,0,11,1,16.3,3.1c5.4,2.1,9.5,5.1,12.3,9.2c1.9,2.7,2.8,6.1,2.8,10.2 c0,3.3-1,6.2-3,8.6c-2,2.4-5,3.7-9.1,3.7c-1.6,0-3.3-0.4-5.1-1.1c-1.8-0.7-3.2-1.7-4.1-3c-2.7-3.5-6.5-5.2-11.6-5.2 c-2.5,0-4.8,0.9-6.7,2.8c-2,1.9-3,4.7-3,8.3c0,3.3,0.7,5.9,2.2,7.7C167.2,719.6,170.7,721.6,176.2,723.8z'
                            />
                            <path className='st0' d='M329,807c-7.7,0-12.3-3.9-13.7-11.8c-3.2,4.6-7.4,8.2-12.8,10.9c-5.4,2.7-11.7,4-19.1,4 c-8.5,0-16.2-1.4-22.9-4.3c-6.8-2.8-12.5-6.8-17.3-11.8c-4.7-5-8.4-11.1-10.9-18.2c-2.5-7.1-3.8-14.9-3.8-23.4v-65 c0-4.3,1.2-7.6,3.7-9.9c2.4-2.4,5.7-3.5,9.8-3.5c3.9,0,7.2,1.2,9.7,3.5c2.5,2.4,3.8,5.7,3.8,9.9v65c0,9.3,2.5,16.7,7.4,22.3 c5,5.6,12.3,8.4,21.9,8.4c9.6,0,16.8-2.8,21.5-8.3c4.7-5.5,7.1-13,7.1-22.5v-65c0-4.3,1.2-7.6,3.7-9.9c2.4-2.4,5.8-3.5,10-3.5 c3.8,0,7,1.2,9.6,3.5c2.6,2.4,3.9,5.7,3.9,9.9v107.8c0,3.6-1.1,6.5-3.4,8.6C334.8,806,332.1,807,329,807z'
                            />
                            <path className='st0' d='M390.9,852.9c0,4.1-1.2,7.4-3.7,9.8c-2.4,2.4-5.8,3.7-10,3.7c-3.9,0-7.2-1.2-9.8-3.7 c-2.6-2.4-3.9-5.7-3.9-9.8V685.8c0-3.6,1.1-6.5,3.4-8.6c2.3-2.1,5-3.2,8.2-3.2c4.9,0,8.3,1.3,10.3,3.9c2,2.6,3.5,6.4,4.6,11.5 c2-2.4,4.6-4.6,7.6-6.9c3-2.2,6.3-4.2,9.8-5.9c3.5-1.7,7.3-3.1,11.3-4.1c4-1,8.2-1.5,12.4-1.5c9,0,17.7,1.8,26.1,5.4 c8.4,3.6,15.9,8.6,22.3,14.9c6.5,6.3,11.6,13.7,15.5,22.1c3.9,8.4,5.8,17.5,5.8,27.1c0,9.6-1.9,18.6-5.8,27.1 c-3.9,8.4-9,15.8-15.5,22.1c-6.5,6.3-13.9,11.3-22.3,14.9c-8.4,3.6-17.1,5.4-26.1,5.4c-9,0-16.9-1.5-23.6-4.6 c-6.8-3.1-12.3-7.1-16.5-12.2V852.9z M431.1,782.7c5.8,0,11.3-1.1,16.5-3.3c5.2-2.2,9.7-5.2,13.5-9.1c3.8-3.9,6.8-8.4,9-13.5 c2.2-5.1,3.3-10.6,3.3-16.4c0-5.8-1.1-11.3-3.3-16.4c-2.2-5.1-5.2-9.6-9-13.5c-3.8-3.9-8.3-6.9-13.5-9.1 c-5.2-2.2-10.7-3.3-16.5-3.3c-5.7,0-11,1.1-15.8,3.3c-4.9,2.2-9.1,5.2-12.8,9.1c-3.6,3.9-6.5,8.4-8.5,13.5 c-2.1,5.1-3.1,10.6-3.1,16.4c0,5.8,1,11.3,3.1,16.4c2,5.1,4.9,9.6,8.5,13.5c3.6,3.9,7.9,6.9,12.8,9.1 C420.1,781.6,425.4,782.7,431.1,782.7z'
                            />
                            <path className='st0' d='M546,793.6c0,4.3-1.2,7.6-3.7,9.9c-2.4,2.4-5.8,3.5-10,3.5c-3.8,0-7-1.2-9.6-3.5s-3.9-5.7-3.9-9.9V685.8 c0-3.6,1-6.5,3.1-8.6c2-2.1,4.8-3.2,8.3-3.2c7.7,0,12.2,3.6,13.5,10.9c3.6-4.9,8.2-8.4,13.6-10.6s11-3.3,16.7-3.3 c3.8,0,7.6,0.4,11.6,1.2c3.9,0.8,7.7,2,11.2,3.5c3.5,1.6,6.9,3.7,9.9,6.3c3.1,2.6,5.6,5.6,7.7,9.1c4.6-7.1,10.6-12.2,18.2-15.4 c7.6-3.2,15.1-4.7,22.7-4.7c6.8,0,13.4,1.4,19.7,4.1c6.4,2.8,12,6.5,16.9,11.3s8.8,10.6,11.8,17.3c3,6.7,4.5,14,4.5,21.9v68.1 c0,4.3-1.2,7.6-3.7,9.9c-2.4,2.4-5.7,3.5-9.8,3.5c-3.9,0-7.2-1.2-9.7-3.5c-2.5-2.4-3.8-5.7-3.8-9.9v-68.1c0-3.9-0.7-7.6-2.1-10.9 c-1.4-3.3-3.4-6.2-5.8-8.7c-2.4-2.5-5.2-4.5-8.4-5.9c-3.2-1.4-6.4-2.1-9.7-2.1c-3.5,0-6.9,0.7-10.2,2.1c-3.3,1.4-6.3,3.4-9,5.9 c-2.7,2.5-4.8,5.4-6.5,8.7c-1.7,3.3-2.5,6.9-2.5,10.9v68.1c0,4.3-1.2,7.6-3.7,9.9s-5.8,3.5-10,3.5c-3.8,0-6.9-1.2-9.5-3.5 c-2.5-2.4-3.8-5.7-3.8-9.9v-68.1c0-3.9-0.8-7.6-2.2-10.9c-1.5-3.3-3.5-6.2-5.9-8.7c-2.4-2.5-5.2-4.5-8.4-5.9 c-3.2-1.4-6.4-2.1-9.7-2.1s-6.7,0.7-10,2.1c-3.4,1.4-6.4,3.4-9,5.9c-2.6,2.5-4.7,5.4-6.4,8.7c-1.7,3.3-2.5,6.9-2.5,10.9V793.6z'
                            />
                            <path className='st0' d='M796.3,670.9c9.5,0,18.4,1.8,26.8,5.4c8.4,3.6,15.8,8.5,22.1,14.5c6.3,6.1,11.3,13.2,15,21.3 c3.7,8.1,5.6,16.7,5.6,25.7c0,4.6-1.2,8-3.5,10.4c-2.4,2.4-5.7,3.5-9.9,3.5h-96c0.8,4.4,2.4,8.5,5,12.3c2.5,3.8,5.6,7.1,9.3,9.8 c3.7,2.8,7.8,4.9,12.2,6.5c4.4,1.6,8.9,2.4,13.5,2.4c5.8,0,11.2-1,16.1-3.1c4.9-2,9.2-5,13-8.7c1.6-1.4,3.3-2.6,5.2-3.4 c1.9-0.9,3.7-1.3,5.4-1.3c3.6,0,6.7,1.3,9.1,4c2.4,2.7,3.7,5.8,3.7,9.5c0,1.9-0.2,3.7-0.7,5.4c-0.5,1.7-1.4,3.3-2.8,4.7 c-6.1,6.8-13.4,11.8-21.7,15.1c-8.4,3.3-17.4,5-27.2,5c-9.6,0-18.6-1.8-27.1-5.4c-8.4-3.6-15.8-8.5-22.1-14.8 c-6.3-6.2-11.3-13.6-14.9-22c-3.6-8.4-5.4-17.5-5.4-27.1c0-9.6,1.8-18.6,5.4-27.1c3.6-8.4,8.6-15.8,14.9-22.1 c6.3-6.3,13.7-11.3,22.1-15C777.7,672.7,786.7,670.9,796.3,670.9z M796.3,698.1c-4.6,0-9.1,0.8-13.5,2.4 c-4.4,1.6-8.4,3.8-11.9,6.6c-3.5,2.8-6.6,6.1-9.1,9.9c-2.5,3.8-4.3,7.9-5.2,12.3h79.4c-0.8-4.4-2.4-8.5-5-12.3 c-2.5-3.8-5.6-7.1-9.2-9.9c-3.6-2.8-7.6-5-12.1-6.6C805.4,698.9,800.9,698.1,796.3,698.1z'
                            />
                        </svg>
                    </div>
                    <div className="media">
                        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='512' height='512'
                             viewBox='0 0 430.117 430.117'>
                            <path id='LinkedIn' d='M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z'
                                  fill='#FFF' />
                        </svg>
                        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 612 612'
                             width='512' height='512'>
                            <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z'
                                  fill='#FFF' />
                        </svg>
                        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 512 512'
                             width='512' height='512'>
                            <path d='M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80 c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904 C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728 c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816 c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096 C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z'
                                  fill='#FFF' />
                        </svg>
                    </div>
                </div>
            </footer>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img className="background" src={require('./../styles/images/wave-01.svg')} />
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt est illum iure molestiae molestias perspiciatis veniam veritatis. Deserunt dolore dolorem dolores eaque excepturi nobis perspiciatis ratione tenetur voluptas voluptatum.</p>
                    </div>
                    <form>
                        <input
                            autoFocus
                            type="text"
                            placeholder="Name"
                        />
                        <input type="text" placeholder="Surname"/>
                        <textarea placeholder="Message"></textarea>
                        <div><input type="submit" value="Send"/></div>
                    </form>
                </section>
            </div>
        )
    }
}

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