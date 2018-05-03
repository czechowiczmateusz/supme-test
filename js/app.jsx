import React from "react";
import ReactDOM from "react-dom";
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import AOS from 'aos';
require('.././styles/style.scss');
import Footer from "./components/Footer/";
import Main from "./components/Main/";
import About from "./components/About/";
import Info from "./components/Info/";
import BigPhone from "./components/BigPhone/";
import Team from "./components/Team/";
import Application from "./components/Application/";
import videojs from "video.js";

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
                    <img className="background" src={require('./../styles/images/wave-011.svg')} />
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
                <Main></Main>
                <About ref="about"></About>
                <Info></Info>
                <BigPhone></BigPhone>
                <Team ref="team"></Team>
                <Application></Application>
            </div>
        )
    }
}

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    };

    handleName = () => {
      if(this.state.name.length === 0) {
          this.setState({
              error: 'nie tak'
          })
      }
    };

    render() {
        return (
            <div>
                <header>
                    <img className="background" src={require('./../styles/images/wave-011.svg')} />
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
                            onChange={this.handleName}
                            type="text"
                            placeholder="Name"
                        />
                        <input type="text" placeholder="E-mail"/>
                        <textarea placeholder="Message"></textarea>
                        <div><input onSubmit={this.handleSubmit} type="submit" value="Send"/></div>
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