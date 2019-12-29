import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Footer = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-4  col-offset-8">
                    <h2>This is footer</h2>
                    <p>from father : {props.getName}</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;