import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

export default class App extends Component {
    render() {
        const classInfo = {
            teacher: "Teacher Wang",
            classNo: 66,
            classMates: [{
                name: "Macheal",
                phone: "123456",
                age: 11
            }, {
                name: "Jane",
                phone: "34567",
                age: 12
            }, {
                name: "Macheal",
                phone: "875434",
                age: 13
            }]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <h2>I m app component</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <Home age={12}>
                            <p>this is my child</p>
                        </Home>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4  col-offset-8">
                        <Header name={"Aleyna"} age={12} classInfo={classInfo} />
                    </div>
                </div>
            </div>
        );
    }
}
