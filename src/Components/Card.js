import React, {Component} from 'react';

class Card extends Component{

  render(){
    const listStyle = {textDecoration: "none", color: "#666", display:"block", paddingLeft:"10px"};
    const cardStyle = {
      position: "absolute",
      top: "50px",
      width: "20vw",
      zIndex: "100",
      background: "#ffffff",
      borderRadius: "5px"
    };

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-offset-9 col-sm-offset-9 col-xs-offset-8 col-lg-offset-9" style={cardStyle}>
            <a href="/" style={listStyle}><h5>{this.props.results[0]}</h5></a>
            <a href="/" style={listStyle}><h5>{this.props.results[1]}</h5></a>
            <a href="/" style={listStyle}><h5>{this.props.results[2]}</h5></a>
            <a href="/" style={listStyle}><h5>{this.props.results[3]}</h5></a>
            <a href="/" style={listStyle}><h5>{this.props.results[4]}</h5></a>
         </div>
       </div>
     </div>
    );
  }
}

export default Card;
