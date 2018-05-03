import React from 'react';

class BigPhone extends React.Component {
    render(){
        return (
            <section className="big">
                <img className="background" src={require('./../../../styles/images/wave-03.png')} alt="Background" />
                <div>
                    <img src={require('./../../../styles/images/2.jpg')} alt="Background"/>
                </div>
            </section>
        )
    }
}

export default BigPhone