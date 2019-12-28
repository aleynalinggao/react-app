import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
        this.age = this.props.age;
    }
    changeAge() {
        this.age++;
        this.setState({
            age: this.state.age+1
        }) 
        console.log(this.age);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1  col-offset-11">
                        <h2>Home's page</h2>
                        {this.props.children}
                        <p>here shows the age change : {this.state.age}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1  col-offset-11">
                        <button onClick={() => { this.changeAge() }} className="btn btn-primary">change my name</button>
                    </div>
                </div>
            </div>
        );
    }
}
