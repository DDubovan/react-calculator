import React, { Component } from 'react';
import "../styles/result.scss";

export default class Result extends Component{

    render(){
        let {result} = this.props;

        return(
            <section className="result">
                <p>{result}</p>
            </section>
        );
    }
}