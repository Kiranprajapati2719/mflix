import React, {Component} from 'react';
 
class Hero extends Component{
  render(){

    const block = {display: "block", marginTop: "50px"};
    const imgStyle = {background:"url(../img/img1.jpg)", width: "100%", height:"auto", minHeight:"100%"};

    return (
      <section style={block}>
      <div className="container">
        <div className="row"> 
        </div>
      </div>
      </section>
    );
  }
}

export default Hero;
