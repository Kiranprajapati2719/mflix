import React, {Component} from 'react';
// import cover from '../';

class Hero extends Component{
  render(){

    const block = {display: "block", marginTop: "50px"};
    const imgStyle = {background:"url(../img/mv1.jpg)", width: "100%", height:"auto", minHeight:"100%"};

    return (
      <section style={block}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3" >
            <div style={imgStyle}>
            </div>
            {/* <p class="text-primary"> Welcome! to movies library.</p> */}
            {/* <p> Here you can find movies from our library</p> */}
          </div>
          {/* <div className="col-md-3 col-sm-3 col-lg-3" >
            <img src={cover} alt="" style={imgStyle}/>
            {/* <p class="text-primary"> Welcome! to movies library.</p> */}
            {/* <p> Here you can find movies from our library</p> */}
          {/* </div> */}
          {/* <div className="col-md-3 col-sm-3 col-lg-3" > */}
            {/* <img src={cover} alt="" style={imgStyle}/> */}
            {/* <p class="text-primary"> Welcome! to movies library.</p> */}
            {/* <p> Here you can find movies from our library</p> */}
          {/* </div> */}
          {/* <div className="col-md-3 col-sm-3 col-lg-3" > */}
            {/* <img src={cover} alt="" style={imgStyle}/> */}
            {/* <p class="text-primary"> Welcome! to movies library.</p> */}
            {/* <p> Here you can find movies from our library</p> */}
          {/* </div> */}
        </div>
      </div>
      </section>
    );
  }
}

export default Hero;
