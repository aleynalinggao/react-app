import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            age:12
        }
    }
    changeName(){
        this.setState ({
            age: this.state.age + 1
        })
        this.props.getName(this.state.age);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <h2>This is my name :  {this.props.name}</h2>
                        <p>This is my age :  {this.props.age}</p>
                        <p>my teacher's name is  :  {this.props.classInfo.teacher}</p>
                        <p>my class number is  :  {this.props.classInfo.classNo}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <h2>This is my Class Mates below : </h2>
                        <ul>
                            {this.props.classInfo.classMates.map((mate,i) => 
                            <li key={i}> I m {mate.name}, my age is {mate.age},  my phone number is {mate.phone}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <button className="btn btn-primary" onClick={this.changeName.bind(this)}>sendName</button>
                    </div>
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    classInfo: PropTypes.object
}
