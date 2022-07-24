import React, { Component } from 'react';

class CallbackFunction extends Component {
    constructor(props) {
        super();
        this.state = {
            count : 0
        }
    }

    /*increment = () => {
        this.setState(
            {
                count : this.state.count + 1
            },
            () => {
                console.log("Callback function Count :", this.state.count)
            }
        )
        console.log("Count :", this.state.count)
    }*/

    increment() {
        this.setState(prevState => ({
            count : prevState.count + 1
        }),
        () => {
            console.log("Callback function Count :", this.state.count)
        })
        console.log("Count :", this.state.count)
    }

    fiveTimesIncrement() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <hr/>
                <h1>callback function</h1>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.fiveTimesIncrement()}>INCREMENT</button>
            </div>
        );
    }
}

export default CallbackFunction;