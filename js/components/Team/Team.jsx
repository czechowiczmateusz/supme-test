import React from 'react';
import AOS from 'aos';

class Team extends React.Component {
    render(){
        AOS.init();
        return (
            <section className="team">
                <img className="background" src='https://storage.googleapis.com/supmeiostatic/images/wave-02.png' alt="Background" />
                <div className="container">
                    <div className="description">
                        <h4>Team</h4>
                    </div>
                    <div className="people">
                        <div className="person">
                            <div className="photo"><img src='https://storage.googleapis.com/supmeiostatic/images/leszekwojnarski.jpg' alt="Man"/></div>
                            <h4>Leszek Wojnarski</h4>
                            <span>Founder</span>
                            <p>Leszek has more than 10 years of experiance in Unified Communication business, which has allowed him to develop a technical background, and a passion for this technology. Leszek likes to challenge the way things are done, to make them simpler and easier. He worked with the best companies in the industry in the Communication business, designing, implementing and supporting Unified Communication solutions.
                                Leszek holds a master of engineering degree in Mathematics and Computer Science from the Silesian University of Technology, Gliwice Poland.</p>
                        </div>
                        <div className="person">
                            <div className="photo"><img src='https://storage.googleapis.com/supmeiostatic/images/softwarehouse.png' alt="Man"/></div>
                            <h4>Software House</h4>
                            <p>Team of young and creative people who have experience not only in creating excellent mobile applications but also in implementing the newest leading solutions, ensuring always highest quality for the projects.</p>
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
        )
    }
}

export default Team