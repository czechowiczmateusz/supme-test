import React from 'react';
import AOS from 'aos';

class Team extends React.Component {
    render(){
        AOS.init();
        return (
            <section className="team">
                <img className="background" src={require('./../../../styles/images/wave-02.png')} alt="Background" />
                <div className="container">
                    <div className="description">
                        <h4>Team</h4>
                    </div>
                    <div className="people">
                        <div className="person">
                            <div className="photo"><img src={require('./../../../styles/images/leszekwojnarski.jpg')} alt="Man"/></div>
                            <h4>Leszek Wojnarski</h4>
                            <p>Leszek has more than 10 year experiance and great passion to Unified Communication sollutions, with the strong push to changing, simplify this area of technology. Leszek has worked with vendors that deliver and use work class communication solution to expand and fulfill enterpise' needs.</p>
                        </div>
                        <div className="person">
                            <div className="photo"><img src={require('./../../../styles/images/softwarehouse.PNG')} alt="Man"/></div>
                            <h4>Software House</h4>
                            <p>Team of young and creative people who have experience not only in creating excellent graphic design but also in implementing the newest leading solutions, ensuring both highest quality of our projects and satisfaction of our clients. </p>
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