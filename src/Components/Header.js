import React, {Component} from 'react';
import Card from './Card';

class Header extends Component{

  constructor(){
    super();
    this.state = {key: '', search: false};
    this.searchHandler = this.searchHandler.bind(this);
    this.viewResult = this.viewResult.bind(this);
  }

  searchHandler(e){
    this.setState({ key : e.target.value, search: true });
  }

  viewResult(){
    let list = require('../data.json');
    let temp = [];
    if(this.state.key !== ''){
      list.name.forEach((value) => {
        if(value.includes(this.state.key) || value.startsWith(this.state.key)){
          temp.push(value);
        }
      });
    }
    return temp;
  }

  render(){

    const inputStyle = {
      padding: "5px",
      margin: "12px 12px",
      width: "200px",
      height: "25px",
      lineHeight: "14px",
      fontSize: "14px",
      border: "1px solid #777",
      borderRadius: "4px"
    };
    const brand = {fontSize: "20px"};
    const list = {fontSize: "16px"};
    const nav = {margin: "0 0"};

    return(
      <header id="header">
        <nav className="navbar navbar-default navbar-fixed-top" style={nav}>
            <div className="container">
            <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only"> Toggle Navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" id="brand" style={brand} href=""> Movies </a>
                  </div>
                  <div className="navbar-collapse collapse" id="mainNav">
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="/" style={list}>Resource</a></li>
                        <li><a href="/" style={list}>Service</a></li>
                        <li><a href="/" style={list}>About</a></li>
                        <li><input type="text" style={inputStyle} placeholder="Search..." onChange = {this.searchHandler}></input></li>
                      </ul>
                  </div>
          </div>
          </div>
          </div>
        </nav>
          {(this.state.search)?(<Card results = {this.viewResult()}/>):false}
      </header>
    );
  }
  }
  export default Header;
