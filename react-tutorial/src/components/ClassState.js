import React, { Component } from 'react';

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        }
    }

    subscribeHandler = () => {
        this.setState( {
            message : "Thank for subscribe"
        }
            );
    }

    render() {
        return (
            <div>
               <h3>{this.state.message}</h3>
               <button onClick={() => this.subscribeHandler()}>Subscribe</button>
            </div>
        );
    }
}

export default ClassState;