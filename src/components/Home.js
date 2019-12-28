import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.age = this.props.age;
    }
    changeAge(){
        this.age ++;
        console.log(this.age);
    }
  render() {
    return (
        <div className="container">
          <div className="row">
              <div className="col-xs-1  col-offset-11">
                  <h2>Home's page</h2>
                  {this.props.children}
              </div>
          </div>
          <div className="row">
              <div className="col-xs-1  col-offset-11">
                  <button onClick={()=>{this.changeAge()}} className="btn btn-primary">change my name</button>
              </div>
          </div>
        </div>
    );
  }
}
